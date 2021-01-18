import {BadItemType, beStolen, EmailBtn, factorState, FarmState, PlantState, read, senceFun, UserV0} from "./Model";
import {ConfigMgr} from "../Lib/ConfigMgr";
import {EventMgr} from "../Lib/Mvc/EventMgr";
import {Msg} from "../Lib/Mvc/Msg";

export class UserData {
    private static instance
    IconSpriteFrame: cc.SpriteFrame;
    private date: Date;

    public static getInstance(): UserData {
        if (this.instance == null) {
            this.instance = new UserData();
        }
        window["user11"] = this.instance
        return this.instance;
    }

    private UserV0: UserV0

    constructor() {
        this.UserV0 = new UserV0()
        this.dataInit()
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

    petFlag = [true, true, true] // 0 狗,1 猫, 2鸡

    everyMinute() {
        this.UserV0.dailyTask.onlineTime++
        cc.log("在线时长+1")
        cc.log("当前时长", this.UserV0.dailyTask.onlineTime)
        this.pdPetState();

    }

    pdPetState() {
        this.UserV0.pets.forEach((val, idx, arr) => {
            // cc.log(this, this.petFlag[idx])
            if (this.petFlag[idx]) {
                if (val.eTime < this.NewTime) {
                    // @ts-ignore
                    this.petFlag[idx] = false
                    switch (idx) {
                        case 0:
                            // cc.log("狗休息")
                            EventMgr.getInstance().emit(Msg.SENCE_REFRESH, {func: senceFun.dogstop})
                            break
                        case 1:
                            // cc.log("猫休息")
                            EventMgr.getInstance().emit(Msg.SENCE_REFRESH, {func: senceFun.catstop})
                            break
                        case 2:
                            // cc.log("鸡休息")
                            EventMgr.getInstance().emit(Msg.SENCE_REFRESH, {func: senceFun.ckstop})
                            break
                    }
                }
            }
        })
    }

    addDailyData(name: string, num: number = 1) {
        this.UserV0.dailyTask[name] += num
        cc.log(this.UserV0.dailyTask)
    }

    /**
     * 获取合成数据
     */
    get getAllInData(): Array<any> {
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
        return b
    }

    async setIconAndName(obj) {
        this.UserV0.name = obj.name
        this.UserV0.icon = obj.Icon
        await this.getUserIconSf()
        EventMgr.getInstance().emit(Msg.TOP_UI_REFRESH)
    }


    /**
     * 获取种植数据
     */
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


    init(data) {
        console.log("UserInit", this.UserV0, data)
        this.UserV0.openId = data.farmUser.openId // "oCvTF5C7YSZrNHbecc9vAWPc69d0"
        this.UserV0.uid = data.farmUser.uid // "20210105101039154925"
        this.UserV0.id = data.farmUser.id    // 4
        this.UserV0.name = data.farmUser.userName
        this.UserV0.icon = data.farmUser.userHeadPortrait
        this.UserV0.exp = data.farmUser.userExperience
        this.UserV0.lv = data.farmUser.userGrade
        console.log("date", this.date)
        this.reFarm(data);
        this.reBad(data);
        console.log(this.UserV0)
    }

    reBad(data) {
        this.UserV0.bad = data.farmUserKnapsackFruitList.map((val, idx, arr) => ({
            id: val.fruitId || 0,
            num: val.number,
            BadType: val.status
        }))
        EventMgr.getInstance().emit(Msg.SENCE_REFRESH, {func: senceFun.listRefresh})
    }

    reFarm(data) {
        this.UserV0.farmData = data.farmUserLandSeedList.map((val, idx, arr) => ({
            StartTIme: val.startTime ? Number(val.startTime) / 1000 : 0,
            EndTime: val.seedId ? Number(ConfigMgr.getInstance().getConfigInfoById("Plants", val.seedId).MaxTime) * 60 + Number(val.startTime) / 1000 : 0,
            State: val.landStatus,
            landId: val.landId,
            BotanyId: val.seedId || 0,
            PlantState: PlantState.UnStarT,
            factorState: factorState.general,
            beStolen: beStolen.no
        }))
        EventMgr.getInstance().emit(Msg.SENCE_REFRESH, {func: senceFun.gohome})
    }

    dataInit() {
        // id 用于登录
        this.UserV0.id = 0
        // 名字
        this.UserV0.name = ""
        // 用户等级
        this.UserV0.lv = 1
        // 用户经验
        this.UserV0.exp = 0
        // 用户金钱
        this.UserV0.money = 0
        // this.UserV0.nowTime = Math.floor((new Date()).valueOf() / 1000)
        this.UserV0.dailyTask = {
            plant: 0,
            water: 0,
            manure: 0,
            onlineTime: 0,
        }


        this.UserV0.pets = [
            {
                id: 300101,
                sTime: 1609294212,
                eTime: 1609302981
            }, {
                id: 300201,
                sTime: 1609294212,
                eTime: 1609023011
            }, {
                id: 300301,
                sTime: 1609294212,
                eTime: 1609323011
            },
        ]

        this.UserV0.Email = [
            {
                title: "标题1",
                content: "内容1\n内容1",
                date: 1610035200,
                read: read.no,
                EmailBtn: EmailBtn.empty,
            }, {
                title: "标题2",
                content: "内容2",
                date: 1610035200,
                read: read.no,
                EmailBtn: EmailBtn.get,
            }, {
                title: "标题3",
                content: "内容3",
                date: 1610035200,
                read: read.no,
                EmailBtn: EmailBtn.del,
            }, {
                title: "标题4",
                content: "内容4",
                date: 1610035200,
                read: read.no,
                EmailBtn: EmailBtn.empty,
            },
        ]

        // 背包数据
        this.UserV0.bad = [
            {
                id: 400200,
                num: 1,
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
        this.UserV0.icon = "https://thirdwx.qlogo.cn/mmopen/vi_32/1syGLDqBEdN5xzWh1p9EYjvU557UZAzSMaleQ5vY1xroIolZtHianKBn5ZaPPFo5yNZom31YFjHAe8FTK50W0CQ/132"
        this.getUserIconSf()
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
    }

    private getUserIconSf() {
        return new Promise((resolve, reject) => {
            cc.assetManager.loadRemote(this.UserV0.icon, {ext: '.png'}, (err, res: cc.Texture2D) => {
                console.log("getUserIcon", err, res)
                this.IconSpriteFrame = new cc.SpriteFrame(res)
                resolve(res)
            })
        })
    }
}

export let UserMsg = UserData.getInstance()
