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

    start() {
        fgui.UIPackage.loadPackage("UI/com", this.onUILoaded.bind(this));
        EventMgr.getInstance().on(Msg.TOP_UI_REFRESH, this.TopDataShow, this)
    }

    onUILoaded() {
        this.UI_topShowUi = <UI_topShowUi>(fgui.UIPackage.createObject("com", "topShowUi"));
        // @ts-ignore
        this.m_pic = this.UI_topShowUi.getChild("pic").getChild("pic")
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
        this.money = <fgui.GTextField>(this.UI_topShowUi.getChild("money"));
        GameData.MoneyNode = this.money.node
        this.Uname = <fgui.GTextField>(this.UI_topShowUi.getChild("name"));
        this.lv = <fgui.GTextField>(this.UI_topShowUi.getChild("lv"));
        this.m_LVPB = <UI_LVPB>(this.UI_topShowUi.getChild("LVPB"));
        this.setPBMax();
        this.m_LVPB.value = UserMsg.getUserInfo.exp
        this.setPicSf()
        this.TopDataShow()
    }

    private setPBMax(val?) {
        let lvInfo = ConfigMgr.getInstance().getConfigInfoById("grade", UserMsg.getUserInfo.lv + 1);
        console.log(lvInfo)
        this.expMax = lvInfo.dif
        this.m_LVPB.max = this.expMax
        this.m_LVPB.value = val ? val : UserMsg.getUserInfo.exp
        if (this.m_LVPB.value == 0) this.m_LVPB.value = 0.1
    }

    private TopDataShow(args?) {
        console.log(args)
        if(!this.UI_topShowUi) return

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
            console.log(this.m_LVPB)
            cc.tween(this.m_LVPB).by(0.5, {value: exp1})
                .call(() => {
                    console.log("升级")
                    UserData.getInstance().getUserInfo.lv++
                    this.lv.text = `LV.${UserData.getInstance().getUserInfo.lv}`
                    this.setPBMax(0)
                    cc.tween(this.m_LVPB)
                        .to(0, {value: 0})
                        .to(0.5, {value: exp2}).call(() => {
                        // ViewMgr.getInstance().openView({
                        //     View: ViewName.Level,
                        //     ags: null
                        // })
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
