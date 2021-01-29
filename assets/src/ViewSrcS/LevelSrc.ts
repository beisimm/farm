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
    private listcont = []

    start() {
    }

    protected onDestroy(): void {
        UserMsg.reFarmA()
    }

    show(args) {
        console.log("LevelShow", args)
        this.View = args.view
        this.m_list = <fgui.GList>(this.View.getChild("list"))
        this.m_list.itemRenderer = this.renderListItem.bind(this)
        this.m_list.setVirtual()


        platform.farmUserKnapsackFruitUpgrade(args.args + 1, UserMsg.getUserInfo.id)
            .then(res => {
                if (res.code == 0) {
                this.listcont = res.farmLevelAwardList
                res.farmLevelAwardList.forEach((val, idx, arr) => {
                    UserMsg.addByItem(val.awardId, val.awardNumber)
                })
                this.m_list.numItems = this.listcont.length
                this.m_list.refreshVirtualList()
                MusicMgr.inst().playEffect("click3")
                } else {
                    platform.showToast("获取失败")
                }
            })


        // let a = [
        //     {id: 64, levelId: 22, awardId: 600001, awardNumber: 500},
        //     {id: 65, levelId: 22, awardId: 400200, awardNumber: 5},
        //     {
        //         id: 66, levelId: 22, awardId: 400301, awardNumber: 2
        //     }]
        //
        // this.listcont = a
        // this.m_list.numItems = this.listcont.length
        // this.m_list.refreshVirtualList()
    }

    private renderListItem(index: number, obj: UI_LevelTiem) {
        let info = this.listcont[index]
        console.log("info", info)
        let res = ConfigMgr.getInstance().getConfigInfoById("item", info.awardId)
        obj.m_pic.icon = fgui.UIPackage.getItemURL("com", `${res.pic}`)
        obj.m_label.text = `${res.name}×${info.awardNumber}`
    }

}
