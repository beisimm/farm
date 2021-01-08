import UI_BottomBtnF from "../fui/com/UI_BottomBtnF";
import UI_badBtn from "../fui/com/UI_badBtn";
import {CccUtil} from "../Lib/CccUtil";
import {EventMgr} from "../Lib/Mvc/EventMgr";
import {Msg} from "../Lib/Mvc/Msg";
import {OpenViewModel, senceFun, ViewName} from "../data/Model";
import {GameData} from "../data/GameData";
import {ViewMgr} from "../Lib/Mvc/ViewMgr";
import UI_jysBtn from "../fui/com/UI_jysBtn";
import UI_LiftBtnF from "../fui/com/UI_LiftBtnF";
import UI_LiftBtn2 from "../fui/com/UI_LiftBtn2";
import {MusicMgr} from "../Lib/MusicMgr";
import {HttpMsg} from "../Lib/httpMsg";
import UI_tcBtn from "../fui/com/UI_tcBtn";
import {platform} from "../Lib/Platform";

const {ccclass, property} = cc._decorator;

@ccclass
export default class UiSrc extends cc.Component {
    private BottomUi: cc.Node;
    private UI_BottomBtnF: UI_BottomBtnF;
    private LiftUi: cc.Node;
    private UI_LiftBtnF: UI_LiftBtnF;
    private liftController: fgui.Controller;

    onLoad() {
        this.BottomUi = this.node.getChildByName("BottomUi");
        this.LiftUi = this.node.getChildByName("LiftUi");
    }

    start() {
        cc.log("UIStart")
        fgui.UIPackage.loadPackage("UI/com", this.onUILoaded.bind(this));
    }

    onUILoaded() {
        this.UI_BottomBtnF = <UI_BottomBtnF>(fgui.UIPackage.createObject("com", "BottomBtnF"));
        this.UI_LiftBtnF = <UI_LiftBtnF>(fgui.UIPackage.createObject("com", "LiftBtnF"));
        this.BottomUi.addChild(this.UI_BottomBtnF.node)
        this.LiftUi.addChild(this.UI_LiftBtnF.node)
        this.liftController = this.UI_LiftBtnF.getController("c1");
        let liftBox = <UI_LiftBtn2>(this.UI_LiftBtnF.getChild("liftBox"))
        this.UI_LiftBtnF.getChild("showBtn").on(cc.Node.EventType.TOUCH_END, this.showLiftBtn, this)
        this.UI_LiftBtnF.getChild("hideBtn").on(cc.Node.EventType.TOUCH_END, this.hideLiftBtn, this)
        this.UI_LiftBtnF.getChild("hideBtn").on(cc.Node.EventType.TOUCH_END, this.hideLiftBtn, this)
        liftBox.getChild("taskBtn").on(cc.Node.EventType.TOUCH_END, this.taskClick, this)
        liftBox.getChild("petBtn").on(cc.Node.EventType.TOUCH_END, this.petClick, this)
        liftBox.getChild("friendBtn").on(cc.Node.EventType.TOUCH_END, this.friendClick, this)
        liftBox.getChild("imBtm").on(cc.Node.EventType.TOUCH_END, this.imClick, this)
        this.UI_BottomBtnF.getChild("tcBtn").on(cc.Node.EventType.TOUCH_END, this.tcClick, this)
        let badBtn = <UI_badBtn>(this.UI_BottomBtnF.getChild("badBtn"))
        badBtn.on(cc.Node.EventType.TOUCH_END, this.badClick, this)
        GameData.BadNode = badBtn.node
        let m_jysBtn = <UI_jysBtn>(this.UI_BottomBtnF.getChild("jysBtn"));
        m_jysBtn.on(cc.Node.EventType.TOUCH_END, this.jysClick, this)
        let m_scBtn = this.UI_BottomBtnF.getChild("scBtn")
        m_scBtn.on(cc.Node.EventType.TOUCH_END, this.scClick, this)
        let m_hcBtn = this.UI_BottomBtnF.getChild("hcBtn")
        m_hcBtn.on(cc.Node.EventType.TOUCH_END, this.hcClick, this)

    }


    private badClick(e: cc.Event.EventTouch) {
        cc.log("点击背包", e)
        CccUtil.NodeClick(e.target, () => {
            cc.log("打开背包")
            let a: OpenViewModel = {
                View: ViewName.Bad,
                ags: null
            }
            EventMgr.getInstance().emit(Msg.OPEN_VIEW, a)
        })
    }

    private scClick(e) {
        cc.log("打开商城")
        CccUtil.NodeClick(e.target, () => {
            cc.log("商城")
            ViewMgr.getInstance().openView({
                View: ViewName.Shop,
                ags: null
            })

        })
    }

    private hcClick(e) {
        cc.log("打开合成")
        CccUtil.NodeClick(e.target, () => {
            cc.log("商城")
            ViewMgr.getInstance().openView({
                View: ViewName.AllIn,
                ags: null
            })
        })
    }

    private imClick(e) {
        cc.log("im点击")
        CccUtil.NodeClick(e.target, () => {
            // ViewMgr.getInstance().Alert("abc", "bcd", (val, idx, arr) => {
            //     cc.log("回调")
            // })

            // EventMgr.getInstance().emit(Msg.TOP_UI_REFRESH, {exp: 5})

            // let obj = JSON.stringify({
            //     uId: 111, openId: 222
            // })
            // let obj = {
            //         uId: 111, openId: 222
            //      }
            //
            // HttpMsg.post("http://192.168.0.153:88/api/game/farmUserLandSeedListAll", obj).then((res)=>{
            //     cc.log(res)
            // })
            // EventMgr.getInstance().emit(Msg.SENCE_REFRESH, {func: senceFun.gohome})
            platform.getUserInfo()

        })

    }

    private jysClick(e) {
        cc.log("jys点击")
        CccUtil.NodeClick(e.target, () => {
            ViewMgr.getInstance().openView({
                View: ViewName.Deal,
                ags: null
            })
        })
    }

    private petClick(e) {
        cc.log("宠物")
        CccUtil.NodeClick(e.target, () => {
            ViewMgr.getInstance().openView({
                View: ViewName.Pet,
                ags: null
            })
        })
    }

    private taskClick(e) {
        cc.log("每日任务")
        CccUtil.NodeClick(e.target, () => {
            ViewMgr.getInstance().openView({
                View: ViewName.Daily,
                ags: null
            })
        })
    }

    private friendClick(e) {
        cc.log("邀请好友")
        CccUtil.NodeClick(e.target, () => {
            ViewMgr.getInstance().openView({
                View: ViewName.Friend,
                ags: null
            })
        })
    }

    private showLiftBtn(e) {
        CccUtil.NodeClick(e.target, () => {
            cc.log("展示左侧图标")
            this.UI_LiftBtnF.getTransition("show").play()
            this.liftController.selectedIndex = 1
        })
    }

    private hideLiftBtn(e) {
        cc.log("隐藏左侧图标")
        CccUtil.NodeClick(e.target, () => {
            cc.log("隐藏左侧图标")
            this.UI_LiftBtnF.getTransition("hide").play()
            this.liftController.selectedIndex = 0
        })

    }


    private tcClick(e) {
        CccUtil.NodeClick(e.target, () => {
            cc.log("偷菜")
            EventMgr.getInstance().emit(Msg.SENCE_REFRESH, {func: senceFun.pilfer})
        })
    }
}
