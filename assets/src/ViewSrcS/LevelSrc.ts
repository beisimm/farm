import {MusicMgr} from "../Lib/MusicMgr";
import {platform} from "../Lib/Platform";
import {UserMsg} from "../data/UserData";
import UI_LevelView from "../fui/com/UI_LevelView";
import UI_AllInBig from "../fui/com/UI_AllInBig";
import UI_LevelTiem from "../fui/com/UI_LevelTiem";
import {ConfigMgr} from "../Lib/ConfigMgr";

const {ccclass, property} = cc._decorator;

@ccclass
export default class LevelSrc extends cc.Component {
    private View: UI_LevelView
    private m_list: fgui.GList;
    private listcont

    start() {
    }

    protected onDestroy(): void {
    }

    show(args) {
        console.log("LevelShow", args)
        this.View = args.view
        this.m_list = this.View.m_list
        this.m_list.itemRenderer = this.renderListItem.bind(this)
        this.m_list.setVirtual()
        platform.farmUserKnapsackFruitUpgrade(args.args + 1, UserMsg.getUserInfo.id)
            .then(res => {
                if (res.code == 0) {
                    this.listcont = res.farmLevelAwardList
                    this.m_list.numItems = this.listcont.length
                    this.m_list.refreshVirtualList()
                    MusicMgr.inst().playEffect("click3")
                } else {
                    platform.showToast("获取失败")
                }
            })

    }

    private renderListItem(index: number, obj: UI_LevelTiem) {
        let info = this.listcont[index]
        let res = ConfigMgr.getInstance().getConfigInfoById("item", info.awardId)
        obj.m_pic.icon = fgui.UIPackage.getItemURL("com", `${res.pic}`)
        obj.m_label.text = `${res.name}×${info.awardNumber}`
    }

}
