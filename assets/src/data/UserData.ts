import {BadItemType, FarmState, PlantState, UserV0, factorState, dailyTask, senceFun} from "./Model";
import {ConfigMgr} from "../Lib/ConfigMgr";
import {EventMgr} from "../Lib/Mvc/EventMgr";
import {Msg} from "../Lib/Mvc/Msg";

export class UserData {
    private static instance
    IconSpriteFrame: cc.SpriteFrame;

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
        // cc.log(this.UserV0)
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
            cc.log(this, this.petFlag[idx])
            if (this.petFlag[idx]) {
                if (val.eTime < this.NewTime) {
                    // @ts-ignore
                    this.petFlag[idx] = false
                    switch (idx) {
                        case 0:
                            cc.log("狗休息")
                            EventMgr.getInstance().emit(Msg.SENCE_REFRESH, {func: senceFun.dogstop})
                            break
                        case 1:
                            cc.log("猫休息")
                            EventMgr.getInstance().emit(Msg.SENCE_REFRESH, {func: senceFun.catstop})
                            break
                        case 2:
                            cc.log("鸡休息")
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
        return Math.floor((new Date()).valueOf() / 1000)
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

    // code: 0
    // msg: "success"
    // user:
    // delStatus: 1
    // elementId: null
    // id: 4
    // openId: "oCvTF5C7YSZrNHbecc9vAWPc69d0"
    // uid: "20210105101039154925"
    // userCreateTime: "1609824719000"
    // userExperience: 0
    // userGold: 0
    // userGrade: 1
    // userHeadPortrait: ""
    // userMoney: 0
    // userName: ""


    init(data) {
        console.log(this.UserV0, data)
        // this.UserV0.id =


    }

    dataInit() {
        // id 用于登录
        this.UserV0.id = 0
        // 名字
        this.UserV0.name = "为获取到用户名"
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
        this.UserV0.icon = "https://thirdwx.qlogo.cn/mmopen/vi_32/1syGLDqBEdN5xzWh1p9EYjvU557UZAzSMaleQ5vY1xroIolZtHianKBn5ZaPPFo5yNZom31YFjHAe8FTK50W0CQ/132"
        this.getUserIconSf()


        this.UserV0.farmData = [
            {
                State: FarmState.Lock,
                BotanyId: 0,
                EndTime: 0,
                StartTIme: 0,
                PlantState: PlantState.UnStarT,
                factorState: factorState.arid
                , beStolen: 0
            }, {
                State: FarmState.Lock,
                BotanyId: 0,
                EndTime: 0,
                StartTIme: 0,
                PlantState: PlantState.UnStarT,
                factorState: factorState.needManure,
                beStolen: 0

            }, {
                State: FarmState.Lock,
                BotanyId: 0,
                EndTime: 0,
                StartTIme: 0,
                PlantState: PlantState.UnStarT,
                factorState: factorState.worm,
                beStolen: 0

            }, {
                State: FarmState.Lock,
                BotanyId: 0,
                EndTime: 0,
                StartTIme: 0,
                PlantState: PlantState.UnStarT,
                factorState: factorState.general, beStolen: 0

            }, {
                State: FarmState.Unlock,
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
