import UI_BottomBtnF from "../fui/com/UI_BottomBtnF";
import {CccUtil} from "../Lib/CccUtil";
import {EventMgr} from "../Lib/Mvc/EventMgr";
import {Msg} from "../Lib/Mvc/Msg";
import {OpenViewModel, senceFun, ViewName} from "../data/Model";
import {GameData} from "../data/GameData";
import {ViewMgr} from "../Lib/Mvc/ViewMgr";
import UI_LiftBtnF from "../fui/com/UI_LiftBtnF";
import UI_LiftBtn2 from "../fui/com/UI_LiftBtn2";
import {MusicMgr} from "../Lib/MusicMgr";
import {HttpMsg} from "../Lib/httpMsg";
import {platform} from "../Lib/Platform";
import {Wxad} from "../Lib/wxad";
import UI_disasterBtn from "../fui/com/UI_disasterBtn";
import {UserMsg} from "../data/UserData";

const {ccclass, property} = cc._decorator;

@ccclass
export default class UiSrc extends cc.Component {
    private BottomUi: cc.Node;
    private UI_BottomBtnF: UI_BottomBtnF;
    private LiftUi: cc.Node;
    private UI_LiftBtnF: UI_LiftBtnF;
    private liftController: fgui.Controller;
    private UI_disasterBtn: UI_disasterBtn;
    private rightUi: cc.Node;

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
        liftBox.m_rankBtn.on(cc.Node.EventType.TOUCH_END, this.rankClick, this)
        liftBox.getChild("taskBtn").on(cc.Node.EventType.TOUCH_END, this.taskClick, this)
        liftBox.getChild("petBtn").on(cc.Node.EventType.TOUCH_END, this.petClick, this)
        liftBox.getChild("friendBtn").on(cc.Node.EventType.TOUCH_END, this.friendClick, this)
        liftBox.getChild("imBtm").on(cc.Node.EventType.TOUCH_END, this.imClick, this)
        liftBox.getChild("informBtn").on(cc.Node.EventType.TOUCH_END, this.emailClick, this)
        this.UI_BottomBtnF.getChild("tcBtn").on(cc.Node.EventType.TOUCH_END, this.tcClick, this)
        let badBtn = this.UI_BottomBtnF.getChild("badBtn")
        badBtn.on(cc.Node.EventType.TOUCH_END, this.badClick, this)
        GameData.BadNode = badBtn.node
        this.UI_BottomBtnF.getChild("jysBtn").on(cc.Node.EventType.TOUCH_END, this.jysClick, this)
        let m_scBtn = this.UI_BottomBtnF.getChild("scBtn")
        m_scBtn.on(cc.Node.EventType.TOUCH_END, this.scClick, this)
        let m_hcBtn = this.UI_BottomBtnF.getChild("hcBtn")
        m_hcBtn.on(cc.Node.EventType.TOUCH_END, this.hcClick, this)
        EventMgr.getInstance().on(Msg.UI_REDPOINT, this.redPoint, this)
    }

    redPoint(args?) {
        console.log("redPoint", args)
        this.UI_LiftBtnF.m_liftBox.m_taskBtn.m_c1.selectedIndex = args.task
        this.UI_LiftBtnF.m_liftBox.m_informBtn.m_c1.selectedIndex = args.mail
        if (args.task + args.mail == 0) {
            this.UI_LiftBtnF.m_c2.selectedIndex = 0
        }else {
            this.UI_LiftBtnF.m_c2.selectedIndex = 1
        }

    }


    rankClick(e) {
        CccUtil.NodeClick(e.target, () => {
            cc.log("打开排行榜")
            ViewMgr.getInstance().openView({
                View: ViewName.Rank,
                ags: null
            })
        })
    }

    private badClick(e: cc.Event.EventTouch) {
        cc.log("点击背包", e)
        CccUtil.NodeClick(e.target, () => {
            ViewMgr.getInstance().openView({
                View: ViewName.Bad,
                ags: null
            })
        })
    }

    emailClick(e) {
        CccUtil.NodeClick(e.target, () => {
            cc.log("打开邮箱")
            this.UI_LiftBtnF.m_liftBox.m_informBtn.m_c1.selectedIndex = 0
            let a: OpenViewModel = {
                View: ViewName.Email,
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


            // platform.getUserInfo()
            // platform.showToast("功能正在开发中请期待")
            // ViewMgr.getInstance().openView({
            //     View: ViewName.Level,
            //     ags: null
            // })

            // Wxad._int().videoAd((res) => {
            //     cc.log("成功")
            //
            // }, (res) => {
            //     cc.log("失败")
            // })

            // Wxad._int().showBn()
            ViewMgr.getInstance().openView({
                View: ViewName.Alliance,
                ags: null
            })
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
            this.UI_LiftBtnF.m_liftBox.m_taskBtn.m_c1.selectedIndex = 0
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
            this.LiftUi.addComponent(cc.BlockInputEvents)
            // platform.farmMailUnReadCount(UserMsg.getUserInfo.id).then(res => {
            //     if (res.task == 1) {
            //         this.UI_LiftBtnF.m_liftBox.m_taskBtn.m_c1.selectedIndex = 1
            //     } else {
            //         this.UI_LiftBtnF.m_liftBox.m_taskBtn.m_c1.selectedIndex = 0
            //     }
            //     if (res.mail == 1) {
            //         this.UI_LiftBtnF.m_liftBox.m_informBtn.m_c1.selectedIndex = 1
            //     } else {
            //         this.UI_LiftBtnF.m_liftBox.m_informBtn.m_c1.selectedIndex = 0
            //     }
            // })
        })
    }

    private hideLiftBtn(e) {
        cc.log("隐藏左侧图标")
        CccUtil.NodeClick(e.target, () => {
            cc.log("隐藏左侧图标")
            this.UI_LiftBtnF.getTransition("hide").play()
            this.liftController.selectedIndex = 0
            this.LiftUi.removeComponent(cc.BlockInputEvents)
        })

    }


    private tcClick(e) {
        CccUtil.NodeClick(e.target, () => {
            cc.log("偷菜")
            EventMgr.getInstance().emit(Msg.SENCE_REFRESH, {func: senceFun.pilfer})
        })
    }


}
