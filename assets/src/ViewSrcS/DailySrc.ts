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
import {Wxad} from "../Lib/wxad";

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
        UserMsg.redPoint()

    }

    show(args) {
        cc.log("DailySrcShow")
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

//
// [
// {"id":700001,"name":"每日浇水","award":"600001-50|600002-100","pic":"gj-02","max":12,"type":1},
// {"id":700002,"name":"每日施肥","award":"600001-150|400200-3","pic":"gj-05","max":6,"type":2},
// {"id":700003,"name":"在线时长","award":"600001-50|400300-2","pic":"gj-06","max":30,"type":3},
// {"id":700004,"name":"在线时长","award":"600001-60|400400-1","pic":"gj-06","max":45,"type":3},
// {"id":700005,"name":"每日种植","award":"600001-100|600002-50","pic":"zw-03","max":12,"type":4}
// ]

    private renderListItem(index: number, obj: UI_DailyItem) {
        let info = this.listCont[index]

        let res = ConfigMgr.getInstance().getConfigInfoById("task", info.taskId);
        cc.log(res, info)
        obj.getChild("pic").icon = fgui.UIPackage.getItemURL("com", `${res.pic}`)

        // let type = res.type;
        // let awardList = res.award.split("|");
        // cc.log(awardList);
        let list = obj.getChild("list").asList
        list.removeChildren(0, 2)
        info.farmTaskAwardList.forEach((val, idx, arr) => {
            let UI_DailyListItem = <UI_DailyListItem>(list.addItem("ui://cu1uq9ugtyh3dd"));
            UI_DailyListItem.getChild("num").text = `+${val.awardNumber}`
            UI_DailyListItem.getChild("pic").icon = fgui.UIPackage.getItemURL("com", val.awardId)
        })


        let child = obj.getChild("name")
        child.text = `${res.name} (${info.finishNumber}/${info.Max})`
        let m_getBtn = <UI_DailyItemBtn>(obj.getChild("getBtn"));
        m_getBtn.off(fgui.Event.CLICK)
        m_getBtn.on(fgui.Event.CLICK, () => {
            if (info.taskState == taskState.await) {
                MusicMgr.inst().playEffect("click")
                ViewMgr.getInstance().openView({
                    View: ViewName.Alert,
                    ags: {
                        type: 0,
                        title: "双倍领取",
                        content: "观看广告可以双倍领取奖励",
                        suc: () => {
                            cc.log("成功")
                            Wxad._int().videoAd((res) => {
                                cc.log("成功")
                                this.request(info, 2);
                            }, (res) => {
                                cc.log("失败")
                                this.request(info, 1);
                            })
                        },
                        fil: () => {
                            cc.log("失败")
                            this.request(info, 1);
                        }
                    }
                })
            }
        })
        let m_c1 = m_getBtn.getController("c1");
        m_c1.selectedIndex = info.taskState
    }

    private request(info, dou) {
        platform.farmTaskUserReceive(info.id, dou).then(res => {
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
                    UserMsg.addByItem(val.awardId, val.awardNumber * dou)
                })
            } else {
                platform.showToast("领取失败")
            }
        })
    }
}
