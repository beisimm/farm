/**
 * 视图管理
 * @author Lucai
 */

import {EventMgr} from "./Mvc/EventMgr";
import {OpenViewModel} from "./Model";
import {ResMgr} from "./ResMgr";
import {Msg} from "./Mvc/Msg";


export class ViewMgr {

    private static instance: ViewMgr
    private ViewContont: cc.Node
    private node: cc.Node;
    private component: any

    public static getInstance(): ViewMgr {
        if (this.instance == null) {
            this.instance = new ViewMgr();
        }
        return this.instance;
    }

    constructor() {
        this.onEvent();
        this.ViewContont = cc.Canvas.instance.node.getChildByName("ViewContont")
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
        if (this.ViewContont.children.length == 0) {
            let PrefabRes = ResMgr.getInstance().getPrefab(openView.View);
            PrefabRes.then((res) => {
                console.log("res")
            })
            PrefabRes.then((res) => {
                this.node = cc.instantiate(res);
                this.component = this.node.getComponent(`${openView.View}Src`);
                this.component.onShow()
                this.ViewContont.addChild(this.node)
            })
        } else {

        }
    }

    /**
     * 关闭指定视图
     */
    public closeView(viewName: string) {
        if (this.ViewContont.children.length == 0) return
        let ViewNode: cc.Node = this.ViewContont.getChildByName(viewName);
        this.component.onDestroy()
        this.ViewContont.removeChild(ViewNode)
        ViewNode = null
    }

    /**
     * 关闭所有视图
     */
    public closeAllView() {
        this.ViewContont.removeAllChildren(true)
    }
}
