import {taskState, taskType} from "./Model";

/**
 * 临时数据
 */
export class GameData {
    static seletBadData = null
    static ShowDataList = [400200, 400300, 400400]  // 商城显示数据临时
    static BadNode = null
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
}

window["GameData"] = GameData
