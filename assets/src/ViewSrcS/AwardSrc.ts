import UI_AwardView from "../fui/com/UI_AwardView";
import {ConfigMgr} from "../Lib/ConfigMgr";

const {ccclass, property} = cc._decorator;
/**
 * 奖励视图
 */
@ccclass
export default class AwardSrc extends cc.Component {
    private View: UI_AwardView
    private m_t0: fgui.Transition;
    private info: any
    private m_pic: fgui.GLoader;
    private m_txt: fgui.GTextField;

    start() {
    }

    protected onDestroy(): void {
    }

    show(args) {
        cc.log("AwardSrcShow", args)
        this.View = args.view
        this.info = args.ags
        this.m_pic = <fgui.GLoader>(this.View.getChild("pic"));
        this.m_txt = <fgui.GTextField>(this.View.getChild("txt"));
        let res = ConfigMgr.getInstance().getConfigInfoById("fruit", args.args.id)
        this.m_pic.icon = fgui.UIPackage.getItemURL("com", `${res.pic}`);
        this.m_txt.text = `${res.name}*1`
        this.m_t0 = this.View.getTransition("t0");
        this.m_t0.play(() => {
            cc.log('播放完成', args.args.id)
        })
    }

}
