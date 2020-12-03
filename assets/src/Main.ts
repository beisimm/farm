import UI_testCom from "./fui/com/UI_testCom";
import {EventMgr} from "./Lib/Mvc/EventMgr";
import {ViewMgr} from "./Lib/ViewMgr";
import {OpenViewModel} from "./Lib/Model";
// @ts-ignore
import {Msg} from './Lib/Mvc/Msg';
import {ResMgr} from "./Lib/ResMgr";


const {ccclass, property} = cc._decorator;

@ccclass
export default class Main extends cc.Component {
    private _view: UI_testCom;

    @property(cc.Node)
    ViewContent: cc.Node = null;
    @property(cc.Node)
    openBtn: cc.Node = null;

    private bundle: cc.AssetManager.Bundle;


    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        // fgui.UIPackage.loadPackage("UI/com", this.onUILoaded.bind(this));
        this.openBtn.on(cc.Node.EventType.TOUCH_END, this.onOpen, this)
        // cc.assetManager.loadBundle('prefab', (err) => {
        //     if (err) {
        //         cc.log('Error ', err);
        //         return;
        //     }
        // });
        EventMgr.getInstance()
        ViewMgr.getInstance()
        ResMgr.getInstance()
    }

    start() {

        // fgui.UIPackage.loadPackage("com", function(err) {
        //     console.log(err)
        //     //这里不需要再调用addPackage了，直接可以开始创建界面了
        // });


        //
        // let view = fgui.UIPackage.createObject("com","testCom");
        //
        // fgui.GRoot.inst.addChild(view);

    }

    // onUILoaded() {
    // fgui.UIObjectFactory.setExtension("ui://VirtualList/mailItem", MailItem);
    // fgui.GRoot.create();
    // this._view = fgui.UIPackage.createObject("com", "testCom").asCom;
    // this._view = UI_testCom.createInstance()
    // this._view.makeFullScreen();
    // this._view.onConstruct()
    // let child = this._view.getChildAt(4);
    // let child = this._view.m_abc
    //
    // console.log(child);
    // child.text = "赵本山"
    // fgui.GRoot.inst.addChild(this._view);
    //

    // this._view.getChild("n6").onClick(function (): void { this._list.addSelection(500, true); }, this);
    // this._view.getChild("n7").onClick(function (): void { this._list.scrollPane.scrollTop(); }, this);
    // this._view.getChild("n8").onClick(function (): void { this._list.scrollPane.scrollBottom(); }, this);
    //
    // this._list = this._view.getChild("mailList").asList;
    // this._list.setVirtual();
    //
    // this._list.itemRenderer = this.renderListItem.bind(this);
    // this._list.numItems = 1000;
    // }


    // update (dt) {}

    // onClickTexture () {
    //
    //
    //     let bundle = cc.assetManager.getBundle('test');
    //     console.log(bundle);
    //     cc.assetManager.loadBundle('test', (err) => {
    //         if (err) {
    //             cc.log('Error ',err);
    //             return;
    //         }
    //
    //     });
    // }
    private onOpen() {
        console.log("点击")
        let a:OpenViewModel = {
            View:ViewMgr.getInstance().key_view,
            ags:123
        }
        EventMgr.getInstance().emit(Msg.OPEN_VIEW,a)
        // this.bundle = cc.assetManager.getBundle('prefab');
        // console.log(this.bundle);
        // this.bundle.load("View", (err: Error, asset: cc.Prefab) => {
        //     if (err) {
        //         cc.log('Error url [' + err + ']');
        //         return;
        //     }
        //     let node = cc.instantiate(asset);
        //     this.ViewContent.addChild(node)
        //
        // })
    }
}
