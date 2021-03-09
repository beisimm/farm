import UI_RankView from "../fui/com/UI_RankView";
import {platform} from "../Lib/Platform";
import {UserMsg} from "../data/UserData";
import UI_farmSecItem from "../fui/com/UI_farmSecItem";
import UI_rankItem from "../fui/com/UI_rankItem";
import {Util} from "../Lib/Util";
import {GameData} from "../data/GameData";

const {ccclass, property} = cc._decorator;

@ccclass
export default class RankSrc extends cc.Component {
    private View: UI_RankView
    private listCont = []
    private m_list: fgui.GList;

    start() {
    }

    protected onDestroy(): void {
        this.View.m_coinBtn.off(cc.Node.EventType.TOUCH_END)
        this.View.m_tcBtn.off(cc.Node.EventType.TOUCH_END)

    }

    show(args) {
        cc.log("RankShow", args)
        this.View = args.view
        this.m_list = this.View.m_list
        this.m_list.setVirtual()
        this.m_list.itemRenderer = this.renderListItem.bind(this)
        this.m_list.numItems = this.listCont.length
        this.View.m_coinBtn.on(cc.Node.EventType.TOUCH_END, this.coinRank, this)
        this.View.m_tcBtn.on(cc.Node.EventType.TOUCH_END, this.tcRank, this)
        this.coinRank()

    }

    private renderListItem(index: number, obj: UI_rankItem) {
        let info = this.listCont[index]
        cc.log(info)
        if ([1, 2, 3].includes(info.rank)) obj.m_c1.selectedIndex = info.rank
        else obj.m_c1.selectedIndex = 0
        obj.m_name.text = info.userName ? info.userName : "?"
        obj.m_rank.text = info.rank.toString()
        obj.m_award.text = info.award > 0 ? Util.swToW(info.award.toString()) : ""
        let text = info.score?.toString();
        obj.m_price.text = text?.length > 4 ? text.slice(0, text.length - 4) + "万" : text || "0"
        // @ts-ignore
        if (info.userHeadPortrait) Util.getRemotePic(info.userHeadPortrait).then(res => obj.m_pic.m_pic.texture = res)
        else obj.m_pic.m_pic.texture = GameData.iconSf
    }

    private coinRank() {
        this.View.m_c1.selectedIndex = 0
        platform.rankList(UserMsg.getUserInfo.id).then(res => {
            this.View.m_name.text = res.rankUser.userName
            let text = res.rankUser.score.toString();
            this.View.m_price.text = text.length > 4 ? text.slice(0, text.length - 4) + "万" : text
            this.View.m_rank.text = res.rankUser.rank.toString()
            this.View.m_pic.m_pic.texture = UserMsg.IconSpriteFrame
            this.listCont = res.rankList
            this.m_list.numItems = this.listCont.length
            this.m_list.refreshVirtualList()
        })
    }

    private tcRank() {
        this.View.m_c1.selectedIndex = 1
        platform.rankListVege(UserMsg.getUserInfo.id)
            .then(res => {
                this.View.m_name.text = res.rankUser.userName
                let text = res.rankUser.score?.toString();
                this.View.m_price.text = text?.length > 4 ? text.slice(0, text.length - 4) + "万" : text
                this.View.m_rank.text = res.rankUser.rank.toString()
                this.View.m_pic.m_pic.texture = UserMsg.IconSpriteFrame
                this.listCont = res.rankList
                this.m_list.numItems = this.listCont.length
                this.m_list.refreshVirtualList()
            })

    }
}
