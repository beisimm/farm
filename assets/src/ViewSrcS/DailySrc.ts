import {UserData, UserMsg} from "../data/UserData";
import {GameData} from "../data/GameData";
import {ConfigMgr} from "../Lib/ConfigMgr";
import {taskKind, taskState, taskType, ViewName} from "../data/Model";
import UI_DailyItem from "../fui/com/UI_DailyItem";
import UI_DailyItemBtn from "../fui/com/UI_DailyItemBtn";
import UI_DailyListItem from "../fui/com/UI_DailyListItem";
import {MusicMgr} from "../Lib/MusicMgr";
import {platform} from "../Lib/Platform";
import {ViewMgr} from "../Lib/Mvc/ViewMgr";

const {ccclass, property} = cc._decorator;
/**
 * 每日任务
 */

@ccclass
export default class DailySrc extends cc.Component {
    private View
    private m_list: fgui.GList;
    private listCont: any []

    start() {
    }

    protected onDestroy(): void {
    }

    show(args) {
        console.log("DailySrcShow")
        this.View = args.view
        this.m_list = <fgui.GList>(this.View.getChild("list"));
        this.m_list.itemRenderer = this.renderListItem.bind(this)
        this.m_list.setVirtual()
        // this.m_list.numItems = GameData.TaskList.length
        this.TaskResf();

    }

    private TaskResf() {
        platform.farmTaskUserListAll(UserMsg.getUserInfo.id)
            .then(res => {
                this.listCont = res.farmTaskUser.map((val, idx, arr) => ({
                    taskId: val.taskId,
                    id: val.id,
                    taskState: val.finishStatus,
                    finishNumber: val.finishNumber ? val.finishNumber : 0,
                    Max: val.farmTask.taskTarget,
                    farmTaskAwardList: val.farmTaskAwardList
                })).sort((a, b) => {
                    return a.taskState - b.taskState
                })
                this.m_list.numItems = this.listCont.length
                this.m_list.refreshVirtualList()
            })
            .catch(err => {
                platform.showToast("服务器请求失败")
            })
    }

    private renderListItem(index: number, obj: UI_DailyItem) {
        let info = this.listCont[index]
        let res = ConfigMgr.getInstance().getConfigInfoById("task", info.taskId);
        console.log(res, info)
        // let type = res.type;
        // let awardList = res.award.split("|");
        // console.log(awardList);
        let list = obj.getChild("list").asList
        list.removeChildren(0, 2)
        info.farmTaskAwardList.forEach((val, idx, arr) => {
            let UI_DailyListItem = <UI_DailyListItem>(list.addItem("ui://cu1uq9ugtyh3dd"));
            UI_DailyListItem.getChild("num").text = `+${val.awardNumber}`
            UI_DailyListItem.getChild("pic").icon = fgui.UIPackage.getItemURL("com", val.awardId)
        })

        // awardList.forEach((val, idx, arr) => {
        //     let awardItem = val.split("-");
        //     let UI_DailyListItem = <UI_DailyListItem>(list.addItem("ui://cu1uq9ugtyh3dd"));
        //     UI_DailyListItem.getChild("num").text = `+${awardItem[1]}`
        //     UI_DailyListItem.getChild("pic").icon = fgui.UIPackage.getItemURL("com", `${awardItem[0]}`)
        //
        // })
        obj.getChild("pic").icon = fgui.UIPackage.getItemURL("com", `${res.pic}`)
        // let val = UserData.getInstance().getUserInfo.dailyTask[taskKind[type]];
        let child = obj.getChild("name")
        child.text = `${res.name} (${info.finishNumber}/${info.Max})`
        let m_getBtn = <UI_DailyItemBtn>(obj.getChild("getBtn"));
        m_getBtn.off(fgui.Event.CLICK)
        m_getBtn.on(fgui.Event.CLICK, () => {
            if (info.taskState == taskState.await) {
                MusicMgr.inst().playEffect("click")
                platform.farmTaskUserReceive(info.id).then(res => {
                    if (res.code == 0) {
                        platform.showToast("领取成功")
                        if (res.yesOrNoUp) {
                            ViewMgr.getInstance().openView({
                                View: ViewName.Level,
                                ags: UserMsg.getUserInfo.lv
                            })
                        }
                        this.TaskResf();
                        info.farmTaskAwardList.forEach((val, idx, arr) => {
                            UserMsg.addByItem(val.awardId, val.awardNumber)
                        })
                    } else {
                        platform.showToast("领取失败")
                    }
                })
            }
        })
        let m_c1 = m_getBtn.getController("c1");
        m_c1.selectedIndex = info.taskState
    }

}
