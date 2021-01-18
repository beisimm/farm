import UI_EmailSecView from "../fui/com/UI_EmailSecView";
import {Email, EmailBtn} from "../data/Model";
import {UserMsg} from "../data/UserData";
import {EventMgr} from "../Lib/Mvc/EventMgr";
import {Msg} from "../Lib/Mvc/Msg";

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

    start() {
    }

    protected onDestroy(): void {
        this.m_getBtn.off(cc.Node.EventType.TOUCH_END)
        this.m_delBtn.off(cc.Node.EventType.TOUCH_END)

    }

    show(args) {
        this.View = args.view
        console.log("EmailSecSrcShow", args)
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
        this.c1 = this.View.getController("c1");
        this.sx();


    }

    private sx() {
        this.c1.selectedIndex = this.Email.EmailBtn
    }

    delClick() {
        console.log("点击删除");
        this.Email.EmailBtn = EmailBtn.empty
        this.sx()
        // @ts-ignore
        UserMsg.getUserInfo.Email.splice(this.Email.idx, 1)
        EventMgr.getInstance().emit(Msg.EMAIL_REFRESH)

    }

    private getClick(e) {
        console.log("获取")
        this.Email.EmailBtn = EmailBtn.del
        this.sx()
    }

}
