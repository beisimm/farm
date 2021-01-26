import UI_farmSecItem from "../fui/com/UI_farmSecItem";
import {UserData, UserMsg} from "../data/UserData";
import {ConfigMgr} from "../Lib/ConfigMgr";
import {BadItemType, OpenViewModel, ViewName} from "../data/Model";
import {EventMgr, EventMsg} from "../Lib/Mvc/EventMgr";
import {Msg} from "../Lib/Mvc/Msg";
import {GameData} from "../data/GameData";
import UI_BadView from "../fui/com/UI_BadView";
import {platform} from "../Lib/Platform";

/**
 * 背包
 */
const {ccclass, property} = cc._decorator;
@ccclass
export default class BadSrc extends cc.Component {
    private m_list: fgui.GList;
    private View: UI_BadView

    start() {
    }

    protected onDestroy(): void {
        cc.log("onDestroy Bad")
        EventMsg.off(Msg.BAD_REFRESH)
    }

    BadRefresh() {
        platform.farmUserKnapsackFruitListAll(UserMsg.getUserInfo.openId, UserMsg.getUserInfo.uid, UserMsg.getUserInfo.id).then(res => {
            UserMsg.reBad(res.farmUserKnapsackFruitListAll.content)
            this.m_list.refreshVirtualList()
        })
    }

    show(args) {
        cc.log("BadShow")
        this.View = args.view
        this.m_list = <fgui.GList>(this.View.getChild("list"));
        this.m_list.setVirtual()
        this.m_list.itemRenderer = this.renderListItem.bind(this)
        this.m_list.numItems = UserMsg.getUserInfo.bad.length
        EventMsg.on(Msg.BAD_REFRESH, this.BadRefresh.bind(this))
        this.BadRefresh()
        // platform.farmUserKnapsackFruitListAll(UserMsg.getUserInfo.openId, UserMsg.getUserInfo.uid, UserMsg.getUserInfo.id).then(res => {
        //     UserMsg.reBad(res.farmUserKnapsackFruitListAll.content)
        //     this.m_list.refreshVirtualList()
        // })
    }


    private renderListItem(index: number, obj: UI_farmSecItem) {
        let info = UserMsg.getUserInfo.bad[index]
        // @ts-ignore
        obj.m_lockNum.text = `${info.condition}`
        // @ts-ignore
        info.idx = index
        cc.log(info)
        let m_c1 = obj.getController("c1");
        // @ts-ignore
        m_c1.selectedIndex = info.BadType
        obj.off(fgui.Event.CLICK)
        obj.on(fgui.Event.CLICK, () => {
            cc.log("badSelect", info)
            if (info.BadType == BadItemType.Unlock) {
                GameData.seletBadData = info
                let view: OpenViewModel = {
                    View: ViewName.BadSec,
                    ags: null
                }
                EventMsg.emit(Msg.OPEN_VIEW, view)
            }
            if (info.BadType == BadItemType.CanUnlock) {
                // @ts-ignore
                platform.farmUserKnapsackFruitUpdateStatus(UserMsg.getUserInfo.id, info.knapsackId)
                    .then(res => {
                        if (res.code == 0) {
                            platform.showToast("解锁成功")
                            this.BadRefresh()
                        } else {
                            platform.showToast("解锁失败")
                        }
                    })
            }
        })
        if (info.BadType > BadItemType.Unlock) return
        if (info.id == 0) return
        let pic = <fgui.GLoader>(obj.getChild("pic"));
        let m_lockNum = <fgui.GTextField>(obj.getChild("lockNum"));
        m_lockNum.text = "99"
        let res = ConfigMgr.getInstance().getConfigInfoById("fruit", info.id)
        pic.icon = fgui.UIPackage.getItemURL("com", `${res.pic}`)
        let num = <fgui.GTextField>(obj.getChild("num"))
        num.text = info.num.toString()

    }

}
