import UI_farmMain from "../fui/com/UI_farmMain";
import {UserData, UserMsg} from "../data/UserData";
import UI_farmItem from "../fui/com/UI_farmItem";
import {
    beStolen,
    dogAnim,
    factorState,
    FarmItem,
    FarmState,
    FruitToPlants,
    Plants,
    PlantState,
    senceFun,
    ViewName
} from "../data/Model";
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
import UI_winnower from "../fui/com/UI_winnower";
import UI_fangzi from "../fui/com/UI_fangzi";
import UI_cloud from "../fui/com/UI_cloud";
import {ViewMgr} from "../Lib/Mvc/ViewMgr";
import {EventMgr, EventMsg} from "../Lib/Mvc/EventMgr";
import {Msg} from "../Lib/Mvc/Msg";
import UI_handState from "../fui/com/UI_handState";
import UI_chuchongEff from "../fui/com/UI_chuchongEff";

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
    private fengche: cc.Node;
    private uiWinnower: UI_winnower;
    private bg: cc.Node;
    private fangzi: cc.Node;
    private uiFangzi: UI_fangzi;
    private dog: cc.Node;
    private dogTween: cc.Tween<cc.Node>;
    private dogDg: dragonBones.ArmatureDisplay;
    private dogAdd: fgui.GObject;
    private pos1: cc.Vec3;
    private chicken: cc.Node;
    private chickenTween: cc.Tween<any>;
    private chick: cc.Node;
    @property(cc.Node)
    ckf: cc.Node[] = [];
    private ckfs: cc.Node;
    private cloud: cc.Node;
    private uiCloud: UI_cloud;
    private catAdd: fgui.GObject;
    private cat: cc.Node;
    private ckAdd: fgui.GObject;
    private farmList: FarmItem[];
    private canZz: boolean = true
    private goHomeBtn: fgui.GImage;

    onLoad() {
        this.posNode = this.node.getChildByName("pos")
        this.bg = this.node.getChildByName("bg")
        this.ckfs = this.node.getChildByName("ckf")
        this.fangzi = this.node.getChildByName("fangzi")
        this.cloud = this.node.getChildByName("cloud")
        this.dog = this.node.getChildByName("dog")
        this.cat = this.node.getChildByName("cat")
        this.dogDg = this.dog.getComponent(dragonBones.ArmatureDisplay);
        this.farmSecNode = this.node.getChildByName("farmSec")
        this.fengche = this.node.getChildByName("fengche")
        this.anies = new Array(12).fill({});
        this.effList = new Array(5).fill({});

    }

    protected update(dt: number): void {
        if (this.ckfs) this.ckfs.children.sort((a, b) => {
            return b.y - a.y
        })

    }

    SenceRefresh(args) {
        cc.log("SenceRefresh", args)
        switch (args.func) {
            case senceFun.dogstart:
                this.dogStart()
                break
            case senceFun.dogstop:
                this.dogStop()
                break
            case senceFun.catstart:
                this.catStart();
                break
            case senceFun.catstop:
                this.catStop();
                break;
            case senceFun.ckstart:
                this.ckStart();
                break
            case senceFun.ckstop:
                this.ckStop();
                break
            case senceFun.pilfer:
                this.pilfer()
                break
            case senceFun.gohome:
                this.goHome();
                break
        }
    }

    catStop() {
        this.catAdd.node.active = true
    }

    catStart() {
        this.catAdd.node.active = false
    }

    ckStop() {
        this.ckAdd.node.active = true
    }

    ckStart() {
        this.ckAdd.node.active = false
    }

    dogStop() {
        this.dogTween.stop()
        this.dog.scaleX = -1
        cc.tween(this.dog)
            .to(2, {position: this.pos1})
            .flipX()
            .call(() => {
                this.dogDg.playAnimation(dogAnim.pa, 0)
                this.dogAdd.node.active = true
                this.dogFlag = false
            })
            .start()
    }

    dogStart() {
        this.dogTween.start()
        this.dogAdd.node.active = false
        this.dogDg.playAnimation(dogAnim.walk, 0)
        this.dogFlag = true
    }

    dogFlag = true

    swictDogState() {
        if (this.dogFlag) {
            this.dogStop()
        } else {
            this.dogStart()
        }
    }

    start() {
        cc.log("senceStart")
        EventMsg.on(Msg.SENCE_REFRESH, this.SenceRefresh.bind(this))
        fgui.UIPackage.loadPackage("UI/com", this.onUILoaded.bind(this));
        cc.log(UserData.getInstance().getUserInfo.farmData);
        this.bg.on(cc.Node.EventType.TOUCH_START, (e: cc.Event.EventTouch) => {
            let canvas = cc.find('Canvas');
            let Pos1 = canvas.convertToNodeSpaceAR(e.getLocation())
            cc.log("点击了", Pos1.x, Pos1.y)
            this.uiFarmSec.node.active = false
        })
        cc.log(this.ckfs);
        this.dogPaly();
        this.chikinPlay();
        this.schedule((val, idx, arr) => {
            this.farmTimeSet()
            UserData.getInstance().everySecond()
        }, 1, cc.macro.REPEAT_FOREVER)
    }

    private chikinPlay() {
        let duration = 4
        let pos1 = cc.v3(67, 334)
        let pos2 = cc.v3(339, 395)
        this.ckf.forEach((val, idx, arr) => {
            cc.tween(val)
                .delay(idx * 0.8)
                .repeatForever(
                    cc.tween(val)
                        .to(duration, {position: pos1})
                        .flipX()
                        .to(duration, {position: pos2})
                        .flipX()
                )
                .start()
        })
    }

    private dogPaly() {
        let duration = 3;
        this.pos1 = cc.v3(232, -30)
        let pos2 = cc.v3(-53, 85)
        let pos3 = cc.v3(-293, 8)
        this.dogTween = cc.tween(this.dog)
            .to(duration, {position: pos2})
            .to(duration, {position: pos3})
            .flipX()
            .to(duration, {position: pos2})
            .to(duration, {position: this.pos1})
            .flipX()
            .union()
            .repeatForever()
            .start();
    }

    onUILoaded() {
        this.uiFarm = <UI_farmMain>(fgui.UIPackage.createObject("com", "farmMain"));
        this.goHomeBtn = <fgui.GImage>(this.uiFarm.getChild("goHomeBtn"));
        this.uiFarmSec = <UI_farmSec>(fgui.UIPackage.createObject("com", "farmSec"))
        this.uiWinnower = <UI_winnower>(fgui.UIPackage.createObject("com", "winnower"))
        this.uiFangzi = <UI_fangzi>(fgui.UIPackage.createObject("com", "fangzi"));
        this.uiCloud = <UI_cloud>(fgui.UIPackage.createObject("com", "cloud"))
        this.dogAdd = fgui.UIPackage.createObject("com", "petAdd");
        this.catAdd = fgui.UIPackage.createObject("com", "petAdd");
        this.ckAdd = fgui.UIPackage.createObject("com", "petAdd");
        this.ckAdd.scaleX = 0.8
        this.ckAdd.scaleY = 0.8
        this.ckAdd.node.y += 150
        this.ckAdd.node.x -= 40
        this.ckf[0].addChild(this.ckAdd.node)
        this.catAdd.node.y += 200
        this.catAdd.node.x -= 40
        this.cat.addChild(this.catAdd.node)
        this.dogAdd.node.y += 200
        this.dogAdd.node.x -= 50
        this.dogAdd.node.active = false
        this.catAdd.node.active = false
        this.ckAdd.node.active = false
        let openPetView = () => {
            ViewMgr.getInstance().openView({
                View: ViewName.Pet,
                ags: null
            })
        };
        this.ckAdd.node.on(cc.Node.EventType.TOUCH_END, openPetView)
        this.dogAdd.node.on(cc.Node.EventType.TOUCH_END, openPetView)
        this.catAdd.node.on(cc.Node.EventType.TOUCH_END, openPetView)
        this.goHomeBtn.node.active = false
        this.goHomeBtn.node.on(cc.Node.EventType.TOUCH_END, this.goHome, this)
        this.dog.addChild(this.dogAdd.node)
        this.fengche.addChild(this.uiWinnower.node)
        this.fangzi.addChild(this.uiFangzi.node)
        this.cloud.addChild(this.uiCloud.node)
        this.uiFarmSec.makeFullScreen();
        this.m_list = <fgui.GList>(this.uiFarmSec.getChild("list"));
        this.m_list.setVirtual()
        this.m_list.itemRenderer = this.renderListItem.bind(this)
        this.m_list.numItems = UserData.getInstance().getPlantData.length
        this.goHome()

        // this.FarmStateSet()
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
        UserMsg.pdPetState()
    }

    /**
     * 偷菜
     */
    private pilfer() {
        MusicMgr.inst().playMusic("bg")
        this.goHomeBtn.node.active = true
        this.canZz = false
        this.farmList = GameData.otherFarm
        this.FarmStateSet()
    }

    goHome() {
        MusicMgr.inst().playMusic("bg2")
        this.gohome2();
    }

    private gohome2() {
        this.goHomeBtn.node.active = false
        this.canZz = true
        this.farmList = UserData.getInstance().getUserInfo.farmData
        this.FarmStateSet()
    }

    /**
     * 刷新土地状态
     */
    FarmStateSet() {
        let newTime = UserData.getInstance().NewTime;
        this.farmList.forEach((val: FarmItem, idx, arr) => {
            let child = <UI_farmItem>(this.uiFarm.getChild(`n${idx + 1}`));
            this.setControl(child, val);
            if (val.State < FarmState.Lock) return
            else {
                this.setPic(newTime, val, child);
            }
        })
    }


    private setControl(child, val: FarmItem) {
        child.getController("c3").selectedIndex = val.factorState
        child.getController("c1").selectedIndex = val.State
        child.getController("c2").selectedIndex = val.PlantState
        let controller = child.getController("c4");
        if (val.PlantState == PlantState.End) {
            if (this.canZz) controller.selectedIndex = 1
            else if (!this.canZz && val.beStolen == 0) controller.selectedIndex = 1
            else controller.selectedIndex = 0
        } else controller.selectedIndex = 0
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
            this.setControl(child, val);
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
        this.farmList.forEach((val: FarmItem, idx, arr) => {
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
            let m_handState = <UI_handState>(child2.getChild("handState"));
            let m_n5s = <fgui.GGraph>(child2.getChild("n5s"));

            let child3 = <UI_farmItemZw>(child2.getChild("n5"));
            let child4 = child3.getChild("n5");
            let lz = cc.instantiate(lzPf);
            lz.name = "lz"
            child4.node.addChild(lz)
            m_handState.on(cc.Node.EventType.TOUCH_END, this.onFarmClick.bind(this, idx, child.node), this)
            m_n5s.on(cc.Node.EventType.TOUCH_END, this.onFarmClick.bind(this, idx, child.node), this)
            child.on(cc.Node.EventType.TOUCH_END, this.onFarmClick.bind(this, idx, child.node), this)
            let farmStateBtn = child2.getChild("farmStateBtn")
            farmStateBtn.on(cc.Node.EventType.TOUCH_START, this.farmStateBtn.bind(this, idx, child2), this)
            let shifeiBtn = child2.getChild("shifeiBtn")
            shifeiBtn.on(cc.Node.EventType.TOUCH_START, this.shifeiClick.bind(this, idx, child2), this)
            child2.getChild("chongziBtn").on(cc.Node.EventType.TOUCH_START, this.chuchongClick.bind(this, idx, child2), this)
        })
    }

    /**
     * 施肥
     */
    shifeiClick(idx, farmItem: UI_farmItem) {
        let farmInfo = this.farmList[idx];
        cc.log("施肥点击", idx, farmInfo)
        MusicMgr.inst().playEffect("click")
        let sfEff = <UI_shifei>(farmItem.getChild("sfEff"));
        let transition = <fgui.Transition>(sfEff.getTransition("t0"))
        UserData.getInstance().addDailyData("manure")
        transition.play(() => {
            cc.log("播放结束")
            farmInfo.factorState = factorState.general
            this.RefFarmEff(idx, farmInfo)
        })
        farmInfo.factorState = factorState.Manure
        this.RefFarmEff(idx, farmInfo)
        this.effList[senceFun.dogstart]
    }

    /**
     * 浇水
     */
    private farmStateBtn(idx, farmItem: UI_farmItem) {
        let farmInfo = this.farmList[idx];
        cc.log("浇水点击", idx, farmInfo)
        MusicMgr.inst().playEffect("click")
        UserData.getInstance().addDailyData("water")
        farmInfo.factorState = factorState.water
        this.RefFarmEff(idx, farmInfo)
        let dsEff = <UI_daoshuiCom>(farmItem.getChild("dsEff"));
        let transition = <fgui.Transition>(dsEff.getTransition("t0"))
        transition.play(() => {
            cc.log("播放结束")
            farmInfo.factorState = factorState.general
            this.RefFarmEff(idx, farmInfo)
        })
    }

    /**
     * 除虫
     */
    private chuchongClick(idx, farmItem: UI_farmItem) {
        let farmInfo = this.farmList[idx];
        cc.log("浇水点击", idx, farmInfo)
        MusicMgr.inst().playEffect("click")
        farmInfo.factorState = factorState.delWorm
        this.RefFarmEff(idx, farmInfo)
        let chuchongEff = <UI_chuchongEff>(farmItem.getChild("chuchongEff"));
        let transition = chuchongEff.getTransition("t1");
        transition.play(() => {
            cc.log("播放结束")
            farmInfo.factorState = factorState.general
            this.RefFarmEff(idx, farmInfo)
        })


    }


    // 土地点击
    private onFarmClick(idx, node) {
        this.selectFarm = idx
        let farmItem = this.farmList[idx];
        cc.log(farmItem);
        if (farmItem.State == FarmState.Lock) {
            if (farmItem.PlantState == PlantState.UnStarT) {
                MusicMgr.inst().playEffect("click")
                cc.log("种植")
                if (!this.canZz) return
                this.m_list.refreshVirtualList()
                this.uiFarmSec.node.active = true
            } else if (farmItem.PlantState == PlantState.End) {
                cc.log("采摘", idx)
                let UI_farmItem = <UI_farmItem>(this.uiFarm.getChild(`n${idx + 1}`));
                if (!this.canZz) {
                    if (farmItem.beStolen == beStolen.no) {
                        // 偷别人家
                        farmItem.beStolen = beStolen.yes
                        let coinURL = fgui.UIPackage.getItemURL("com", `600001`);
                        CccUtil.NodeToNodeTween(node, GameData.MoneyNode, this.effList, coinURL, 3, 0, 0, -30, 120)
                        this.FarmStateSet()
                        MusicMgr.inst().playEffect("click2")
                    }
                } else {
                    // 自己家
                    UI_farmItem.getController("c2").selectedIndex = PlantState.Play
                    let configInfoById = ConfigMgr.getInstance().getConfigInfoById("Plants", farmItem.BotanyId + 3);
                    cc.log(configInfoById)
                    let itemURL = fgui.UIPackage.getItemURL("com", `${configInfoById.s}`);
                    let goTop = <fgui.GLoader>(UI_farmItem.getChild("goTop"))
                    goTop.icon = itemURL
                    CccUtil.NodeToNodeTween(node, GameData.BadNode, this.effList, itemURL, 3, 0, 0, -30, 120)
                    let transition = UI_farmItem.getTransition("t1");
                    let m_exp = <fgui.GTextField>(UI_farmItem.getChild("exp"));
                    let itAdd = <fgui.GTextField>(UI_farmItem.getChild("itAdd"))
                    m_exp.text = `经验+${configInfoById.exp}`
                    itAdd.text = `+${configInfoById.fruit}`
                    EventMgr.getInstance().emit(Msg.TOP_UI_REFRESH, {exp: configInfoById.exp})
                    UI_farmItem.getController("c4").selectedIndex = 0
                    MusicMgr.inst().playEffect("click2")
                    transition.play(() => {
                        farmItem.PlantState = PlantState.UnStarT
                        this.FarmStateSet()
                    })
                    let fruit = UserData.getInstance().getUserInfo.bad.find((val) => {
                        return val.id == configInfoById.res
                    });
                    cc.log(fruit)
                    if (!fruit) {

                    } else {
                        fruit.num += Number(configInfoById.fruit)
                    }
                    farmItem.StartTIme = 0
                    farmItem.EndTime = 0
                    farmItem.BotanyId = 0
                }
            }
        } else if (farmItem.State == FarmState.Unlock) {
            farmItem.State = FarmState.Lock
            if (idx < 11) this.farmList[idx + 1].State = FarmState.Unlock
            this.FarmStateSet()
        }
    }

    /**
     * 种子弹出框
     */
    private renderListItem(index: number, obj: UI_farmSecItem) {
        let info = UserData.getInstance().getPlantData[index]
        cc.log(info)
        let num = <fgui.GTextField>(obj.getChild("num"))
        num.text = info.num.toString()
        let pic = <fgui.GLoader>(obj.getChild("pic"));
        let res = ConfigMgr.getInstance().getConfigInfoById("fruit", info.id)
        cc.log(res)
        if (!res) return
        pic.icon = fgui.UIPackage.getItemURL("com", `${res.pic}`)
        pic.off(fgui.Event.CLICK)
        // 种植
        pic.on(fgui.Event.CLICK, () => {
            cc.log("点击", info)
            MusicMgr.inst().playEffect("click")
            let FtpList = ConfigMgr.getInstance().getConfigListByName("FruitToPlants")
            cc.log(FtpList);
            let t: FruitToPlants = FtpList.find((val) => {
                return val.expend == info.id
            });
            cc.log(t)
            let nowTime = UserData.getInstance().NewTime
            cc.log(nowTime)
            let farmItem = this.farmList[this.selectFarm];
            let botanyId = Number(t.create);
            cc.log(botanyId)
            let PlantInfo = ConfigMgr.getInstance().getConfigInfoById("Plants", botanyId + 3);
            cc.log(PlantInfo)
            let time = Number(PlantInfo.time)
            cc.log("该植物生命时长", time)
            farmItem.BotanyId = botanyId
            // farmItem.EndTime = nowTime + (time * 60) - 1
            farmItem.EndTime = nowTime + 2
            farmItem.StartTIme = nowTime
            farmItem.PlantState = PlantState.Start
            info.num -= 1
            cc.log(UserData.getInstance().getUserInfo.bad)
            UserData.getInstance().addDailyData("plant")
            this.RefFarmEff(this.selectFarm, farmItem)
            this.gohome2();
            this.uiFarmSec.node.active = false
        }, this)
    }


}
