import UI_badView from "../fui/com/UI_badView";
import UI_farmSecItem from "../fui/com/UI_farmSecItem";
import {UserData, UserMsg} from "../data/UserData";
import {ConfigMgr} from "../Lib/ConfigMgr";
import {BadItemType, OpenViewModel, ViewName} from "../data/Model";
import {EventMgr, EventMsg} from "../Lib/Mvc/EventMgr";
import {Msg} from "../Lib/Mvc/Msg";
import {GameData} from "../data/GameData";

/**
 * 背包
 */
const {ccclass, property} = cc._decorator;

@ccclass
export default class BadSrc extends cc.Component {
    private m_list: fgui.GList;
    private View: UI_badView;

    start() {
    }
    protected onDestroy(): void {
        console.log("onDestroy Bad")
        EventMsg.off(Msg.BAD_REFRESH)
    }
    BadRefresh(){
        this.m_list.refreshVirtualList()
    }
    show(args) {
        console.log("BadShow")
        this.View = args.view
        this.m_list = <fgui.GList>(this.View.getChild("list"));
        this.m_list.setVirtual()
        this.m_list.itemRenderer = this.renderListItem.bind(this)
        this.m_list.numItems = UserMsg.getUserInfo.bad.length
        EventMsg.on(Msg.BAD_REFRESH, this.BadRefresh.bind(this))
    }



    private renderListItem(index: number, obj: UI_farmSecItem) {
        let info = UserMsg.getUserInfo.bad[index]
        // @ts-ignore
        info.idx = index
        console.log(info)
        let m_c1 = obj.getController("c1");
        // @ts-ignore
        m_c1.selectedIndex = info.BadType
        obj.off(fgui.Event.CLICK)
        if (info.BadType == BadItemType.Unlock) {
            obj.on(fgui.Event.CLICK, () => {
                console.log("badSelect", info)
                GameData.seletBadData = info
                let view: OpenViewModel = {
                    View: ViewName.BadSec,
                    ags: null
                }
                EventMsg.emit(Msg.OPEN_VIEW, view)
            })
        }
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
