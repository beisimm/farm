import UI_EmailView from "../fui/com/UI_EmailView";
import {UserMsg} from "../data/UserData";
import UI_EmailItem from "../fui/com/UI_EmailItem";
import {Email, OpenViewModel, read, ViewName} from "../data/Model";
import {CccUtil} from "../Lib/CccUtil";
import {EventMgr} from "../Lib/Mvc/EventMgr";
import {Msg} from "../Lib/Mvc/Msg";
import {platform} from "../Lib/Platform";
import {ViewMgr} from "../Lib/Mvc/ViewMgr";

const {ccclass, property} = cc._decorator;

@ccclass
export default class EmailSrc extends cc.Component {
    private View: UI_EmailView
    private m_list: fgui.GList;
    private m_AllGetBtn: fgui.GImage;
    private m_AllDelBtn: fgui.GImage;
    private listinfo: Email []

    start() {
    }

    protected onDestroy(): void {
        this.m_AllGetBtn.off(cc.Node.EventType.TOUCH_END)
        this.m_AllDelBtn.off(cc.Node.EventType.TOUCH_END)
        EventMgr.getInstance().off(Msg.EMAIL_REFRESH)
        UserMsg.redPoint()
    }

    show(args) {
        cc.log("EmailSrcShow")
        this.View = args.view
        this.m_list = this.View.getChild("list").asList
        this.m_list.setVirtual()
        this.m_list.itemRenderer = this.renderListItem.bind(this)
        // this.m_list.numItems = UserMsg.getUserInfo.Email.length
        this.m_AllGetBtn = <fgui.GImage>(this.View.getChild("AllGetBtn"));
        this.m_AllDelBtn = <fgui.GImage>(this.View.getChild("AllDelBtn"));
        this.m_AllGetBtn.on(cc.Node.EventType.TOUCH_END, this.AllGetClick, this)
        this.m_AllDelBtn.on(cc.Node.EventType.TOUCH_END, this.AllDelClick, this)
        EventMgr.getInstance().on(Msg.EMAIL_REFRESH, this.refreshList, this)
        // cc.log(this.View.m_list);
        this.refEmail();
    }

    private refEmail() {
        platform.farmMailListAll(UserMsg.getUserInfo.id).then(res => {
            this.listinfo = res.farmMailList?.map((val, idx, arr) => ({
                id: val.id,
                title: val.mailTitle,
                content: val.mailDescribe,
                read: [0, 1].includes(val.mailStatus) ? 0 : 1,
                c2: val.mailStatus - 3
            }))
            this.m_list.numItems = this.listinfo?.length || 0
            this.m_list.refreshVirtualList()
        })
    }

    private renderListItem(index: number, obj: UI_EmailItem) {
        let info = this.listinfo[index]
        // @ts-ignore
        // info.idx = index
        let c1 = obj.getController("c1")
        c1.selectedIndex = info.read
        // @ts-ignore
        obj.m_c2.selectedIndex = info.c2
        obj.off(fgui.Event.CLICK)
        obj.on(fgui.Event.CLICK, (val, idx, arr) => {
            ViewMgr.getInstance().openView({
                View: ViewName.EmailSec,
                ags: info
            })

        })
        let m_tittle = <fgui.GTextField>(obj.getChild("tittle"));
        let m_tittle2 = <fgui.GTextField>(obj.getChild("tittle2"));

        // @ts-ignore
        obj.m_date.text = info.createTime
        // @ts-ignore
        obj.m_date2.text = info.createTime
        m_tittle.text = info.title
        m_tittle2.text = info.title

    }

    AllDelClick(e) {
        CccUtil.NodeClick(e.target, () => {
            platform.farmMailDelAll(UserMsg.getUserInfo.id).then(res => {
                if (res.code == 0) {
                    platform.showToast("删除成功")
                    this.refEmail()
                }else {
                    platform.showToast(res.msg)
                }
            })
        })
    }

    private refreshList() {
        this.refEmail();
    }

    AllGetClick(e) {
        CccUtil.NodeClick(e.target, () => {
            platform.farmMailKeyToGet(UserMsg.getUserInfo.id)
                .then(res => {
                    if (res.code == 0) {
                        platform.showToast("领取成功")
                        this.refEmail()
                        res.farmMailKeyToGet.forEach((val, idx, arr) => {
                            if (val.awardId == 600001) {
                                UserMsg.MoneyChange(val.awardNumber)
                            }
                        })
                    }
                })
        })
    }


}
