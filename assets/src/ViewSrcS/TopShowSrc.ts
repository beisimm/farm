import UI_BottomBtnF from "../fui/com/UI_BottomBtnF";
import UI_topShowUi from "../fui/com/UI_topShowUi";
import {UserData} from "../data/UserData";
import UI_LVPB from "../fui/com/UI_LVPB";
import {EventMgr} from "../Lib/Mvc/EventMgr";
import {Msg} from "../Lib/Mvc/Msg";

const {ccclass, property} = cc._decorator;
@ccclass
export default class TopShowSrc extends cc.Component {
    private UI_topShowUi: UI_topShowUi;
    private money: fgui.GTextField;
    private Uname: fgui.GTextField;
    private lv: fgui.GTextField;
    private m_LVPB: UI_LVPB;

    start() {
        fgui.UIPackage.loadPackage("UI/com", this.onUILoaded.bind(this));
        EventMgr.getInstance().on(Msg.TOP_UI_REFRESH, this.TopDataShow, this)
    }

    onUILoaded() {
        this.UI_topShowUi = <UI_topShowUi>(fgui.UIPackage.createObject("com", "topShowUi"));
        this.node.addChild(this.UI_topShowUi.node)
        this.money = <fgui.GTextField>(this.UI_topShowUi.getChild("money"));
        this.Uname = <fgui.GTextField>(this.UI_topShowUi.getChild("name"));
        this.lv = <fgui.GTextField>(this.UI_topShowUi.getChild("lv"));
        this.m_LVPB = <UI_LVPB>(this.UI_topShowUi.getChild("LVPB"));
        this.TopDataShow()
        this.adExp(1)
    }

    private TopDataShow() {
        this.money.text = UserData.getInstance().getUserInfo.money.toString()
        this.Uname.text = UserData.getInstance().getUserInfo.name
        this.lv.text = `LV.${UserData.getInstance().getUserInfo.lv}`
    }

    adExp(num) {
        this.m_LVPB.value = 0
        cc.tween(this.m_LVPB).to(3, {value: 99}).start()
    }


}
