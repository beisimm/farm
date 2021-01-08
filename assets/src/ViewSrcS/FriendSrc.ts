import UI_FriendView from "../fui/com/UI_FriendView";
import UI_inviteBtn from "../fui/com/UI_inviteBtn";
import {platform} from "../Lib/Platform";

const {ccclass, property} = cc._decorator;

@ccclass
export default class FriendSrc extends cc.Component {
    private View: UI_FriendView
    private m_inviteBtn: UI_inviteBtn;

    start() {
    }

    protected onDestroy(): void {
    }

    show(args) {
        cc.log("FriendSrcShow")
        this.View = args.view
        this.m_inviteBtn = <UI_inviteBtn>(this.View.getChild("inviteBtn"));
        this.m_inviteBtn.on(cc.Node.EventType.TOUCH_END, (val, idx, arr) => {
            cc.log("分享")
            platform.share("邀请别人成为的好友")
        })

    }


}
