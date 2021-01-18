import UI_EmailView from "../fui/com/UI_EmailView";
import {UserMsg} from "../data/UserData";
import UI_EmailItem from "../fui/com/UI_EmailItem";
import {OpenViewModel, read, ViewName} from "../data/Model";
import {CccUtil} from "../Lib/CccUtil";
import {EventMgr} from "../Lib/Mvc/EventMgr";
import {Msg} from "../Lib/Mvc/Msg";

const {ccclass, property} = cc._decorator;

@ccclass
export default class EmailSrc extends cc.Component {
    private View: UI_EmailView
    private m_list: fgui.GList;
    private m_AllGetBtn: fgui.GImage;
    private m_AllDelBtn: fgui.GImage;

    start() {
    }

    protected onDestroy(): void {
        this.m_AllGetBtn.off(cc.Node.EventType.TOUCH_END)
        this.m_AllDelBtn.off(cc.Node.EventType.TOUCH_END)
    }

    show(args) {
        console.log("EmailSrcShow")
        this.View = args.view
        this.m_list = this.View.getChild("list").asList
        this.m_list.setVirtual()
        this.m_list.itemRenderer = this.renderListItem.bind(this)
        this.m_list.numItems = UserMsg.getUserInfo.Email.length
        this.m_AllGetBtn = <fgui.GImage>(this.View.getChild("AllGetBtn"));
        this.m_AllDelBtn = <fgui.GImage>(this.View.getChild("AllDelBtn"));
        this.m_AllGetBtn.on(cc.Node.EventType.TOUCH_END, this.AllGetClick, this)
        this.m_AllDelBtn.on(cc.Node.EventType.TOUCH_END, this.AllDelClick, this)
        EventMgr.getInstance().on(Msg.EMAIL_REFRESH, this.refreshList, this)

        console.log(this.View.m_list);

    }

    AllDelClick(e) {
        CccUtil.NodeClick(e.target, () => {
            UserMsg.getUserInfo.Email = UserMsg.getUserInfo.Email.filter((val, idx, arr) => {
                return val.read != read.yes
            })
            this.refreshList();
        })
    }

    private refreshList() {
        this.m_list.numItems = UserMsg.getUserInfo.Email.length
        this.m_list.refreshVirtualList()
    }

    AllGetClick(e) {
        CccUtil.NodeClick(e.target, () => {
            // ViewMgr.getInstance().openView({
            //     View: ViewName.Setting,
            //     ags: null
            // })
            UserMsg.getUserInfo.Email.forEach((val, idx, arr) => {
                val.read = read.yes
            })
            this.m_list.refreshVirtualList()
        })
    }


    private renderListItem(index: number, obj: UI_EmailItem) {
        let info = UserMsg.getUserInfo.Email[index]
        // @ts-ignore
        info.idx = index
        let c1 = obj.getController("c1")
        c1.selectedIndex = info.read
        obj.off(fgui.Event.CLICK)
        obj.on(fgui.Event.CLICK, (val, idx, arr) => {
            let a: OpenViewModel = {
                View: ViewName.EmailSec,
                ags: info
            }
            EventMgr.getInstance().emit(Msg.OPEN_VIEW, a)
            info.read = read.yes
            this.m_list.refreshVirtualList()
        })
        let m_tittle = <fgui.GTextField>(obj.getChild("tittle"));
        let m_tittle2 = <fgui.GTextField>(obj.getChild("tittle2"));
        let m_date = <fgui.GTextField>(obj.getChild("date"));
        let m_date2 = <fgui.GTextField>(obj.getChild("date2"));
        m_tittle.text = info.title
        m_tittle2.text = info.title
        let day = new Date(info.date * 1000);
        let date = day.getFullYear() + "年" + (day.getMonth() + 1) + "月" + day.getDate()+"日";
        m_date.text = date
        m_date2.text = date
    }

}
