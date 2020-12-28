import UI_BottomBtnF from "../fui/com/UI_BottomBtnF";
import UI_badBtn from "../fui/com/UI_badBtn";
import {CccUtil} from "../Lib/CccUtil";
import {EventMgr} from "../Lib/Mvc/EventMgr";
import {Msg} from "../Lib/Mvc/Msg";
import {OpenViewModel, ViewName} from "../data/Model";
import UI_scBtn from "../fui/com/UI_scBtn";
import {GameData} from "../data/GameData";
import {ViewMgr} from "../Lib/Mvc/ViewMgr";
import UI_jysBtn from "../fui/com/UI_jysBtn";
import UI_LiftBtnF from "../fui/com/UI_LiftBtnF";
import UI_LiftBtn2 from "../fui/com/UI_LiftBtn2";
import {MusicMgr} from "../Lib/MusicMgr";

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
        console.log("UIStart")
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
        let badBtn = <UI_badBtn>(this.UI_BottomBtnF.getChild("badBtn"))
        badBtn.on(cc.Node.EventType.TOUCH_END, this.badClick, this)
        GameData.BadNode = badBtn.node
        let m_jysBtn = <UI_jysBtn>(this.UI_BottomBtnF.getChild("jysBtn"));
        m_jysBtn.on(cc.Node.EventType.TOUCH_END, this.jysClick, this)
        let imBtm = <UI_badBtn>(this.UI_BottomBtnF.getChild("imBtm"))
        imBtm.on(cc.Node.EventType.TOUCH_END, this.imClick, this)
        let m_scBtn = <UI_scBtn>(this.UI_BottomBtnF.getChild("scBtn"));
        m_scBtn.on(cc.Node.EventType.TOUCH_END, this.scClick, this)
        let m_hcBtn = this.UI_BottomBtnF.getChild("hcBtn")
        m_hcBtn.on(cc.Node.EventType.TOUCH_END, this.hcClick, this)

    }


    private badClick(e: cc.Event.EventTouch) {
        console.log("点击背包", e)
        CccUtil.NodeClick(e.target, () => {
            console.log("打开背包")
            let a: OpenViewModel = {
                View: ViewName.Bad,
                ags: null
            }
            EventMgr.getInstance().emit(Msg.OPEN_VIEW, a)
        })
    }

    private scClick(e) {
        console.log("打开商城")
        CccUtil.NodeClick(e.target, () => {
            console.log("商城")
            ViewMgr.getInstance().openView({
                View: ViewName.Shop,
                ags: null
            })

        })
    }

    private hcClick(e) {
        console.log("打开合成")
        CccUtil.NodeClick(e.target, () => {
            console.log("商城")
            ViewMgr.getInstance().openView({
                View: ViewName.AllIn,
                ags: null
            })
        })
    }

    private imClick(e) {
        console.log("im点击")
        CccUtil.NodeClick(e.target, () => {

            ViewMgr.getInstance().Alert("abc", "bcd", (val, idx, arr) => {
                console.log("回调")
            })
        })

    }

    private jysClick(e) {
        console.log("jys点击")
        CccUtil.NodeClick(e.target, () => {
            ViewMgr.getInstance().openView({
                View: ViewName.Deal,
                ags: null
            })

        })

    }

    private taskClick(e) {
        console.log("每日任务")
        CccUtil.NodeClick(e.target, () => {
            ViewMgr.getInstance().openView({
                View: ViewName.Daily,
                ags: null
            })

        })
    }

    private showLiftBtn(e) {
        CccUtil.NodeClick(e.target, () => {
            console.log("展示左侧图标")
            this.UI_LiftBtnF.getTransition("show").play()
            this.liftController.selectedIndex = 1
        })
    }

    private hideLiftBtn(e) {
        console.log("隐藏左侧图标")
        CccUtil.NodeClick(e.target, () => {
            console.log("隐藏左侧图标")

            this.UI_LiftBtnF.getTransition("hide").play()
            this.liftController.selectedIndex = 0
        })

    }

}
