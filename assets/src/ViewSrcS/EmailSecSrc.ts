import UI_EmailSecView from "../fui/com/UI_EmailSecView";
import {Email, EmailBtn} from "../data/Model";
import {UserMsg} from "../data/UserData";
import {EventMgr} from "../Lib/Mvc/EventMgr";
import {Msg} from "../Lib/Mvc/Msg";
import {platform} from "../Lib/Platform";
import UI_farmSecItem from "../fui/com/UI_farmSecItem";
import {ConfigMgr} from "../Lib/ConfigMgr";

const {ccclass, property} = cc._decorator;

@ccclass
export default class EmailSecSrc extends cc.Component {
    private View: UI_EmailSecView
    private m_tittle: fgui.GTextField;
    private m_contentLabel: fgui.GTextField;
    private c1: fgui.Controller;
    private m_delBtn: fgui.GImage;
    private m_getBtn: fgui.GImage;
    private Email: Email;
    private m_list: fgui.GList;
    private listCont: [];

    start() {
    }

    protected onDestroy(): void {
        this.m_getBtn.off(cc.Node.EventType.TOUCH_END)
        this.m_delBtn.off(cc.Node.EventType.TOUCH_END)
        EventMgr.getInstance().emit(Msg.EMAIL_REFRESH)
    }

    show(args) {
        this.View = args.view
        console.log("EmailSecSrcShow", args)
        this.View.m_c1 = args.args.c1
        this.c1 = this.View.getController("c1");
        this.m_list = this.View.m_list
        this.m_list.setVirtual()
        this.m_list.itemRenderer = this.renderListItem.bind(this)

        platform.farmMailRead(args.args.id).then(res => {
            console.log(this.View)
            this.listCont = res.farmMailAwardList
            this.m_list.numItems = this.listCont.length
            if ([3, 5].includes(res.farmMail.mailStatus)) this.c1.selectedIndex = 1
            else if (res.farmMail.mailStatus == 4) this.c1.selectedIndex = 0
        })
        this.m_tittle = <fgui.GTextField>(this.View.getChild("tittle"));
        this.m_contentLabel = <fgui.GTextField>(this.View.getChild("contentLabel"));
        this.m_delBtn = <fgui.GImage>(this.View.getChild("delBtn"));
        this.m_getBtn = <fgui.GImage>(this.View.getChild("getBtn"));
        this.m_getBtn.on(cc.Node.EventType.TOUCH_END, this.getClick, this)
        this.m_delBtn.on(cc.Node.EventType.TOUCH_END, this.delClick, this)
        let Email: Email = args.args;
        this.Email = Email
        this.m_tittle.text = Email.title
        this.m_contentLabel.text = Email.content
    }

    private renderListItem(index: number, obj: UI_farmSecItem) {
        let info = this.listCont[index]
        // @ts-ignore
        obj.m_num.text = info.awardNumber
        // @ts-ignore
        let res = ConfigMgr.getInstance().getConfigInfoById("item", info.awardId)
        obj.m_pic.icon = fgui.UIPackage.getItemURL("com", `${res.pic}`)
    }

    delClick() {
        console.log("点击删除");
        // @ts-ignore
        platform.farmMailDelSingle(this.Email.id).then(res => {
            this.c1.selectedIndex = 2
            platform.showToast("删除成功")
        })

    }

    private getClick(e) {
        console.log("获取")
        this.Email.EmailBtn = EmailBtn.del
        // @ts-ignore
        platform.farmMailReceiveAward(this.Email.id).then(res => {
            platform.showToast("领取成功")
            this.c1.selectedIndex = 1
        })
    }

}
