/**
 * 结构体
 */
export interface OpenViewModel {
    View: string
    ags: any
}


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
    Daily = "Daily",// 每日任务
    Setting = "Setting", // 设置页面
    Pet = "Pet", // 宠物页面
    Friend = "Friend", // 好友页面
    Level = "Level", // 升级页面
    User = "User",  // 用户信息
    Email = "Email",  // 邮箱
    EmailSec = "EmailSec", // 邮箱弹出
}

/**
 * 狗动作
 */
export enum dogAnim {
    walk = "walk", // 走
    pa = "pa"  //趴下
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
    Play = 3, // 播放动画
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
    worm = 5, // 虫子
    delWorm = 6, // 除虫
}

export enum beStolen {
    no = 0, // 没被偷
    yes = 1 // 被偷
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
    beStolen: beStolen // 是否被偷  0 没被偷 1被偷
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
 * 动物模式
 */
export interface pets {
    id: number
    sTime: number
    eTime: number
}

/**
 * 角色模型
 */
export class UserV0 {
    uid: number
    openId: string
    id: number // id 用于登录
    name: string // 名字
    lv: number // 等级
    exp: number //经验
    money: number  // 金钱
    icon: string // 头像
    bad: Fruit[]
    farmData: FarmItem[]
    nowTime: number //时间戳
    dailyTask: dailyTask // 每日任务
    pets: pets[]  // 动物
    Email: Email[] // 邮箱
}


export enum read {
    no = 0,
    yes = 1
}

export enum EmailBtn {
    empty = 0,
    get = 1,
    del = 2,
}

/**
 * 消息类型
 */
export class Email {
    title: string  // 标题
    content: string  // 内容
    date: number // 时间戳
    read: read  // 已读未读
    EmailBtn: EmailBtn // 显示按钮
}

/**
 * 主场景方法调用
 */
export enum senceFun {
    dogstart = 0,
    dogstop = 1,
    catstart = 2,
    catstop = 3,
    ckstart = 4,
    ckstop = 5,
    pilfer = 6,
    gohome = 7,
    listRefresh = 8,
}

export enum AuideSenceFun {
    zhongzhi = 0,
    xuanzhezhongzi = 1,
    sunjian = 2,
    jiaoshui = 3,
    caizhai = 4,
    add = 5,
    cs = 6,
}



