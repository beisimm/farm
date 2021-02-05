import {EventMgr} from "./Mvc/EventMgr";
import {Msg} from "./Mvc/Msg";
import {Adres, senceFun} from "../data/Model";
import {platform} from "./Platform";
import {UserMsg} from "../data/UserData";


export class Wxad {

    private static instance
    private interstitialAd: any;
    private videoad: wx.RewardedVideoAd;
    private geziAd: any;
    private bnAd: wx.BannerAd;
    private height: number;
    private width: number;

    public static _int(): Wxad {
        if (this.instance == null) {
            this.instance = new Wxad();
        }
        return this.instance;
    }

    constructor() {

        console.log("屏幕寛高", cc.view.getVisibleSize())
        console.log("微信寛高", wx.getSystemInfoSync())
        this.height = wx.getSystemInfoSync().screenHeight
        this.width = wx.getSystemInfoSync().screenWidth
        this.initAd();
    }

    async initAd() {
        this.interstitialAd = wx.createInterstitialAd({
            adUnitId: 'adunit-fa784cbbf6e06d9e'
        })

        this.interstitialAd.onClose(res => {
            console.log('插屏 广告关闭')
            EventMgr.getInstance().emit(Msg.ADEVEN, {res: Adres.suc})
        })

        this.videoad = wx.createRewardedVideoAd({
            adUnitId: 'adunit-48bee69bb2f5ac8a'
        })

        this.videoad.onClose(res => {
            // 用户点击了【关闭广告】按钮
            // 小于 2.1.0 的基础库版本，res 是一个 undefined
            if (res && res.isEnded || res === undefined) {
                // 正常播放结束，可以下发游戏奖励
                console.log("观看视频成功")
                EventMgr.getInstance().emit(Msg.ADEVEN, {res: Adres.suc})

            } else {
                // 播放中途退出，不下发游戏奖励
                console.log("观看视频失败")
                EventMgr.getInstance().emit(Msg.ADEVEN, {res: Adres.fal})
            }
        })
        this.videoad.onError((err) => {
            console.log(err)
        })

        // 创建格子广告实例，提前初始化

        // @ts-ignore
        this.geziAd = wx.createGridAd({
            adUnitId: 'adunit-ac83a3accf768cbc',
            adTheme: 'white',
            gridCount: 5,
            style: {
                left: 0,
                top: 0,
                width: 330,
                opacity: 0.8
            }
        })

        this.geziAd.onError((err) => {
            console.log(err)
        })

        // 创建 Banner 广告实例，提前初始化
        let height = this.height / 4;
        let top1 = this.height - height;
        this.bnAd = wx.createBannerAd({
            adUnitId: 'adunit-9d5dff126ab6eb4a',
            style: {
                left: 0,
                top: 0,
                width: this.width,
                height: this.height
            }
        })
        this.bnAd.style.top = wx.getSystemInfoSync().screenHeight - this.bnAd.style.realHeight
        // this.bnAd.style.top = 30
        console.log("bbbbbbbbbbbbbbbbbddddddd", this.bnAd)

        this.bnAd.onError(err => {
            console.log(err)
        })

    }

    showBn() {
        if (UserMsg.newHandFlag) return
        this.bnAd.style.top = wx.getSystemInfoSync().screenHeight - this.bnAd.style.realHeight
        this.bnAd.show()
    }

    hideBn() {
        this.bnAd.hide()
    }

    showCP() {
        this.interstitialAd.show().catch((err) => {
            console.error(err)
        })
    }

    gezishow() {
        this.geziAd.show()
    }



    /**
     * 激励视频广告
     * @function suc 成功回调
     * @function fal 失败回调
     */
    videoAd(suc, fal) {
        if (UserMsg.newHandFlag) {
            EventMgr.getInstance().off(Msg.ADEVEN)
            suc()
        } else {
            this.videoad.show().catch(() => {
                // 失败重试
                this.videoad.load()
                    .then(() => this.videoad.show())
                    .catch(err => {
                        console.log('激励视频 广告显示失败')
                        this.interstitialAd.show().catch((err) => {
                            platform.share("test")
                            suc()
                        })
                    })
            })
            EventMgr.getInstance().off(Msg.ADEVEN)
            EventMgr.getInstance().on(Msg.ADEVEN, res => {
                console.log(res)
                if (res.res == Adres.suc) {
                    EventMgr.getInstance().off(Msg.ADEVEN)
                    suc(res)
                }
                if ((res.res == Adres.fal)) {
                    EventMgr.getInstance().off(Msg.ADEVEN)
                    fal(res)
                }
            })
        }
    }
}

