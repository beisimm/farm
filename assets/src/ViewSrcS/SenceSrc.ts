import UI_farmMain from "../fui/com/UI_farmMain";
import {UserData} from "../data/UserData";
import UI_farmItem from "../fui/com/UI_farmItem";
import {factorState, FarmItem, FarmState, FruitToPlants, Plants, PlantState} from "../data/Model";
import {ConfigMgr} from "../Lib/ConfigMgr";
import {Util} from "../Lib/Util";
import UI_farmSec from "../fui/com/UI_farmSec";
import UI_farmSecItem from "../fui/com/UI_farmSecItem";
import UI_farmItemZw from "../fui/com/UI_farmItemZw";
import {ResMgr} from "../Lib/ResMgr";
import UI_flyItem from "../fui/com/UI_flyItem";
import {GameData} from "../data/GameData";
import {CccUtil} from "../Lib/CccUtil";
import UI_daoshuiCom from "../fui/com/UI_daoshuiCom";
import UI_shifei from "../fui/com/UI_shifei";
import {MusicMgr} from "../Lib/MusicMgr";

const {ccclass, property} = cc._decorator;

@ccclass
export default class SenceSrc extends cc.Component {
    private uiFarm: UI_farmMain;
    private posNode: cc.Node;
    private anies: any[];
    private farmSecNode: cc.Node;
    private uiFarmSec: UI_farmSec;
    private m_list: fgui.GList;
    private selectFarm: number;
    Lz: cc.Prefab;
    private flyItem: UI_flyItem;
    effList

    onLoad() {
        this.posNode = this.node.getChildByName("pos")
        this.farmSecNode = this.node.getChildByName("farmSec")
        this.anies = new Array(12).fill({});
        this.effList = new Array(5).fill({});
    }

    start() {
        console.log("senceStart")
        fgui.UIPackage.loadPackage("UI/com", this.onUILoaded.bind(this));
        console.log(UserData.getInstance().getUserInfo.farmData);
        this.schedule((val, idx, arr) => {
            this.farmTimeSet()
            UserData.getInstance().everySecond()
        }, 1, cc.macro.REPEAT_FOREVER)
    }

    onUILoaded() {
        this.uiFarm = <UI_farmMain>(fgui.UIPackage.createObject("com", "farmMain"));
        this.uiFarmSec = <UI_farmSec>(fgui.UIPackage.createObject("com", "farmSec"))
        this.uiFarmSec.makeFullScreen();
        this.m_list = <fgui.GList>(this.uiFarmSec.getChild("list"));
        this.m_list.setVirtual()
        this.m_list.itemRenderer = this.renderListItem.bind(this)
        this.m_list.numItems = UserData.getInstance().getPlantData.length
        this.FarmStateSet()
        this.posNode.addChild(this.uiFarm.node)
        fgui.GRoot.inst.addChild(this.uiFarmSec);
        this.uiFarmSec.node.active = false
        ResMgr.getInstance().getPrefab("Lz").then(res => {
            this.Lz = res
            this.onBtnFarm(res)
        })
        this.effList.forEach((val, idx, arr) => {
            let flyItem = <UI_flyItem>(fgui.UIPackage.createObject("com", "flyItem"))
            this.effList[idx] = flyItem
            flyItem.node.opacity = 0
            this.node.addChild(flyItem.node)
        })
    }

    /**
     * 刷新土地状态
     */
    FarmStateSet() {
        let newTime = UserData.getInstance().NewTime;
        UserData.getInstance().getUserInfo.farmData.forEach((val: FarmItem, idx, arr) => {
            let child = <UI_farmItem>(this.uiFarm.getChild(`n${idx + 1}`));
            child.getController("c3").selectedIndex = val.factorState
            child.getController("c1").selectedIndex = val.State
            if (val.State < FarmState.Lock) return
            else {
                this.setPic(newTime, val, child);
            }
        })
    }

    /**
     * 刷新土地因素
     * @idx 土地索引
     * @info 该土地信息
     */
    RefFarmEff(idx, info) {
        let child = <UI_farmItem>(this.uiFarm.getChild(`n${idx + 1}`));
        child.getController("c3").selectedIndex = info.factorState
    }


    private setPic(newTime, val: FarmItem, child) {
        if (val.BotanyId == 0) return
        if (val.EndTime == 0) return
        if (val.StartTIme == 0) return
        child.getController("c2").selectedIndex = val.PlantState
        if (val.PlantState == PlantState.UnStarT) return
        let runtime = (newTime - val.StartTIme) / 60
        let child1 = <UI_farmItemZw>(child.getChild("n5"))
        let child2 = child1.getChild("n5");
        let res3 = ConfigMgr.getInstance().getConfigInfoById("Plants", val.BotanyId + 3)
        let res2 = ConfigMgr.getInstance().getConfigInfoById("Plants", val.BotanyId + 2)
        let res1 = ConfigMgr.getInstance().getConfigInfoById("Plants", val.BotanyId + 1)
        let lz = child2.node.getChildByName("lz");
        lz.active = false
        // 成熟
        if (val.EndTime < newTime && val.EndTime) {
            child2.icon = fgui.UIPackage.getItemURL("com", `${res3.pic}`)
            val.PlantState = PlantState.End
            lz.active = true
        } else if (runtime > res2.time) {
            child2.icon = fgui.UIPackage.getItemURL("com", `${res2.pic}`)
        } else if (runtime > res1.time) {
            child2.icon = fgui.UIPackage.getItemURL("com", `${res1.pic}`)
        } else {
            child2.icon = fgui.UIPackage.getItemURL("com", `zw-00`)
        }

    }

    farmTimeSet() {
        let newTime = UserData.getInstance().NewTime;
        UserData.getInstance().getUserInfo.farmData.forEach((val: FarmItem, idx, arr) => {
            if (val.State < FarmState.Lock) return
            let child = <UI_farmItem>(this.uiFarm.getChild(`n${idx + 1}`));
            let timeSting = <fgui.GTextField>(child.getChild("n6"));
            timeSting.text = Util.RemTime(val.EndTime)
            this.setPic(newTime, val, child);
        })
    }

    private onBtnFarm(lzPf) {
        this.anies.forEach((val, idx, arr) => {
            let child = this.uiFarm.getChild(`a${idx}`)
            let child2 = <UI_farmItem>(this.uiFarm.getChild(`n${idx + 1}`));
            let child3 = <UI_farmItemZw>(child2.getChild("n5"));
            let child4 = child3.getChild("n5");
            let lz = cc.instantiate(lzPf);
            lz.name = "lz"
            child4.node.addChild(lz)
            child.on(cc.Node.EventType.TOUCH_END, this.onFarmClick.bind(this, idx, child.node), this)
            let farmStateBtn = child2.getChild("farmStateBtn")
            farmStateBtn.on(cc.Node.EventType.TOUCH_START, this.farmStateBtn.bind(this, idx, child2), this)
            let shifeiBtn = child2.getChild("shifeiBtn")
            shifeiBtn.on(cc.Node.EventType.TOUCH_START, this.shifeiClick.bind(this, idx, child2), this)
        })
    }

    /**
     * 施肥
     */
    shifeiClick(idx, farmItem: UI_farmItem) {
        let farmInfo = UserData.getInstance().getUserInfo.farmData[idx];
        console.log("施肥点击", idx, farmInfo)
        MusicMgr.inst().playEffect("click")

        let sfEff = <UI_shifei>(farmItem.getChild("sfEff"));
        let transition = <fgui.Transition>(sfEff.getTransition("t0"))
        UserData.getInstance().addDailyData("manure")
        transition.play(() => {
            console.log("播放结束")
            farmInfo.factorState = factorState.general
            this.RefFarmEff(idx, farmInfo)
        })
        farmInfo.factorState = factorState.Manure
        this.RefFarmEff(idx, farmInfo)
    }

    /**
     * 浇水
     */
    private farmStateBtn(idx, farmItem: UI_farmItem) {
        let farmInfo = UserData.getInstance().getUserInfo.farmData[idx];
        console.log("浇水点击", idx, farmInfo)
        MusicMgr.inst().playEffect("click")

        UserData.getInstance().addDailyData("water")
        farmInfo.factorState = factorState.water
        let dsEff = <UI_daoshuiCom>(farmItem.getChild("dsEff"));
        let transition = <fgui.Transition>(dsEff.getTransition("t0"))
        transition.play(() => {
            console.log("播放结束")
            farmInfo.factorState = factorState.general
            this.RefFarmEff(idx, farmInfo)
        })
        this.RefFarmEff(idx, farmInfo)
    }

    // 土地点击
    private onFarmClick(idx, node) {
        MusicMgr.inst().playEffect("click")
        this.selectFarm = idx
        let farmItem = UserData.getInstance().getUserInfo.farmData[idx];
        console.log(farmItem);
        if (farmItem.State == FarmState.Lock) {
            if (farmItem.PlantState == PlantState.UnStarT) {
                console.log("可以种植")
                this.m_list.refreshVirtualList()
                this.uiFarmSec.node.active = true
            } else if (farmItem.PlantState == PlantState.End) {
                console.log("可以采摘")
                farmItem.PlantState = PlantState.UnStarT
                this.FarmStateSet()
                let configInfoById = ConfigMgr.getInstance().getConfigInfoById("Plants", farmItem.BotanyId + 3);
                console.log(configInfoById)
                let itemURL = fgui.UIPackage.getItemURL("com", `${configInfoById.fpic}`);
                CccUtil.NodeToNodeTween(node, GameData.BadNode, this.effList, itemURL, 3, 0, 0, -30, 120)
                let fruit = UserData.getInstance().getUserInfo.bad.find((val) => {
                    return val.id == configInfoById.res
                });
                console.log(fruit)
                if (!fruit) {
                    // UserData.getInstance().getUserInfo.bad.push({
                    //     id: Number(configInfoById.res),
                    //     num: Number(configInfoById.fruit)
                    // })
                } else {
                    fruit.num += Number(configInfoById.fruit)
                }
                farmItem.StartTIme = 0
                farmItem.EndTime = 0
                farmItem.BotanyId = 0
            }
        }
    }

    /**
     * 种子弹出框
     */
    private renderListItem(index: number, obj: UI_farmSecItem) {
        let info = UserData.getInstance().getPlantData[index]
        console.log(info)
        let num = <fgui.GTextField>(obj.getChild("num"))
        num.text = info.num.toString()
        let pic = <fgui.GLoader>(obj.getChild("pic"));
        let res = ConfigMgr.getInstance().getConfigInfoById("fruit", info.id)
        console.log(res)
        if (!res) return
        pic.icon = fgui.UIPackage.getItemURL("com", `${res.pic}`)
        pic.off(fgui.Event.CLICK)
        // 种植
        pic.on(fgui.Event.CLICK, () => {
            console.log("点击", info)
            MusicMgr.inst().playEffect("click")
            let FtpList = ConfigMgr.getInstance().getConfigListByName("FruitToPlants")
            console.log(FtpList);
            let t: FruitToPlants = FtpList.find((val) => {
                return val.expend == info.id
            });
            console.log(t)
            let nowTime = UserData.getInstance().NewTime
            console.log(nowTime)
            let farmItem = UserData.getInstance().getUserInfo.farmData[this.selectFarm];
            let botanyId = Number(t.create);
            console.log(botanyId)
            let PlantInfo = ConfigMgr.getInstance().getConfigInfoById("Plants", botanyId + 3);
            console.log(PlantInfo)
            let time = Number(PlantInfo.time)
            console.log("该植物生命时长", time)
            farmItem.BotanyId = botanyId
            farmItem.EndTime = nowTime + (time * 60) - 1
            farmItem.StartTIme = nowTime
            farmItem.PlantState = PlantState.Start
            info.num -= 1
            console.log(UserData.getInstance().getUserInfo.bad)
            UserData.getInstance().addDailyData("plant")
            this.RefFarmEff(this.selectFarm, farmItem)
            this.farmTimeSet()
            this.uiFarmSec.node.active = false
        }, this)
    }


}
