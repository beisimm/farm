import UI_FriendView from "../fui/com/UI_FriendView";
import UI_inviteBtn from "../fui/com/UI_inviteBtn";
import {platform} from "../Lib/Platform";
import {UserMsg} from "../data/UserData";
import UI_AllianceItem from "../fui/com/UI_AllianceItem";
import {Util} from "../Lib/Util";
import {GameData} from "../data/GameData";
import UI_FriendItem1 from "../fui/com/UI_FriendItem1";
import {ViewMgr} from "../Lib/Mvc/ViewMgr";
import {ViewName} from "../data/Model";

const {ccclass, property} = cc._decorator;

@ccclass
export default class FriendSrc extends cc.Component {
    private View: UI_FriendView
    private m_inviteBtn: UI_inviteBtn;
    private m_list: fgui.GList;
    listCont = []

    start() {
    }

    protected onDestroy(): void {
        this.m_inviteBtn.off(cc.Node.EventType.TOUCH_END)

    }

    show(args) {
        cc.log("FriendSrcShow")
        this.View = args.view
        this.m_list = this.View.m_list
        this.m_inviteBtn = <UI_inviteBtn>(this.View.getChild("inviteBtn"));
        this.m_inviteBtn.on(cc.Node.EventType.TOUCH_END, this.onShare, this)
        platform.farmUserFriendListAll(UserMsg.getUserInfo.id).then((res) => {
            cc.log(res)
            this.listCont = res.farmUserDTOList
            this.m_list.setVirtual()
            this.m_list.itemRenderer = this.renderListItem.bind(this)
            this.m_list.numItems = this.listCont.length
        })

    }

    private renderListItem(index: number, obj: UI_FriendItem1) {
        let info = this.listCont[index]
        obj.m_name.text = info.userName ? Util.strLenSub(info.userName) : "?"
        obj.m_level.text = `LV.${info.userGrade}`
        obj.m_c1.selectedIndex = info.bol
        // @ts-ignore
        if (info.userHeadPortrait) Util.getRemotePic(info.userHeadPortrait).then(res => obj.m_pic.m_pic.texture = res)
        else obj.m_pic.m_pic.texture = GameData.iconSf
        obj.m_goBtn.off(cc.Node.EventType.TOUCH_END)
        obj.m_goBtn.on(cc.Node.EventType.TOUCH_END, () => {
            GameData.nowFriendId = info.id
            platform.farmUserCallOn(UserMsg.getUserInfo.id, info.id).then(res => {
                cc.log(res)
                UserMsg.toucai(res.FarmUserLandSeedListAll)
                ViewMgr.getInstance().closeViewByName(ViewName.Friend)
            })
        })
    }


    onShare() {
        cc.log("分享")
        platform.share(
            "快来成为我的好友吧",
            "https://7465-test-6gwtd6al3d98763e-1304914951.tcb.qcloud.la/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20210201151956.png",
            `view=Friend&friendId=${UserMsg.getUserInfo.id}`
        )
    }


}
