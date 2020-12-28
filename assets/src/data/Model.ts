/**
 * 结构体
 */
export interface OpenViewModel {
    View: string
    ags: any
}

// export interface ViewType {
//     Name: string
//     fguiName: string,
// }

/**
 * 视图名称
 */
export enum ViewName {
    Bad = "Bad",//背包
    BadSec = "BadSec",// 背包弹出页
    Shop = "Shop",// 商店
    AllIn = "AllIn",// 合成页
    Award = "Award",// 奖励页面
    Deal = "Deal",// 奖励页面
    Daily = "Daily" // 每日任务
}


/**
 *  土地状态
 */
export enum FarmState {
    CannotUnlock = 0, // 不可解锁
    Unlock = 1, // 未解锁
    Lock = 2  //已解锁
}

/**
 * 用户模型
 */
export interface User {
    lv: number //等级
    Exp: number // 经验
    Money: number // 金钱
    farmData: FarmItem[] // 土地数据
}

/**
 * 植物状态
 */
export enum PlantState {
    UnStarT = 0, // 未种植
    Start = 1, // 种植中
    End = 2, // 可采摘
}

/**
 * 土地因素
 */
export enum factorState {
    general = 0, // 正常状态
    arid = 1, // 干旱
    water = 2, // 浇水
    needManure = 3, // 需要施肥
    Manure = 4, // 施肥
}

/**
 * 土地节点状态
 */
export interface FarmItem {
    State: FarmState  // 土地状态
    PlantState: PlantState // 植物状态
    factorState: factorState // 因素状态
    BotanyId: number// 植物ID
    EndTime: number // 可收获时间戳
    StartTIme: number // 开始时间戳
}

/**
 * 植物表
 */
export interface Plants {
    id: number // 唯一id
    pic: string // 图片名称
}

export interface FruitToPlants {
    expend: number  // 消耗的种子
    create: number  // 生成的植物
}

/**
 * 背包表
 */
export interface Fruit {
    id: number // id
    num: number // 数量
    BadType: BadItemType // 格子状态
}


/**
 * 每日任务状态
 */
export enum taskState {
    await = 0, // 待领取
    ing = 1, // 进行中
    end = 2, // 已领取
}

export interface taskType {
    id: number,
    taskState: taskState
}

/**
 * 背包格子状态
 */
export enum BadItemType {
    Unlock = 0, // 已解锁有物品
    Empty = 1,// 空
    CanUnlock = 2, // 可以解锁
    Lock = 3,  // 不可解锁
}

/**
 * 每日任务统计
 */
export interface dailyTask {
    water: number // 浇水次数
    manure: number // 施肥次数
    onlineTime: number // 在线时长
    plant: number // 种植次数
}
/**
 * 任务种类
 */
export enum taskKind {
    water = 1,
    manure = 2,
    onlineTime = 3,
    plant = 4
}

/**
 * 角色模型
 */
export class UserV0 {
    id: string // id 用于登录
    name: string // 名字
    lv: number // 等级
    exp: number //经验
    money: number  // 金钱
    bad: Fruit[]
    farmData: FarmItem[]
    nowTime: number //时间戳
    dailyTask: dailyTask//
}


