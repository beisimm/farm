import {UserData} from "../data/UserData";
import {GameData} from "../data/GameData";
import {ConfigMgr} from "../Lib/ConfigMgr";
import {taskKind, taskState, taskType} from "../data/Model";
import UI_DailyItem from "../fui/com/UI_DailyItem";
import UI_DailyItemBtn from "../fui/com/UI_DailyItemBtn";
import UI_DailyListItem from "../fui/com/UI_DailyListItem";
import {MusicMgr} from "../Lib/MusicMgr";

const {ccclass, property} = cc._decorator;
/**
 * 每日任务
 */

@ccclass
export default class DailySrc extends cc.Component {
    private View
    private m_list: fgui.GList;

    start() {
    }

    protected onDestroy(): void {
    }

    show(args) {
        console.log("DailySrcShow")
        this.View = args.view
        this.m_list = <fgui.GList>(this.View.getChild("list"));
        this.m_list.setVirtual()
        this.m_list.itemRenderer = this.renderListItem.bind(this)
        this.m_list.numItems = GameData.TaskList.length
    }

    private renderListItem(index: number, obj: UI_DailyItem) {
        let item: taskType = GameData.TaskList[index]
        let info = ConfigMgr.getInstance().getConfigInfoById("task", item.id);
        console.log(info)
        let type = info.type;
        let awardList = info.award.split("|");
        console.log(awardList);
        let list = obj.getChild("list").asList
        list.removeChildren(0, 2)
        awardList.forEach((val, idx, arr) => {
            let awardItem = val.split("-");
            let UI_DailyListItem = <UI_DailyListItem>(list.addItem("ui://cu1uq9ugtyh3dd"));
            UI_DailyListItem.getChild("num").text = `+${awardItem[1]}`
            UI_DailyListItem.getChild("pic").icon = fgui.UIPackage.getItemURL("com", `${awardItem[0]}`)

        })
        obj.getChild("pic").icon = fgui.UIPackage.getItemURL("com", `${info.pic}`)
        let val = UserData.getInstance().getUserInfo.dailyTask[taskKind[type]];
        let child = obj.getChild("name")
        child.text = `${info.name} (${val}/${info.max})`
        let m_getBtn = <UI_DailyItemBtn>(obj.getChild("getBtn"));
        m_getBtn.off(fgui.Event.CLICK)
        m_getBtn.on(fgui.Event.CLICK, () => {
            if (item.taskState == taskState.await) {
                MusicMgr.inst().playEffect("click")
                item.taskState = taskState.end
                GameData.TaskList.sort((a, b) => {
                    return a.taskState - b.taskState
                })
                this.m_list.refreshVirtualList()
            }
        })
        let m_c1 = m_getBtn.getController("c1");
        m_c1.selectedIndex = item.taskState

    }

}
