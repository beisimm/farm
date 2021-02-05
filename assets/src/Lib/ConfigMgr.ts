/**
 * 配置文件管理
 */
import {Util} from "./Util";
import {UserMsg} from "../data/UserData";

export class ConfigMgr {

    private static instance

    public static getInstance(): ConfigMgr {
        if (this.instance == null) {
            this.instance = new ConfigMgr();
        }
        window["config"] = this.instance
        return this.instance;
    }

    constructor() {
        Promise.all(this.ConfigList.map(async (val, idx, arr) => {
            this.getConfigByName(val)
        }))
        cc.log("config加载完成")
    }

    Configs = {}

    ConfigList = [
        "Plants", // 植物表
        "fruit",  // 果实表
        "grade", // 等级表
        "FruitToPlants",  // 消耗种植种植物
        "task", // 每日任务
        "pet", // 动物
        "item", // 奖励配图
        "FruitDetail",
        "farmLv"
    ]

    public getConfigs() {
        this.ConfigList.forEach(async (val, idx, arr) => {
            cc.assetManager
                .getBundle("Config")
                .load(val, (err: Error, asset) => {
                    if (err) {
                        cc.log('Error url [' + err + ']');
                        return
                    } else {
                        // let cfg = Util.csvToJson(asset["text"]);
                        this.Configs[val] = asset
                    }
                })
        })
    }

    getConfigByName(name: string): Promise<any> {
        return new Promise((resolve, reject) => {
            cc.assetManager
                .getBundle("Config")
                .load(name, (err: Error, asset) => {
                    if (err) {
                        cc.log('Error url [' + err + ']');
                        reject(err)
                    } else {
                        // @ts-ignore
                        let json = asset.json;
                        resolve(json)
                        this.Configs[name] = json
                    }
                })
        })
    }


    /**
     * 通过表名获取表信息
     * @param name 表名
     */
    getConfigListByName(name: string) {
        return this.Configs[name]
    }

    /**
     * 通过表名id获取具体一条的信息
     * @param name 表名
     * @param id 唯一id
     */
    getConfigInfoById(name: string, id: string | number) {
        return this.Configs[name].find((val, idx, arr) => {
            return val.id == id
        })
    }

    /**
     * 通过表字段,key获取唯一的信息
     */
    getConfigInfoByKEY(name: string, field, key) {
        return this.Configs[name].find((val, idx, arr) => {
            return val.field == key
        })
    }

}

// export let configMgr = ConfigMgr.getInstance()
