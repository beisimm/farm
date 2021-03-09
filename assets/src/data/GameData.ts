import {factorState, FarmItem, FarmState, PlantState, taskState, taskType} from "./Model";

/**
 * 临时数据
 */
export class GameData {
    static seletBadData = null
    static ShowDataList = [400200, 400300, 400400]  // 商城显示数据临时
    static BadNode = null
    static MoneyNode = null
    static shareView = null
    static inviterId = null
    static friendId = null
    static nowFriendId = null
    static iconSf = null
    static TaskList: taskType[] = [
        {
            id: 700001,
            taskState: taskState.await
        },
        {
            id: 700002,
            taskState: taskState.await
        }, {
            id: 700003,
            taskState: taskState.await
        }, {
            id: 700004,
            taskState: taskState.ing
        }, {
            id: 700005,
            taskState: taskState.end
        }
    ]

    static otherFarm: FarmItem[] = [
        {
            State: FarmState.Lock,
            BotanyId: 200100,
            EndTime: 1607402036,
            StartTIme: 1607410036,
            PlantState: PlantState.End,
            factorState: factorState.arid
            , beStolen: 1

        }, {
            State: FarmState.Lock,
            BotanyId: 200100,
            EndTime: 1607402036,
            StartTIme: 1607410036,
            PlantState: PlantState.End,
            factorState: factorState.needManure
            , beStolen: 1

        }, {
            State: FarmState.Lock,
            BotanyId: 200100,
            EndTime: 1607402036,
            StartTIme: 1607410036,
            PlantState: PlantState.End,
            factorState: factorState.general
            , beStolen: 1

        }, {
            State: FarmState.Lock,
            BotanyId: 200100,
            EndTime: 1607402036,
            StartTIme: 1607410036,
            PlantState: PlantState.End,
            factorState: factorState.general
            , beStolen: 1
        }, {
            State: FarmState.Lock,
            BotanyId: 200100,
            EndTime: 1607402036,
            StartTIme: 1607410036,

            PlantState: PlantState.End,
            factorState: factorState.general
            , beStolen: 0

        }, {
            State: FarmState.Lock,
            BotanyId: 200100,
            EndTime: 1607402036,
            StartTIme: 1607410036,
            PlantState: PlantState.End,
            factorState: factorState.general
            , beStolen: 0

        }, {
            State: FarmState.Lock,
            BotanyId: 200100,
            EndTime: 1607402036,
            StartTIme: 1607410036,
            PlantState: PlantState.End,
            factorState: factorState.general
            , beStolen: 0

        }, {
            State: FarmState.Lock,
            BotanyId: 200100,
            EndTime: 1607402036,
            StartTIme: 1607410036,
            PlantState: PlantState.End,
            factorState: factorState.general
            , beStolen: 0

        }, {
            State: FarmState.Lock,
            BotanyId: 200100,
            EndTime: 1607402036,
            StartTIme: 1607410036,
            PlantState: PlantState.End,
            factorState: factorState.general
            , beStolen: 0

        }, {
            State: FarmState.Lock,
            BotanyId: 200100,
            EndTime: 1607402036,
            StartTIme: 1607410036,
            PlantState: PlantState.End,
            factorState: factorState.general
            , beStolen: 0

        }, {
            State: FarmState.Lock,
            BotanyId: 200100,
            EndTime: 1607402036,
            StartTIme: 1607410036,
            PlantState: PlantState.End,
            factorState: factorState.general,
            beStolen: 0

        }, {
            State: FarmState.Lock,
            BotanyId: 200100,
            EndTime: 1607402036,
            StartTIme: 1607410036,
            PlantState: PlantState.End,
            factorState: factorState.general
            , beStolen: 0

        },
    ]
}

window["GameData"] = GameData
