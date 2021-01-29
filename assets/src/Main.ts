import {EventMgr} from "./Lib/Mvc/EventMgr";
import {ViewMgr} from "./Lib/Mvc/ViewMgr";
import {ResMgr} from "./Lib/ResMgr";
import {UserData, UserMsg} from "./data/UserData";
import {ConfigMgr} from "./Lib/ConfigMgr";
import {Util} from "./Lib/Util";
import {platform} from "./Lib/Platform";
import comBinder from "./fui/com/comBinder";
import {GameData} from "./data/GameData";
import {Wxad} from "./Lib/wxad";


const {ccclass, property} = cc._decorator;

@ccclass
export default class Main extends cc.Component {


    private bundle: cc.AssetManager.Bundle;
    private uiFarmItem
    private uiFarm: fgui.GComponent;

    @property(cc.SpriteFrame)
    iconsf: cc.SpriteFrame = null;

    // LIFE-CYCLE CALLBACKS:

    onLoad() {


        // cc.macro.ENABLE_WEBGL_ANTIALIAS = true
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
        GameData.iconSf = this.iconsf
        let timeout = setTimeout(() => {
            platform.showToast("登录服务器超时", 10000)
            clearTimeout(timeout)
        }, 10000)
        platform.login()
            .then(res => {
                clearTimeout(timeout)
                UserData.getInstance().init(res)
            })
        // .catch(err => {
        //     clearTimeout(timeout)
        //     platform.showToast("服务器请求失败ca", 10000)
        // })

        // new Array(5).fill(0).forEach(async (val, idx, arr) => {
        //     platform.farmUserLandSeedListAll(20210118161330498656, "ou4-d5SaA-wByBPbHJJMoWv00BLs").then(res => {
        //         console.log("获取土地信息", idx, res)
        //     })
        //     platform.farmUserLandSeedHarvest(20210118161330498656, "ou4-d5SaA-wByBPbHJJMoWv00BLs",6, farmItem.landId)
        //
        // })


    }

    start() {
    }


}
