import UI_AuideView from "../fui/com/UI_AuideView";
import {ViewMgr} from "../Lib/Mvc/ViewMgr";
import {EventMgr, EventMsg} from "../Lib/Mvc/EventMgr";
import {Msg} from "../Lib/Mvc/Msg";
import {AuideSenceFun, factorState, OpenViewModel, senceFun, ViewName} from "../data/Model";
import {UserData, UserMsg} from "../data/UserData";
import {GameData} from "../data/GameData";
import {platform} from "../Lib/Platform";
import {Wxad} from "../Lib/wxad";

const {ccclass, property} = cc._decorator;

@ccclass
export default class AuideSrc extends cc.Component {
    private View: UI_AuideView
    flag = true

    start() {
    }

    protected onDestroy(): void {
        this.View.off(fgui.Event.CLICK)
    }

    show(args) {
        console.log("AuideSrcShow")
        this.View = args.view
        this.View.on(fgui.Event.CLICK, (val, idx, arr) => {
            if (!this.flag) return
            console.log(this.View.m_c1.selectedIndex)
            if (this.View.m_c1.selectedIndex == 0) {
                platform.farmUserGuideTheSteps(UserMsg.getUserInfo.id)
            }
            if (this.View.m_c1.selectedIndex == 1) {
                EventMgr.getInstance().emit(Msg.SENCE_AUIDE, {func: AuideSenceFun.zhongzhi})
                platform.farmUserGuideTheSteps(UserMsg.getUserInfo.id)
            }
            if (this.View.m_c1.selectedIndex == 2) {
                EventMgr.getInstance().emit(Msg.SENCE_AUIDE, {func: AuideSenceFun.xuanzhezhongzi})
                platform.farmUserGuideTheSteps(UserMsg.getUserInfo.id)

            }
            if (this.View.m_c1.selectedIndex == 3) {
                UserMsg.getUserInfo.farmData[0].factorState = factorState.arid
                EventMgr.getInstance().emit(Msg.SENCE_REFRESH, {func: senceFun.gohome})
                platform.farmUserGuideTheSteps(UserMsg.getUserInfo.id)

            }
            if (this.View.m_c1.selectedIndex == 4) {
                EventMgr.getInstance().emit(Msg.SENCE_AUIDE, {func: AuideSenceFun.jiaoshui})
                this.flag = false
                this.scheduleOnce(() => {
                    this.flag && this.View.m_c1.selectedIndex++
                    this.flag = true
                }, 2)
                platform.farmUserGuideTheSteps(UserMsg.getUserInfo.id)

            }
            if (this.View.m_c1.selectedIndex == 5) {
                EventMgr.getInstance().emit(Msg.SENCE_AUIDE, {func: AuideSenceFun.sunjian})
                this.flag = false
                this.scheduleOnce(() => {
                    this.flag && this.View.m_c1.selectedIndex++
                    this.flag = true
                }, 1)
                platform.farmUserGuideTheSteps(UserMsg.getUserInfo.id)

            }
            if (this.View.m_c1.selectedIndex == 6) {
                EventMgr.getInstance().emit(Msg.SENCE_AUIDE, {func: AuideSenceFun.caizhai})
                platform.farmUserGuideTheSteps(UserMsg.getUserInfo.id)
            }
            if (this.View.m_c1.selectedIndex == 7) {
                ViewMgr.getInstance().openView({
                    View: ViewName.Bad,
                    ags: null

                })
                platform.farmUserGuideTheSteps(UserMsg.getUserInfo.id)
            }
            if (this.View.m_c1.selectedIndex == 8) {
                GameData.seletBadData = UserMsg.getUserInfo.bad[1]
                let view: OpenViewModel = {
                    View: ViewName.BadSec,
                    ags: null
                }
                EventMsg.emit(Msg.OPEN_VIEW, view)
                ViewMgr.getInstance().closeViewByName(ViewName.Bad)
                platform.farmUserGuideTheSteps(UserMsg.getUserInfo.id)

            }
            if (this.View.m_c1.selectedIndex == 9) {
                EventMgr.getInstance().emit(Msg.SENCE_AUIDE, {func: AuideSenceFun.add})
                platform.farmUserGuideTheSteps(UserMsg.getUserInfo.id)

            }
            if (this.View.m_c1.selectedIndex == 10) {

                EventMgr.getInstance().emit(Msg.SENCE_AUIDE, {func: AuideSenceFun.cs})
                platform.farmUserGuideTheSteps(UserMsg.getUserInfo.id)

            }

            if (this.View.m_c1.selectedIndex == 11) {
                // UserMsg.MoneyChange(29980)
                ViewMgr.getInstance().openView({
                    View: ViewName.Deposit,
                    ags: null
                })
                UserMsg.newHandFlag = false
                platform.farmUserGuideTheSteps(UserMsg.getUserInfo.id, "hy")
            }
            if (this.View.m_c1.selectedIndex == 12) {
                // platform.farmUserGuideTheSteps(UserMsg.getUserInfo.id)
                Wxad._int().videoAd((res) => {
                    console.log("成功")
                    platform.transfers(1, UserMsg.getUserInfo.id).then((res) => {
                        console.log(res)
                        if (res.code == 0) {
                            platform.showToast("提现成功")
                            UserMsg.reUser()
                        } else {
                            platform.showToast(res.msg)

                        }
                    })
                }, (res) => {
                    console.log("失败")
                    platform.showToast(res.msg)
                })

                ViewMgr.getInstance().closeViewByName(ViewName.Deposit)
                this.View.removeFromParent()
                this.View.node.destroy()
                platform.login()
                    .then(res => {
                        UserData.getInstance().init(res)
                    })
            }
            if (this.View.m_c1.selectedIndex == 13) {

            }
            if (this.View.m_c1.selectedIndex == 14) {
            }


            this.View.m_c1.selectedIndex++
        })
    }

}
