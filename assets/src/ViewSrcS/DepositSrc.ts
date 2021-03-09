import UI_DepositView from "../fui/com/UI_DepositView";
import {platform} from "../Lib/Platform";
import UI_AllianceItem from "../fui/com/UI_AllianceItem";
import {Util} from "../Lib/Util";
import {GameData} from "../data/GameData";
import UI_DepositItem from "../fui/com/UI_DepositItem";
import {UserMsg} from "../data/UserData";
import {Wxad} from "../Lib/wxad";
import {factorState} from "../data/Model";
import UI_chuchongEff from "../fui/com/UI_chuchongEff";

const {ccclass, property} = cc._decorator;

@ccclass
export default class DepositSrc extends cc.Component {
    private View: UI_DepositView
    listCont
    private m_list: fgui.GList;

    start() {
    }

    protected onDestroy(): void {
    }

    show(args) {
        cc.log("DepositSrcShow")
        this.View = args.view
        this.m_list = this.View.m_list
        platform.farmWithdrawListAll().then(res => {
            cc.log(res)
            if (res.code == 0) {
                this.listCont = res.farmWithdrawListAll
                this.m_list.setVirtual()
                this.m_list.itemRenderer = this.renderListItem.bind(this)
                this.m_list.numItems = this.listCont.length
            }
        })
    }

    private renderListItem(index: number, obj: UI_DepositItem) {
        let info = this.listCont[index]
        obj.m_num.text = `${info.gold}`
        obj.m_price.text = `${info.money}元`
        obj.off(cc.Node.EventType.TOUCH_END)
        obj.on(cc.Node.EventType.TOUCH_END, () => {
            Wxad._int().videoAd((res) => {
                cc.log("成功")
                platform.transfers(info.id, UserMsg.getUserInfo.id).then((res) => {
                    cc.log(res)
                    if (res.code == 0) {
                        platform.showToast("提现成功")
                        UserMsg.reUser()
                    } else {
                        platform.showToast(res.msg)
                    }
                })
            }, (res) => {
                cc.log("失败")
                platform.showToast("提现失败")
            })
        })

    }

}
