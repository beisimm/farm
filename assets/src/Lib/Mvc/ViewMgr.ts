/**
 * 视图管理
 * @author Lucai
 */

import {EventMgr} from "./EventMgr";
import {OpenViewModel} from "../../data/Model";
import {ResMgr} from "../ResMgr";
import {Msg} from "./Msg";
import UI_AlertView from "../../fui/com/UI_AlertView";
import UI_yesBtn from "../../fui/com/UI_yesBtn";
import {MusicMgr} from "../MusicMgr";

export class ViewMgr {

    private obj: fgui.GObject;
    private ViewContent: fgui.GRoot;
    private AlertContent: fgui.GRoot;
    EffContent: fgui.GRoot;

    private static instance: ViewMgr
    public static getInstance(): ViewMgr {
        if (this.instance == null) {
            this.instance = new ViewMgr();
        }
        return this.instance;
    }

    constructor() {
        this.ViewContent = fgui.GRoot.create();
        this.ViewContent.node.name = "ViewContent"
        this.EffContent = fgui.GRoot.create();
        this.EffContent.node.name = "EffContent"
        this.AlertContent = fgui.GRoot.create();
        this.AlertContent.node.name = "Alert"
        fgui.UIPackage.loadPackage("UI/com", this.onUILoaded.bind(this));
    }

    onUILoaded() {
        console.log("ViewMgr包加载完成")
        this.onEvent();
    }

    private onEvent() {
        EventMgr.getInstance().on(Msg.OPEN_VIEW, (val: OpenViewModel) => {
            console.log("打开视图", val)
            this.openView(val)
        })
    }

    public key_view: string = "View";

    /**
     * 打开指定视图
     */
    public openView(openView: OpenViewModel) {
        let View = fgui.UIPackage.createObject("com", `${openView.View}View`)
        View.makeFullScreen()
        View.node.name = openView.View
        let Src = View.node.addComponent(`${openView.View}Src`);
        Src.show({
            view: View,
            args: openView.ags
        })
        this.ViewContent.addChild(View)
        this.playEff(View)
        this.onClose(View)
        this.viewS[openView.View] = View
    }

    /**
     * 警告
     */
    Alert(title: string = "我是标题", content: string = "我是内容", callBack?: Function) {
        let View = <UI_AlertView>(fgui.UIPackage.createObject("com", "AlertView"));
        View.makeFullScreen()
        let m_title = <fgui.GTextField>(View.getChild("title"));
        let m_content = <fgui.GTextField>(View.getChild("content"));
        let m_yesBtn = <UI_yesBtn>(View.getChild("yesBtn"));
        m_yesBtn.on(fgui.Event.CLICK, () => {
            this.closeViewByView(View)
            callBack()
        })
        m_title.text = title
        m_content.text = content
        this.AlertContent.addChild(View)
        this.onClose(View)
    }

    /**
     * 播放动效
     */
    playEff(view) {
        let m_bg = <fgui.GGraph>(view.getChild("bg"));
        m_bg.color = cc.color(0, 0, 0, 0)
        cc.tween(m_bg)
            .to(0.2, {color: cc.color(0, 0, 0, 125)})
            .start()
    }

    viewS = {}

    /**
     * 关闭指定视图
     */
    public closeViewByName(viewName: string) {
        this.closeViewByView(this.viewS[viewName])
    }

    /**
     * 关闭所有视图
     */
    public closeAllView() {

    }

    closeViewByView(View) {
        let m_bg = <fgui.GGraph>(View.getChild("bg"));
        // @ts-ignore
        let m_closeBtn = View.getChild("closeBtn")
        m_bg.off(fgui.Event.CLICK)
        m_closeBtn.off(fgui.Event.CLICK)
        View.removeFromParent()
        View.node.destroy()
        MusicMgr.inst().playEffect("click")

    }


    /**
     *  关闭按钮监听
     */
    private onClose(View) {
        // @ts-ignore
        // MusicMgr.inst().playEffect("click")
        let m_closeBtn = View.getChild("closeBtn")
        let m_bg = View.getChild("bg")
        m_closeBtn && m_closeBtn.on(fgui.Event.CLICK, this.closeViewByView.bind(this, View))
        m_bg && m_bg.on(fgui.Event.CLICK, this.closeViewByView.bind(this, View))
    }


}
