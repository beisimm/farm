import UI_DealView from "../fui/com/UI_DealView";

const {ccclass, property} = cc._decorator;
/**
 * 交易所
 */
@ccclass
export default class DealSrc extends cc.Component {
    private View: UI_DealView
    private m_allBtn: fgui.GGraph;
    private m_myBtn: fgui.GGraph;
    private m_c1: fgui.Controller;

    start() {
    }

    protected onDestroy(): void {
        this.m_myBtn.off(fgui.Event.CLICK)
        this.m_allBtn.off(fgui.Event.CLICK)
    }

    show(args) {
        console.log("DealSrcShow")
        this.View = args.view
        this.m_allBtn = <fgui.GGraph>(this.View.getChild("allBtn"));
        this.m_myBtn = <fgui.GGraph>(this.View.getChild("myBtn"));
        this.m_c1 = this.View.getController("c1");
        this.m_myBtn.on(fgui.Event.CLICK, this.myView, this)
        this.m_allBtn.on(fgui.Event.CLICK, this.allView, this)
    }

    private myView() {
        this.m_c1.selectedIndex = 1
    }

    private allView() {
        this.m_c1.selectedIndex = 0
    }
}
