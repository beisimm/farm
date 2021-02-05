import UI_AlertView from "../fui/com/UI_AlertView";
import {ViewMgr} from "../Lib/Mvc/ViewMgr";
import {ViewName} from "../data/Model";

const {ccclass, property} = cc._decorator;

@ccclass
export default class AlertSrc extends cc.Component {
    private View: UI_AlertView

    start() {
    }

    protected onDestroy(): void {
        (this.flag) && this.par.args.fil()
        this.View.m_yesBtn.off(cc.Node.EventType.TOUCH_END)
        this.View.m_yesBtn1.off(cc.Node.EventType.TOUCH_END)
        this.View.m_noBtn.off(cc.Node.EventType.TOUCH_END)
        this.View.m_noBtn1.off(cc.Node.EventType.TOUCH_END)
    }

    par
    flag = true

    show(par) {
        console.log("AlertSrc", par)
        this.par = par
        this.View = par.view
        this.View.m_c1.selectedIndex = par.args.type
        this.View.m_title.text = par.args.title
        this.View.m_content.text = par.args.content
        this.View.m_yesBtn.on(cc.Node.EventType.TOUCH_END, () => {
            this.flag = false
            par.args.suc()
            ViewMgr.getInstance().closeViewByName(ViewName.Alert)
        })

        this.View.m_yesBtn1.on(cc.Node.EventType.TOUCH_END, () => {
            par.args.suc()
            this.flag = false
            ViewMgr.getInstance().closeViewByName(ViewName.Alert)
        })
        this.View.m_noBtn.on(cc.Node.EventType.TOUCH_END, () => {
            this.flag = false
            par.args.fil()
            ViewMgr.getInstance().closeViewByName(ViewName.Alert)
        })
        this.View.m_noBtn1.on(cc.Node.EventType.TOUCH_END, () => {
            this.flag = false
            par.args.fil()
            ViewMgr.getInstance().closeViewByName(ViewName.Alert)
        })
    }





}
