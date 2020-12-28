import {BadItemType, FarmState, PlantState, UserV0, factorState, dailyTask} from "./Model";
import {ConfigMgr} from "../Lib/ConfigMgr";
import {EventMgr} from "../Lib/Mvc/EventMgr";
import {Msg} from "../Lib/Mvc/Msg";

export class UserData {
    private static instance

    // private scheduler: cc.Scheduler;

    public static getInstance(): UserData {
        if (this.instance == null) {
            this.instance = new UserData();
        }
        window["user"] = this.instance
        return this.instance;
    }

    private UserV0: UserV0

    constructor() {
        this.UserV0 = new UserV0()
        this.dataInit()
        console.log(this.UserV0)

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
            this.UserV0.dailyTask.onlineTime++
            console.log("在线时长+1")
            console.log("当前时长", this.UserV0.dailyTask.onlineTime)
        }
    }

    addDailyData(name: string, num: number = 1) {
        this.UserV0.dailyTask[name] += num
        console.log(this.UserV0.dailyTask)
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
        return Math.floor((new Date()).valueOf() / 1000)
    }

    MoneyChange(num: number) {
        console.log("MoneyChange", num, this.UserV0.money)
        this.UserV0.money += num
        EventMgr.getInstance().emit(Msg.TOP_UI_REFRESH)
    }

    BadChange(idx: number, num: number) {
        console.log("BadChange", num)
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
        console.log("BadChangeById ", item)
        if (item) {
            item.num += num
        } else {
            let find = this.UserV0.bad.find((val, idx, arr) => {
                return val.BadType == BadItemType.Empty
            });
            find.id = id
            find.num = num
            find.BadType = BadItemType.Unlock
            console.log(find)
        }
    }


    dataInit() {
        // id 用于登录
        this.UserV0.id = ""
        // 名字
        this.UserV0.name = "张三"
        // 用户等级
        this.UserV0.lv = 1
        // 用户经验
        this.UserV0.exp = 0
        // 用户金钱
        this.UserV0.money = 50
        // this.UserV0.nowTime = Math.floor((new Date()).valueOf() / 1000)
        this.UserV0.dailyTask = {
            plant: 0,
            water: 0,
            manure: 0,
            onlineTime: 0,
        }

        // 背包数据
        this.UserV0.bad = [
            {
                id: 400200,
                num: 1,
                BadType: BadItemType.Unlock
            },
            {
                id: 400201,
                num: 3,
                BadType: BadItemType.Unlock
            },
            {
                id: 400202,
                num: 3,
                BadType: BadItemType.Unlock
            }, {
                id: 400300,
                num: 3,
                BadType: BadItemType.Unlock

            }, {
                id: 400501,
                num: 3,
                BadType: BadItemType.Unlock

            }, {
                id: 400302,
                num: 3,
                BadType: BadItemType.Unlock
            },
            {
                id: 0,
                num: 0,
                BadType: BadItemType.Empty
            },
            {
                id: 0,
                num: 0,
                BadType: BadItemType.CanUnlock
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


        this.UserV0.farmData = [
            {
                State: FarmState.Lock,
                BotanyId: 0,
                EndTime: 0,
                StartTIme: 0,
                PlantState: PlantState.UnStarT,
                factorState: factorState.arid
            }, {
                State: FarmState.Lock,
                BotanyId: 0,
                EndTime: 0,
                StartTIme: 0,
                PlantState: PlantState.UnStarT,
                factorState: factorState.needManure

            }, {
                State: FarmState.Lock,
                BotanyId: 0,
                EndTime: 0,
                StartTIme: 0,
                PlantState: PlantState.UnStarT,
                factorState: factorState.general
            }, {
                State: FarmState.Lock,
                BotanyId: 0,
                EndTime: 0,
                StartTIme: 0,
                PlantState: PlantState.UnStarT,
                factorState: factorState.general
            }, {
                State: FarmState.Unlock,
                BotanyId: 200100,
                EndTime: 1607402036,
                StartTIme: 1607410036,

                PlantState: PlantState.End,
                factorState: factorState.general
            }, {
                State: FarmState.CannotUnlock,
                BotanyId: 200100,
                EndTime: 1607402036,
                StartTIme: 1607410036,
                PlantState: PlantState.UnStarT,
                factorState: factorState.general
            }, {
                State: FarmState.CannotUnlock,
                BotanyId: 200100,
                EndTime: 1607402036,
                StartTIme: 1607410036,
                PlantState: PlantState.UnStarT,
                factorState: factorState.general
            }, {
                State: FarmState.CannotUnlock,
                BotanyId: 200100,
                EndTime: 1607402036,
                StartTIme: 1607410036,
                PlantState: PlantState.UnStarT,
                factorState: factorState.general
            }, {
                State: FarmState.CannotUnlock,
                BotanyId: 200100,
                EndTime: 1607402036,
                StartTIme: 1607410036,
                PlantState: PlantState.UnStarT,
                factorState: factorState.general
            }, {
                State: FarmState.CannotUnlock,
                BotanyId: 200100,
                EndTime: 1607402036,
                StartTIme: 1607410036,
                PlantState: PlantState.UnStarT,
                factorState: factorState.general
            }, {
                State: FarmState.CannotUnlock,
                BotanyId: 200100,
                EndTime: 1607402036,
                StartTIme: 1607410036,
                PlantState: PlantState.UnStarT,
                factorState: factorState.general
            }, {
                State: FarmState.CannotUnlock,
                BotanyId: 200100,
                EndTime: 1607402036,
                StartTIme: 1607410036,
                PlantState: PlantState.UnStarT,
                factorState: factorState.general
            },
        ]
    }
}

export let UserMsg = UserData.getInstance()
