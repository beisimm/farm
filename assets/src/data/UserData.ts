import {BadItemType, beStolen, EmailBtn, factorState, FarmState, PlantState, read, senceFun, UserV0} from "./Model";
import {ConfigMgr} from "../Lib/ConfigMgr";
import {EventMgr} from "../Lib/Mvc/EventMgr";
import {Msg} from "../Lib/Mvc/Msg";
import {platform} from "../Lib/Platform";
import {GameData} from "./GameData";
import {ViewMgr} from "../Lib/Mvc/ViewMgr";
import {Wxad} from "../Lib/wxad";

export class UserData {
    private static instance
    IconSpriteFrame: cc.SpriteFrame;
    private date: Date;

    public static getInstance(): UserData {
        if (this.instance == null) {
            this.instance = new UserData();
        }
        // window["user11"] = this.instance
        return this.instance;
    }

    private UserV0: UserV0

    constructor() {
        this.factServerMap();
        this.UserV0 = new UserV0()
        this.dataInit()
    }

    private factServerMap() {
        this.factMap = new Map()
        this.factMap.set(1, 5)
        this.factMap.set(2, 3)
        this.factMap.set(3, 1)
        this.sortMap = new Map()
        this.sortMap.set(0, -9)
        this.sortMap.set(400501, -2)
        this.sortMap.set(400502, -1)
        this.sortMap.set(400503, 0)
        this.sortMap.set(400200, 1)
        this.sortMap.set(400300, 2)
        this.sortMap.set(400400, 3)
        this.sortMap.set(400201, 4)
        this.sortMap.set(400301, 5)
        this.sortMap.set(400401, 6)
        this.sortMap.set(400202, 7)
        this.sortMap.set(400302, 9)
        this.sortMap.set(400402, 10)
        this.zhMap = new Map()
        this.zhMap.set(1, () => {
            EventMgr.getInstance().emit(Msg.SENCE_REFRESH, {func: senceFun.shuzai})
        })
        this.zhMap.set(2, () => {
            EventMgr.getInstance().emit(Msg.SENCE_REFRESH, {func: senceFun.chognzai})
        })
    }

    /**
     * 获取用户数据
     */
    get getUserInfo() {
        return this.UserV0
    }

    s = 0

    /**
     * 每秒调用一次
     */
    everySecond() {
        this.s++
        if (this.s == 60) {
            this.s = 0
            this.everyMinute()
        }
    }

    m = 0

    everyMinute() {
        this.m++
        if (this.m == 5) { // 每5分钟处理一次
            this.m = 0
            this.reFarmA()
            this.redPoint()
        }
        this.pdPetState();
        this.heartbeat()
        EventMgr.getInstance().emit(Msg.CAROUSEL)
    }

    petFlag = [true, true, true] // 0 鸡,1 猫, 2狗
    pdPetState() {
        this.UserV0.pets.forEach((val, idx, arr) => {
            // if (this.petFlag[idx]) {
            if (val.eTime < this.NewTime) {
                // @ts-ignore
                this.petFlag[idx] = false
                switch (idx) {
                    case 0:
                        // cc.log("鸡休息")
                        EventMgr.getInstance().emit(Msg.SENCE_REFRESH, {func: senceFun.ckstop})
                        break
                    case 1:
                        // cc.log("猫休息")
                        EventMgr.getInstance().emit(Msg.SENCE_REFRESH, {func: senceFun.catstop})
                        break
                    case 2:
                        // cc.log("狗休息")
                        EventMgr.getInstance().emit(Msg.SENCE_REFRESH, {func: senceFun.dogstop})
                        break
                }
            }
            // }
        })
    }

    addDailyData(name: string, num: number = 1) {
        this.UserV0.dailyTask[name] += num
        cc.log(this.UserV0.dailyTask)
    }

    /**     * 获取合成数据     */
    getAllInData() {
        return new Promise((resolve, reject) => {
            platform.farmUserKnapsackFruitListAll(UserMsg.getUserInfo.openId, UserMsg.getUserInfo.uid, UserMsg.getUserInfo.id).then(res => {
                this.reBad(res.farmUserKnapsackFruitListAll.content)
                let a = ConfigMgr.getInstance().getConfigListByName("fruit")
                    .filter((val, idx, arr) => {
                        return val.canAllIn == 1
                    })
                    .map((val, idx, arr) => {
                        return Number(val.id)
                    })
                let b = this.UserV0.bad.filter((val, idx, arr) => {
                    return a.includes(val.id)
                });
                cc.log(b)
                // return b
                resolve(b)
            })
        })
    }

    async setIconAndName(obj) {
        this.UserV0.name = obj.name
        this.UserV0.icon = obj.Icon
        platform.farmUserNameHP(this.UserV0.id, obj.name, obj.Icon)
        this.getUserIconSf()
    }

    /**     * 获取种植数据     */
    get getPlantData(): Array<any> {
        let a = ConfigMgr.getInstance().getConfigListByName("fruit")
            .filter((val, idx, arr) => {
                return val.canGrow == 1
            })
            .map((val, idx, arr) => {
                return Number(val.id)
            })
        let b = this.UserV0.bad.filter((val, idx, arr) => {
            return a.includes(val.id)
        });
        return b
    }

    get NewTime() {
        return Math.floor(new Date().getTime() / 1000)
    }

    MoneyChange(num: number) {
        cc.log("MoneyChange", num, this.UserV0.money)
        if (this.UserV0.money + num < 0) {
            platform.showToast("金币不足")
            return
        }
        this.UserV0.money += num
        EventMgr.getInstance().emit(Msg.TOP_UI_REFRESH)
    }

    BadChange(idx: number, num: number) {
        cc.log("BadChange", num)
        this.UserV0.bad[idx].num += num
        if (this.UserV0.bad[idx].num == 0) {
            this.UserV0.bad[idx].id = 0
            this.UserV0.bad[idx].BadType = BadItemType.Empty
            this.UserV0.bad.sort((a, b) => {
                return a.BadType - b.BadType
            })
        }
    }

    BadChangeById(id: number, num: number) {
        let item = this.UserV0.bad.find((val, idx, arr) => {
            return val.id == id
        })
        cc.log("BadChangeById ", item)
        if (item) {
            item.num += num
        } else {
            let find = this.UserV0.bad.find((val, idx, arr) => {
                return val.BadType == BadItemType.Empty
            });
            find.id = id
            find.num = num
            find.BadType = BadItemType.Unlock
            cc.log(find)
        }
    }

    newHandFlag = false
    toucaiCount = 0

    /** 联网初始化数据 */
    init(data) {
        let to = setTimeout((val, idx, arr) => {
            Wxad._int().showCP()
            clearTimeout(to)
        }, 20000)
        console.log("UserInit", this.UserV0, data)
        if (data.farmUser.guideTheSteps < 8) {
            console.log("新手任务")
            this.newHandFlag = true
            this.UserV0.id = data.farmUser.id
            ViewMgr.getInstance().xinshouyingdao()
        } else {
            this.newHandFlag = false
            this.UserV0.openId = data.farmUser.openId // "oCvTF5C7YSZrNHbecc9vAWPc69d0"
            this.UserV0.uid = data.farmUser.uid // "20210105101039154925"
            this.UserV0.id = data.farmUser.id    // 4
            this.UserV0.name = data.farmUser.userName ? data.farmUser.userName : ""
            this.UserV0.icon = data.farmUser.userHeadPortrait
            this.UserV0.exp = data.farmUser.userExperience
            this.UserV0.lv = data.farmUser.userGrade
            this.UserV0.money = data.farmUser.userGold
            this.UserV0.rapidGrowth = data.farmUser.rapidGrowth
            this.heartbeatFlag = true
            this.toucaiCount = data.farmUser.thisDayVegeNumber + 10
            console.log("date", this.date)
            this.reFarm(data.farmUserLandSeedList);
            this.reBad(data.farmUserKnapsackFruitList);
            this.rePet(data.farmUserAnimalList)
            EventMgr.getInstance().emit(Msg.SENCE_REFRESH, {func: senceFun.listRefresh})
            if (!this.UserV0.name || !this.UserV0.icon) {
                platform.getUserInfo().then(res => {
                    this.setIconAndName(res)
                })
            } else {
                this.getUserIconSf()
            }
            EventMgr.getInstance().emit(Msg.TOP_UI_REFRESH)

            this.reZh(data.farmUser.elementId)
        }

        console.log(this.UserV0)
    }

    zhMap
    zhFlag = null

    async reZh(elementId) {
        try {
            if (elementId) {
                this.zhMap.get(elementId)()
                this.zhFlag = elementId
            }
        } catch (e) {

        }
    }


    /** 刷新土地信息 */
    reFarmA() {
        platform.farmUserLandSeedListAll(this.UserV0.uid, this.UserV0.openId).then(res => {
            this.m = 0
            this.reFarm(res.FarmUserLandSeedListAll)
        })
    }

    reUser() {
        platform.farmUserById(this.UserV0.id).then(res => {
            this.UserV0.exp = res.farmUser.userExperience
            this.UserV0.lv = res.farmUser.userGrade
            this.UserV0.money = res.farmUser.userGold
            EventMgr.getInstance().emit(Msg.TOP_UI_REFRESH)
        })
    }


    async rePet(data) {
        this.UserV0.pets = data.map((val, idx, arr) => ({
            id: val.animalId,
            sTime: Number(val.start) / 1000,
            eTime: Number(val.end) / 1000
        }))
        // this.pdPetState()
    }

    sortMap: Map<any, any>

    async reBad(farmUserKnapsackFruitList) {
        this.UserV0.bad = farmUserKnapsackFruitList.map((val, idx, arr) => ({
            id: val.fruitId || 0,
            num: val.number,
            BadType: val.status,
            knapsackId: val.knapsackId,
            condition: val.condition || 10
        })).sort((a, b) => {
            return this.sortMap.get(b.id) - this.sortMap.get(a.id)
        })
    }

    indReBad() {
        platform.farmUserKnapsackFruitListAll(UserMsg.getUserInfo.openId, UserMsg.getUserInfo.uid, UserMsg.getUserInfo.id).then(res => {
            this.reBad(res.farmUserKnapsackFruitListAll.content)
        })
        EventMgr.getInstance().emit(Msg.SENCE_REFRESH, {func: senceFun.listRefresh})
    }

    factMap: Map<any, any>

    async reFarm(data) {
        console.log("刷新土地信息", data)
        this.UserV0.farmData = data.map((val, idx, arr) => ({
            StartTIme: val.startTime ? Number(val.startTime) / 1000 : 0,
            EndTime: val.seedId ? Number(ConfigMgr.getInstance().getConfigInfoById("Plants", val.seedId).MaxTime) * 60 + Number(val.startTime) / 1000 : 0,
            State: val.landStatus,
            landId: val.landId,
            BotanyId: val.seedId || 0,
            PlantState: this.setPlantState(val.seedId, val.startTime),
            factorState: this.factMap.get(val.propStatus),
            beStolen: beStolen.no,

        }))
        EventMgr.getInstance().emit(Msg.SENCE_REFRESH, {func: senceFun.gohome})
    }


    toucai(data) {
        console.log("刷新偷菜信息", data)
        this.UserV0.toucaidata = data.map((val, idx, arr) => ({
            StartTIme: val.startTime ? Number(val.startTime) / 1000 : 0,
            EndTime: val.seedId ? Number(ConfigMgr.getInstance().getConfigInfoById("Plants", val.seedId).MaxTime) * 60 + Number(val.startTime) / 1000 : 0,
            State: val.landStatus < 2 ? 0 : 2,
            landId: val.landId,
            BotanyId: val.seedId || 0,
            PlantState: this.setPlantState(val.seedId, val.startTime),
            factorState: factorState.general,
            beStolen: val.canSteal == 1 ? beStolen.no : beStolen.yes,
        }))
        EventMgr.getInstance().emit(Msg.SENCE_REFRESH, {func: senceFun.toucai})
    }


    setPlantState(seedId, startTime) {
        if (!seedId) return PlantState.UnStarT
        else if ((Math.floor(new Date().getTime() / 1000)) > (Number(ConfigMgr.getInstance().getConfigInfoById("Plants", seedId).MaxTime) * 60 + Number(startTime) / 1000)) {
            return PlantState.End
        } else return PlantState.Start
    }

    dataInit() {
        // id 用于登录
        this.UserV0.id = 0
        // 名字
        this.UserV0.name = ""
        // 用户等级
        this.UserV0.lv = 1
        // 用户经验
        this.UserV0.exp = 1
        // 用户金钱
        this.UserV0.money = 28980
        // this.UserV0.nowTime = Math.floor((new Date()).valueOf() / 1000)
        this.UserV0.dailyTask = {
            plant: 0,
            water: 0,
            manure: 0,
            onlineTime: 0,
        }

        this.UserV0.rapidGrowth = 5

        this.UserV0.pets = [
            {
                id: 300101,
                sTime: 9999999999,
                eTime: 9999999999
            }, {
                id: 300201,
                sTime: 9999999999,
                eTime: 9999999999
            }, {
                id: 300301,
                sTime: 9999999999,
                eTime: 9999999999
            },
        ]

        this.UserV0.Email = [
            {
                title: "标题1",
                content: "内容1\n内容1",
                date: "1610035200",
                read: read.no,
                EmailBtn: EmailBtn.empty,
            }, {
                title: "标题2",
                content: "内容2",
                date: "1610035200",
                read: read.no,
                EmailBtn: EmailBtn.get,
            }, {
                title: "标题3",
                content: "内容3",
                date: "1610035200",
                read: read.no,
                EmailBtn: EmailBtn.del,
            }, {
                title: "标题4",
                content: "内容4",
                date: "1610035200",
                read: read.no,
                EmailBtn: EmailBtn.empty,
            },
        ]

        // 背包数据
        this.UserV0.bad = [
            {
                id: 400200,
                num: 6,
                BadType: BadItemType.Unlock
            },
            {
                id: 400501,
                num: 5,
                BadType: BadItemType.Unlock
            },
            {
                id: 0,
                num: 0,
                BadType: BadItemType.Empty
            }, {
                id: 0,
                num: 0,
                BadType: BadItemType.Empty

            }, {
                id: 0,
                num: 0,
                BadType: BadItemType.Empty

            }, {
                id: 0,
                num: 0,
                BadType: BadItemType.Empty
            },
            {
                id: 0,
                num: 0,
                BadType: BadItemType.Empty
            },
            {
                id: 0,
                num: 0,
                BadType: BadItemType.Empty
            },
            {
                id: 0,
                num: 0,
                BadType: BadItemType.Empty
            },
            {
                id: 0,
                num: 0,
                BadType: BadItemType.Empty
            },
            {
                id: 0,
                num: 0,
                BadType: BadItemType.Empty
            },
            {
                id: 0,
                num: 0,
                BadType: BadItemType.Empty
            },
            {
                id: 0,
                num: 0,
                BadType: BadItemType.Lock
            },
            {
                id: 0,
                num: 0,
                BadType: BadItemType.Lock
            },
            {
                id: 0,
                num: 0,
                BadType: BadItemType.Lock
            },
            {
                id: 0,
                num: 0,
                BadType: BadItemType.Lock
            },
            {
                id: 0,
                num: 0,
                BadType: BadItemType.Lock
            },
        ]
        this.UserV0.icon = ""
        this.UserV0.farmData = [
            {
                State: FarmState.Lock,
                BotanyId: 0,
                EndTime: 0,
                StartTIme: 0,
                PlantState: PlantState.UnStarT,
                factorState: factorState.general,
                beStolen: 0
            }, {
                State: FarmState.Lock,
                BotanyId: 0,
                EndTime: 0,
                StartTIme: 0,
                PlantState: PlantState.UnStarT,
                factorState: factorState.general,
                beStolen: 0

            }, {
                State: FarmState.Lock,
                BotanyId: 0,
                EndTime: 0,
                StartTIme: 0,
                PlantState: PlantState.UnStarT,
                factorState: factorState.general,
                beStolen: 0

            }, {
                State: FarmState.CannotUnlock,
                BotanyId: 0,
                EndTime: 0,
                StartTIme: 0,
                PlantState: PlantState.UnStarT,
                factorState: factorState.general
                , beStolen: 0

            }, {
                State: FarmState.CannotUnlock,
                BotanyId: 0,
                EndTime: 0,
                StartTIme: 0,
                PlantState: PlantState.UnStarT,
                factorState: factorState.general, beStolen: 0

            }, {
                State: FarmState.CannotUnlock,
                BotanyId: 200100,
                EndTime: 1607402036,
                StartTIme: 1607410036,
                PlantState: PlantState.UnStarT,
                factorState: factorState.general, beStolen: 0

            }, {
                State: FarmState.CannotUnlock,
                BotanyId: 200100,
                EndTime: 1607402036,
                StartTIme: 1607410036,
                PlantState: PlantState.UnStarT,
                factorState: factorState.general, beStolen: 0

            }, {
                State: FarmState.CannotUnlock,
                BotanyId: 200100,
                EndTime: 1607402036,
                StartTIme: 1607410036,
                PlantState: PlantState.UnStarT,
                factorState: factorState.general, beStolen: 0

            }, {
                State: FarmState.CannotUnlock,
                BotanyId: 200100,
                EndTime: 1607402036,
                StartTIme: 1607410036,
                PlantState: PlantState.UnStarT,
                factorState: factorState.general, beStolen: 0

            }, {
                State: FarmState.CannotUnlock,
                BotanyId: 200100,
                EndTime: 1607402036,
                StartTIme: 1607410036,
                PlantState: PlantState.UnStarT,
                factorState: factorState.general,
                beStolen: 0

            }, {
                State: FarmState.CannotUnlock,
                BotanyId: 200100,
                EndTime: 1607402036,
                StartTIme: 1607410036,
                PlantState: PlantState.UnStarT,
                factorState: factorState.general,
                beStolen: 0

            }, {
                State: FarmState.CannotUnlock,
                BotanyId: 200100,
                EndTime: 1607402036,
                StartTIme: 1607410036,
                PlantState: PlantState.UnStarT,
                factorState: factorState.general,
                beStolen: 0

            },
        ]
        // this.getUserIconSf()
        this.IconSpriteFrame = GameData.iconSf

    }


    addByItem(itemId, num) {
        if (itemId == 600001) {
            this.MoneyChange(num)
        }
        if (itemId == 600002) {
            EventMgr.getInstance().emit(Msg.TOP_UI_REFRESH, {exp: num})
        }
    }

    private async getUserIconSf() {
        return new Promise((resolve, reject) => {
            cc.assetManager.loadRemote(this.UserV0.icon, {ext: '.png'}, (err, res: cc.Texture2D) => {
                console.log("getUserIcon", err, res)
                this.IconSpriteFrame = new cc.SpriteFrame(res)
                resolve(res)
                EventMgr.getInstance().emit(Msg.TOP_UI_REFRESH)
            })
        })
    }

    heartbeatFlag = false
    timeoutCount = 0

    private heartbeat() {
        (this.timeoutCount < 5) && this.heartbeatFlag && platform.farmUserThisTimeThat(this.UserV0.id).catch(err => {
            platform.showToast("心跳失败", this.timeoutCount++)
        })
    }

    redPoint() {
        platform.farmMailUnReadCount(UserMsg.getUserInfo.id).then(res => {
            // if (res.task == 0 && res.mail == 0) {
            EventMgr.getInstance().emit(Msg.UI_REDPOINT, {
                task: res.task,
                mail: res.mail
            })
            // } else {
            //     EventMgr.getInstance().emit(Msg.UI_REDPOINT, {idx: 1})
            // }
        })
    }
}

export let UserMsg = UserData.getInstance()
