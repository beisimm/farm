import UI_BottomBtnF from "../fui/com/UI_BottomBtnF";
import UI_topShowUi from "../fui/com/UI_topShowUi";
import {UserData, UserMsg} from "../data/UserData";
import UI_LVPB from "../fui/com/UI_LVPB";
import {EventMgr} from "../Lib/Mvc/EventMgr";
import {Msg} from "../Lib/Mvc/Msg";
import {ConfigMgr} from "../Lib/ConfigMgr";
import {ViewMgr} from "../Lib/Mvc/ViewMgr";
import {ViewName} from "../data/Model";
import {GameData} from "../data/GameData";
import {platform} from "../Lib/Platform";
import UI_carousel from "../fui/com/UI_carousel";
// import UI_Component3 from "../fui/com/UI_Component3";

const {ccclass, property} = cc._decorator;
@ccclass
export default class TopShowSrc extends cc.Component {
    private UI_topShowUi: UI_topShowUi = null
    private money: fgui.GTextField;
    private Uname: fgui.GTextField;
    private lv: fgui.GTextField;
    private m_LVPB: UI_LVPB;
    private expMax: any;
    private m_pic
    @property(cc.Node)
    lunboNode: cc.Node = null;
    private uiCarousel: UI_carousel;

    start() {
        fgui.UIPackage.loadPackage("UI/com", this.onUILoaded.bind(this));
    }

    onUILoaded() {
        this.UI_topShowUi = <UI_topShowUi>(fgui.UIPackage.createObject("com", "topShowUi"));
        this.uiCarousel = UI_carousel.createInstance();

        // @ts-ignore
        this.m_pic = this.UI_topShowUi.getChild("pic").getChild("pic")
        this.UI_topShowUi.m_txBtn.on(cc.Node.EventType.TOUCH_END, this.openTx,this)
        this.UI_topShowUi.m_coin.on(cc.Node.EventType.TOUCH_END, this.openTx,this)
        this.UI_topShowUi.m_coinBg.on(cc.Node.EventType.TOUCH_END, this.openTx,this)
        this.UI_topShowUi.getChild("n12").node.on(cc.Node.EventType.TOUCH_END, () => {
            // platform.getUserInfo()
            ViewMgr.getInstance().openView({
                View: ViewName.User,
                ags: {
                    max: this.expMax
                }
            })
        })
        this.node.addChild(this.UI_topShowUi.node)
        this.lunboNode.addChild(this.uiCarousel.node)
        this.lunboNode.active = false
        this.money = <fgui.GTextField>(this.UI_topShowUi.getChild("money"));
        GameData.MoneyNode = this.money.node
        this.Uname = <fgui.GTextField>(this.UI_topShowUi.getChild("name"));
        this.lv = <fgui.GTextField>(this.UI_topShowUi.getChild("lv"));
        this.m_LVPB = <UI_LVPB>(this.UI_topShowUi.getChild("LVPB"));
        this.setPBMax();
        this.m_LVPB.value = UserMsg.getUserInfo.exp
        this.setPicSf()
        this.TopDataShow()
        EventMgr.getInstance().on(Msg.TOP_UI_REFRESH, this.TopDataShow, this)
        EventMgr.getInstance().on(Msg.CAROUSEL, this.playLunbo, this)
    }

    openTx(){
        ViewMgr.getInstance().openView({
            View: ViewName.Deposit,
            ags: null
        })
    }


    playLunbo() {
        platform.farmSystemNoticeThatVeryDay().then(res => {
            if (res.code == 0) {
                this.lunboNode.active = true
                this.uiCarousel.m_label.text = res.farmSystemNotice[0].notice
                this.uiCarousel.m_t0.play(() => {
                    this.lunboNode.active = false
                })
            } else {
                cc.log("没有新的轮播")
            }
        })
    }


    private setPBMax(val?) {
        let lvInfo = ConfigMgr.getInstance().getConfigInfoById("grade", UserMsg.getUserInfo.lv + 1);
        cc.log(lvInfo)
        this.expMax = lvInfo.dif
        this.m_LVPB.max = this.expMax
        this.m_LVPB.value = val ? val : UserMsg.getUserInfo.exp
        if (this.m_LVPB.value == 0) this.m_LVPB.value = 1
    }

    private TopDataShow(args?) {
        cc.log(args)
        if (!this.UI_topShowUi) return
        if (UserData.getInstance()) {
            this.money.text = UserData.getInstance().getUserInfo.money.toString()
        }
        this.lv.text = `LV.${UserData.getInstance().getUserInfo.lv}`
        this.setPicSf()
        this.setPBMax()
        args?.exp && this.adExp(args.exp)
    }

    adExp(exp) {
        if (UserData.getInstance().getUserInfo.exp + exp < this.expMax) {
            UserData.getInstance().getUserInfo.exp += exp
            cc.tween(this.m_LVPB).by(1, {value: exp}).start()
        } else {
            let exp1 = this.expMax - UserData.getInstance().getUserInfo.exp;
            let exp2 = exp - exp1;
            cc.log(this.m_LVPB)
            cc.tween(this.m_LVPB).by(0.5, {value: exp1})
                .call(() => {
                    cc.log("升级")
                    UserData.getInstance().getUserInfo.lv++
                    this.lv.text = `LV.${UserData.getInstance().getUserInfo.lv}`
                    this.setPBMax(0)
                    cc.tween(this.m_LVPB)
                        .to(0, {value: 0})
                        .to(0.5, {value: exp2}).call(() => {

                    }).start()
                    UserData.getInstance().getUserInfo.exp = exp2
                })
                .start()
        }
    }
    private setPicSf() {
        this.m_pic.texture = UserMsg.IconSpriteFrame
        this.Uname.text = UserData.getInstance().getUserInfo.name
    }
}
