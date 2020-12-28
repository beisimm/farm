import {EventMgr} from "./Lib/Mvc/EventMgr";
import {ViewMgr} from "./Lib/Mvc/ViewMgr";
import {ResMgr} from "./Lib/ResMgr";
import comBinder from "./fui/com/comBinder";
import {UserData, UserMsg} from "./data/UserData";
import {ConfigMgr} from "./Lib/ConfigMgr";
import {Util} from "./Lib/Util";


const {ccclass, property} = cc._decorator;

@ccclass
export default class Main extends cc.Component {


    private bundle: cc.AssetManager.Bundle;
    private uiFarmItem
    private uiFarm: fgui.GComponent;


    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        // 提高预览速度
        if (CC_PREVIEW) {
            cc.assetManager.downloader.maxConcurrency = 20
            cc.assetManager.downloader.maxRequestsPerFrame = 20
            // @ts-ignore
            cc.assetManager.downloader.limited = false
        }
        // fgui 环境
        ResMgr.getInstance()
        EventMgr.getInstance()
        ViewMgr.getInstance()
        UserData.getInstance()
    }

    start() {

    }


}
