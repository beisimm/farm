import UI_UserView from "../fui/com/UI_UserView";
import {CccUtil} from "../Lib/CccUtil";
import {ViewMgr} from "../Lib/Mvc/ViewMgr";
import {ViewName} from "../data/Model";
import {UserData, UserMsg} from "../data/UserData";
import UI_ProgressBar1 from "../fui/com/UI_ProgressBar1";
import {platform} from "../Lib/Platform";

const {ccclass, property} = cc._decorator;

@ccclass
export default class UserSrc extends cc.Component {
    private View: UI_UserView
    private m_pic: fgui.GLoader;

    start() {
    }

    protected onDestroy(): void {
        this.View.getChild("settingBtn").off(cc.Node.EventType.TOUCH_END)
    }

    show(args) {

        console.log("UserShow")
        this.View = args.view
        this.m_pic = this.View.getChild("pic").asLoader
        this.View.getChild("settingBtn").on(cc.Node.EventType.TOUCH_END, this.openSetting, this)
        this.View.getChild("kfBtn").on(cc.Node.EventType.TOUCH_END, () => {
            platform.getService()
        })
        this.View.getChild("nameLabel").text = UserMsg.getUserInfo.name.toString()
        this.View.getChild("lvLabel").text = `LV.${UserData.getInstance().getUserInfo.lv}`
        let pb = <UI_ProgressBar1>(this.View.getChild("pc"))
        pb.max = args.args.max
        pb.value = UserData.getInstance().getUserInfo.exp
        this.setUserIcon()

    }

    private openSetting(e) {
        CccUtil.NodeClick(e.target, () => {
            ViewMgr.getInstance().openView({
                View: ViewName.Setting,
                ags: null
            })
        })
    }

    private setUserIcon() {
        this.m_pic.texture = UserMsg.IconSpriteFrame
    }
}
