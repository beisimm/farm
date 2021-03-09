import UI_AllianceView from "../fui/com/UI_AllianceView";
import {platform} from "../Lib/Platform";
import {UserMsg} from "../data/UserData";
import UI_rankItem from "../fui/com/UI_rankItem";
import UI_AllianceItem from "../fui/com/UI_AllianceItem";
import {Util} from "../Lib/Util";
import {GameData} from "../data/GameData";

const {ccclass, property} = cc._decorator;

@ccclass
export default class AllianceSrc extends cc.Component {
    private View: UI_AllianceView
    private m_list: fgui.GList;
    listCont = []

    start() {
    }

    protected onDestroy(): void {
        this.View.m_shareBtn.off(cc.Node.EventType.TOUCH_END)
        // Wxad._int().hideBn()

    }

    show(args) {
        cc.log("AllianceSrcShow")
        this.View = args.view
        this.m_list = this.View.m_list
        this.View.m_shareBtn.on(cc.Node.EventType.TOUCH_END, this.shareClick, this)
        this.View.m_getBtn.on(cc.Node.EventType.TOUCH_END, this.getClick, this)
        platform.farmUserAllianceList(UserMsg.getUserInfo.id).then((res) => {
            cc.log(res)
            this.listCont = res.allianceDTOList
            this.m_list.setVirtual()
            this.m_list.itemRenderer = this.renderListItem.bind(this)
            this.m_list.numItems = this.listCont.length
        })
        // Wxad._int().showBn()

    }

    private renderListItem(index: number, obj: UI_AllianceItem) {
        let info = this.listCont[index]
        obj.m_name.text = info.userName ? Util.strLenSub(info.userName) : "?"
        obj.m_level.text = `LV.${info.userGrade}`
        obj.m_num.text = `+${info.userEarnings}`
        // @ts-ignore
        if (info.userHeadPortrait) Util.getRemotePic(info.userHeadPortrait).then(res => obj.m_pic.texture = res)
        else obj.m_pic.texture = GameData.iconSf
    }


    private shareClick() {
        platform.share(
            "快来加入我的联盟吧",
            "https://7465-test-6gwtd6al3d98763e-1304914951.tcb.qcloud.la/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20210201151956.png",
            `view=Allianc&inviterId=${UserMsg.getUserInfo.id}`
        )
    }

    private getClick() {
        platform.farmUserToDayAllianceGet(UserMsg.getUserInfo.id).then(res => {
            if (res.code == 0) {
                platform.showToast("领取成功")
                UserMsg.reUser()
            }else {
                platform.showToast(res.message)
            }
        })
    }
}
