import UI_SettingView from "../fui/com/UI_SettingView";
import {MusicMgr} from "../Lib/MusicMgr";

const {ccclass, property} = cc._decorator;
/**
 * 设置页
 */
@ccclass
export default class SettingSrc extends cc.Component {
    private View: UI_SettingView
    private m_sd1
    private m_sd2
    private c1: fgui.Controller;
    private c2: fgui.Controller;


    start() {
    }

    protected onDestroy(): void {
        this.m_sd1.off(cc.Node.EventType.TOUCH_END)
        this.m_sd1.off(cc.Node.EventType.TOUCH_END)
        this.m_sd2.off(cc.Node.EventType.TOUCH_CANCEL)
        this.m_sd2.off(cc.Node.EventType.TOUCH_CANCEL)
    }

    show(args) {
        cc.log("SettingSrcShow")
        this.View = args.view
        this.m_sd1 = this.View.getChild("sd1")
        this.m_sd2 = this.View.getChild("sd2")
        this.c1 = this.m_sd1.getController("c1");
        this.c2 = this.m_sd2.getController("c1");
        this.m_sd1.on(cc.Node.EventType.TOUCH_END, this.onSd1, this)
        this.m_sd1.on(cc.Node.EventType.TOUCH_CANCEL, this.onSd1, this)
        this.m_sd2.on(cc.Node.EventType.TOUCH_END, this.onSd1, this)
        this.m_sd2.on(cc.Node.EventType.TOUCH_CANCEL, this.onSd1, this)
        this.init()
    }

    init() {
        if (MusicMgr.inst().MusicFlag) this.c1.selectedIndex = 1
        else this.c1.selectedIndex = 0
        if (MusicMgr.inst().EffFlag) this.c2.selectedIndex = 1
        else this.c2.selectedIndex = 0


    }

    onSd1(e) {
        let name = e.target.$gobj.name;
        cc.log(name)
        if (name == "sd1") {
            MusicMgr.inst().swichMusic()
        }
        if (name == "sd2") {
            MusicMgr.inst().swichEff()
        }
        this.init()
    }

}
