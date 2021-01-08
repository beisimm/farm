import {EventMgr} from "./Lib/Mvc/EventMgr";
import {ViewMgr} from "./Lib/Mvc/ViewMgr";
import {ResMgr} from "./Lib/ResMgr";
import {UserData, UserMsg} from "./data/UserData";
import {ConfigMgr} from "./Lib/ConfigMgr";
import {Util} from "./Lib/Util";
import {platform} from "./Lib/Platform";


const {ccclass, property} = cc._decorator;

@ccclass
export default class Main extends cc.Component {


    private bundle: cc.AssetManager.Bundle;
    private uiFarmItem
    private uiFarm: fgui.GComponent;


    // LIFE-CYCLE CALLBACKS:

    onLoad() {

        cc.macro.ENABLE_WEBGL_ANTIALIAS = true
        // if (CC_WECHATGAME) {
        //     var obj = wx.getLaunchOptionsSync()
        //     console.log('启动小程序的路径:', obj.path)
        //     console.log('启动小程序的场景值:', obj.scene)
        //     console.log('启动小程序的 query 参数:', obj.query)
        //     console.log('来源信息:', obj.shareTicket)
        //     console.log('来源信息参数appId:', obj.referrerInfo.appId)
        //     console.log('来源信息传过来的数据:', obj.referrerInfo.extraData)

        // }


        // 提高预览速度
        // if (CC_PREVIEW) {
        //     cc.assetManager.downloader.maxConcurrency = 20
        //     cc.assetManager.downloader.maxRequestsPerFrame = 20
        //     // @ts-ignore
        //     cc.assetManager.downloader.limited = false
        // }
        // fgui 环境
        ResMgr.getInstance()
        EventMgr.getInstance()
        ViewMgr.getInstance()
        UserData.getInstance()
        // platform.login().then(res => {
        //     UserData.getInstance().init(res)
        // })
        platform.getUserInfo().then(res => {
            UserData.getInstance().setIconAndName(res)
        })

    }

    start() {

    }


}
