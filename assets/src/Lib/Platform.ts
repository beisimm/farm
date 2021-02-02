import {HttpMsg} from "./httpMsg";
/** * 测试地址 */
// const url = "http://192.168.0.153:88/"

/** 外部测试地址 */
const url = "https://farm.huaqinghulian.com/"


declare interface Platform {
    /**     * 登录     */
    login()

    /**     * 分享     */
    share(title?, imageUrl?, query?)

    /**     * 获取用户授权     */
    getUserInfo()

    /**     *  获取客服     */
    getService()

    /**    种植     */
    farmUserLandSeedUpdate(userId, fruitId, landId)

    /** 采摘    */
    farmUserLandSeedHarvest(uId, openId, userId, landId)

    /**     *  商城查询     */
    farmFruitListAll()

    /**  商城购买 */
    farmUserFruitBuy(uId, openId, fruitId, number)

    /**  * 提示信息  */
    showToast(tip, duration?)

    /**     * 显示loading     */
    showLoading(title?, mask?)

    /**     * 隐藏loading     */
    hideLoading()

    /** 查看背包 */
    farmUserKnapsackFruitListAll(openId, uId, userId)

    /** 背包出售 */
    farmUserKnapsackFruitUpdateSell(openId, uId, id, fruitId, number, knapsackId)

    /** 获取邮件 */
    farmMailListAll(userId)

    /** 获取邮件详情 */
    farmMailRead(id)

    /** 删除邮件 */
    farmMailDelSingle(id)

    /** 领取邮件 */
    farmMailReceiveAward(id)

    /** 更改头像 */
    farmUserNameHP(id, userName, userHeadPortrait)

    /** 合成 */
    farmUserKnapsackFruitUpdateConsume(openId, uId, id, fruitId, number)

    /** 排行榜 */
    rankList(id)

    /** 解锁背包格子 */
    farmUserKnapsackFruitUpdateStatus(userId, knapsackId)

    /** 土地负面效果解除 */
    farmUserLandSeedPropUpdate(id, landId, type)

    /** 升级奖励领取 */
    farmUserKnapsackFruitUpgrade(levelId, userId)

    /** 解锁土地 */
    unLockFarmLand(landId, userId)

    /** 心跳连接 */
    farmUserThisTimeThat(userId)

    /** 每日任务 */
    farmTaskUserListAll(userId)

    /** 每日任务领取奖励 */
    farmTaskUserReceive(id)

    /** 一键领取所有邮件 */
    farmMailKeyToGet(userId)

    /** 一键删除所有邮件 */
    farmMailDelAll(userId)

    /** 喂养宠物 */
    feedAnimal(animalId, userId)

    /** 刷新用户 */
    farmUserById(id)

    /** 获取土地状态 */
    farmUserLandSeedListAll(uId, openId)

    /** 前台 */
    showApp(callBack)

    /** 后台 */
    hideApp(callBack)

    /** 交易所获取信息 */
    farmDealList(userId, partition)

    /** 转卖物品 */
    farmDealKnapsackPutIn(userId, number, fruitId, knapsackId, unitPrice)

    /**  购买 */
    farmDealBuy(Dealid, otherUserId, fruitId, dealNumber, dealUnitPrice, uId, openId)

    /** 显示广告 */
    showAd()

    /** 下架 */
    farmDealSoldOut(id, userId, fruitId, dealNumber, dealUnitPrice, dealStatus)

    /** 获取用户信息 */
    getPath(callBack)

    /** 联盟邀请 */
    farmUserAllianceShare(inviterId, inviteeId)

    /** 获取联盟信息 */
    farmUserAllianceList(userId)
    /** 领取联盟奖励 */
    farmUserToDayAllianceGet(userId)
}


class WxPlatform implements Platform {
    login() {
        return new Promise((resolve, reject) => {
            wx.login({
                success: (res) => {
                    cc.log('login', res)
                    if (res.code) {
                        HttpMsg.post(`${url}api/game/login`, {code: res.code}, (res) => {
                            cc.log(res)
                            resolve(res)
                        }, (err) => {
                            cc.log('登录失败1111', res)
                            reject(res)
                        })
                    } else {
                        cc.log('登录失败！', res)
                        reject(res)
                    }
                }
            })
        })
    }

    getPath(callBack) {
        var obj = wx.getLaunchOptionsSync()
        // @ts-ignore
        console.log('启动小程序的路径:', obj.path)
        console.log('启动小程序的场景值:', obj.scene)
        console.log('启动小程序的 query 参数:', obj.query)
        console.log('来源信息:', obj.shareTicket)
        console.log('来源信息参数appId:', obj.referrerInfo.appId)
        console.log('来源信息传过来的数据:', obj.referrerInfo.extraData)
        callBack(obj)
    }

    showAd() {

    }

    farmUserToDayAllianceGet(userId){
        cc.log("farmUserToDayAllianceGet", userId)
        return new Promise((resolve, reject) => {
            HttpMsg.post(`${url}api/game/farmUserToDayAllianceGet`,
                {
                    userId: userId,
                },
                (res) => {
                    cc.log(res)
                    resolve(res)
                }, (err) => {
                })
        })
    }



    farmUserAllianceList(userId){
        cc.log("farmUserAllianceList", userId)
        return new Promise((resolve, reject) => {
            HttpMsg.post(`${url}api/game/farmUserAllianceList`,
                {
                    userId: userId,
                },
                (res) => {
                    cc.log(res)
                    resolve(res)
                }, (err) => {
                })
        })
    }


    farmUserAllianceShare(inviterId, inviteeId) {
        cc.log("farmUserAllianceShare", inviterId, inviteeId)
        return new Promise((resolve, reject) => {
            HttpMsg.post(`${url}api/game/farmUserAllianceShare`,
                {
                    inviterId: inviterId,
                    inviteeId: inviteeId
                },
                (res) => {
                    cc.log(res)
                    resolve(res)
                }, (err) => {
                })
        })
    }


    farmDealSoldOut(id, userId, fruitId, dealNumber, dealUnitPrice, dealStatus) {
        cc.log("farmDealSoldOut", id, userId, fruitId, dealNumber, dealUnitPrice, dealStatus)
        return new Promise((resolve, reject) => {
            HttpMsg.post(`${url}api/game/farmDealSoldOut`,
                {
                    id: id,
                    userId: userId,
                    fruitId: fruitId,
                    dealNumber: dealNumber,
                    dealUnitPrice: dealUnitPrice,
                    dealStatus: dealStatus
                },
                (res) => {
                    cc.log(res)
                    resolve(res)
                }, (err) => {
                })
        })
    }


    farmDealKnapsackPutIn(userId, number, fruitId, knapsackId, unitPrice) {
        cc.log("farmDealKnapsackPutIn", userId, number, fruitId, knapsackId, unitPrice)
        return new Promise((resolve, reject) => {
            HttpMsg.post(`${url}api/game/farmDealKnapsackPutIn`,
                {
                    userId: userId,
                    number: number,
                    fruitId: fruitId,
                    knapsackId: knapsackId,
                    unitPrice: unitPrice
                },
                (res) => {
                    cc.log(res)
                    resolve(res)
                }, (err) => {
                })
        })

    }


    farmDealBuy(Dealid, otherUserId, fruitId, dealNumber, dealUnitPrice, uId, openId) {
        cc.log("farmDealBuy", Dealid, otherUserId, fruitId, dealNumber, dealUnitPrice, uId, openId)
        return new Promise((resolve, reject) => {
            HttpMsg.post(`${url}api/game/farmDealBuy`,
                {
                    id: Dealid,
                    userId: otherUserId,
                    fruitId: fruitId,
                    dealNumber: dealNumber,
                    dealUnitPrice: dealUnitPrice,
                    uId: uId,
                    openId: openId
                },
                (res) => {
                    cc.log(res)
                    resolve(res)
                }, (err) => {
                })
        })

    }

    farmDealList(userId, partition) {
        cc.log("farmDealList", userId, partition)
        return new Promise((resolve, reject) => {
            HttpMsg.post(`${url}api/game/farmDealList`,
                {
                    userId: userId,
                    partition: partition
                },
                (res) => {
                    cc.log(res)
                    resolve(res)
                }, (err) => {
                })
        })
    }

    showApp(callBack) {
        wx.onShow(callBack)
    }

    hideApp(callBack) {
        wx.onHide(callBack)
    }


    farmUserLandSeedListAll(uId, openId) {
        cc.log("farmUserLandSeedListAll", uId, openId)
        return new Promise((resolve, reject) => {
            HttpMsg.post(`${url}api/game/farmUserLandSeedListAll`,
                {
                    uId: uId,
                    openId: openId
                },
                (res) => {
                    cc.log(res)
                    resolve(res)
                }, (err) => {
                })
        })
    }

    farmUserById(id) {
        cc.log("farmUserById", id)
        return new Promise((resolve, reject) => {
            HttpMsg.post(`${url}api/game/farmUserById`,
                {
                    id: id,
                },
                (res) => {
                    cc.log(res)
                    resolve(res)
                }, (err) => {
                })
        })
    }


    /** 喂养宠物 */
    feedAnimal(animalId, userId) {
        cc.log("feedAnimal", animalId, userId)
        return new Promise((resolve, reject) => {
            HttpMsg.post(`${url}api/game/feedAnimal`,
                {
                    userId: userId,
                    animalId: animalId
                },
                (res) => {
                    cc.log(res)
                    resolve(res)
                }, (err) => {
                })
        })
    }

    farmMailDelAll(userId) {
        cc.log("farmMailDelAll", userId)
        return new Promise((resolve, reject) => {
            HttpMsg.post(`${url}api/game/farmMailDelAll`,
                {
                    userId: userId
                },
                (res) => {
                    cc.log(res)
                    resolve(res)
                }, (err) => {
                })
        })
    }


    farmMailKeyToGet(userId) {
        cc.log("farmMailKeyToGet", userId)
        return new Promise((resolve, reject) => {
            HttpMsg.post(`${url}api/game/farmMailKeyToGet`,
                {
                    userId: userId
                },
                (res) => {
                    cc.log(res)
                    resolve(res)
                }, (err) => {
                })
        })
    }

    farmTaskUserReceive(id) {
        cc.log("farmTaskUserReceive", id)
        return new Promise((resolve, reject) => {
            HttpMsg.post(`${url}api/game/farmTaskUserReceive`,
                {
                    id: id
                },
                (res) => {
                    cc.log(res)
                    resolve(res)
                }, (err) => {
                })
        })
    }

    farmTaskUserListAll(userId) {
        cc.log("farmTaskUserListAll", userId)
        return new Promise((resolve, reject) => {
            HttpMsg.post(`${url}api/game/farmTaskUserListAll`,
                {
                    userId: userId
                },
                (res) => {
                    cc.log(res)
                    resolve(res)
                }, (err) => {
                })
        })
    }


    farmUserThisTimeThat(userId) {
        cc.log("farmUserThisTimeThat", userId)
        return new Promise((resolve, reject) => {
            HttpMsg.post(`${url}api/game/farmUserThisTimeThat`,
                {
                    userId: userId
                },
                (res) => {
                    cc.log(res)
                    resolve(res)
                }, (err) => {
                })
        })
    }

    unLockFarmLand(landId, userId) {
        cc.log("unLockFarmLand", landId, userId)
        return new Promise((resolve, reject) => {
            HttpMsg.post(`${url}api/game/unLockFarmLand`,
                {
                    landId: landId,
                    userId: userId
                },
                (res) => {
                    cc.log(res)
                    resolve(res)
                }, (err) => {
                })
        })
    }

    farmUserKnapsackFruitUpgrade(levelId, userId) {
        cc.log("farmUserKnapsackFruitUpgrade", levelId, userId)
        return new Promise((resolve, reject) => {
            HttpMsg.post(`${url}api/game/farmUserKnapsackFruitUpgrade`,
                {
                    levelId: levelId,
                    userId: userId
                },
                (res) => {
                    cc.log(res)
                    resolve(res)
                }, (err) => {
                })
        })
    }


    farmUserLandSeedPropUpdate(id, landId, type) {
        cc.log("farmUserLandSeedPropUpdate", id, landId, type)
        return new Promise((resolve, reject) => {
            HttpMsg.post(`${url}api/game/farmUserLandSeedPropUpdate`,
                {
                    id: id,
                    landId: landId,
                    type: type
                },
                (res) => {
                    cc.log(res)
                    resolve(res)
                }, (err) => {
                })
        })
    }

    farmUserKnapsackFruitUpdateStatus(userId, knapsackId) {
        cc.log("farmUserKnapsackFruitUpdateStatus", userId, knapsackId)
        return new Promise((resolve, reject) => {
            HttpMsg.post(`${url}api/game/farmUserKnapsackFruitUpdateStatus`,
                {
                    userId: userId,
                    knapsackId: knapsackId
                },
                (res) => {
                    cc.log(res)
                    resolve(res)
                }, (err) => {
                })
        })
    }


    rankList(id) {
        cc.log("rankList", id)
        return new Promise((resolve, reject) => {
            HttpMsg.post(`${url}api/game/rankList`,
                {
                    id: id,
                },
                (res) => {
                    cc.log(res)
                    resolve(res)
                }, (err) => {
                })
        })
    }

    farmUserKnapsackFruitUpdateConsume(openId, uId, id, fruitId, number) {
        cc.log("farmUserKnapsackFruitUpdateConsume", openId, uId, id, fruitId, number)
        return new Promise((resolve, reject) => {
            HttpMsg.post(`${url}api/game/farmUserKnapsackFruitUpdateConsume`,
                {
                    openId: openId,
                    uId: uId,
                    id: id,
                    fruitId: fruitId,
                    number: number,
                },
                (res) => {
                    cc.log(res)
                    resolve(res)
                }, (err) => {
                })
        })

    }

    farmUserNameHP(id, userName, userHeadPortrait) {
        cc.log("farmUserNameHP", id, userName, userHeadPortrait)
        return new Promise((resolve, reject) => {
            HttpMsg.post(`${url}api/user/farmUserNameHP`,
                {
                    id: id,
                    userName: userName,
                    userHeadPortrait: userHeadPortrait,
                },
                (res) => {
                    cc.log(res)
                    resolve(res)
                }, (err) => {
                })
        })
    }

    farmMailReceiveAward(id) {
        cc.log("farmMailReceiveAward", id)
        return new Promise((resolve, reject) => {
            HttpMsg.post(`${url}api/game/farmMailReceiveAward`,
                {
                    id: id
                },
                (res) => {
                    cc.log(res)
                    resolve(res)
                }, (err) => {
                })
        })
    }

    farmMailDelSingle(id) {
        cc.log("farmMailDelSingle", id)
        return new Promise((resolve, reject) => {
            HttpMsg.post(`${url}api/game/farmMailDelSingle`,
                {
                    id: id
                },
                (res) => {
                    cc.log(res)
                    resolve(res)
                }, (err) => {
                })
        })
    }

    farmMailRead(id) {
        cc.log("farmMailRead", id)
        return new Promise((resolve, reject) => {
            HttpMsg.post(`${url}api/game/farmMailRead`,
                {
                    id: id
                },
                (res) => {
                    cc.log(res)
                    resolve(res)
                }, (err) => {
                })
        })
    }


    farmMailListAll(userId) {
        cc.log("farmMailListAll", userId)
        return new Promise((resolve, reject) => {
            HttpMsg.post(`${url}api/game/farmMailListAll`,
                {
                    userId: userId
                },
                (res) => {
                    cc.log(res)
                    resolve(res)
                }, (err) => {
                })
        })
    }

    farmUserKnapsackFruitUpdateSell(openId, uId, id, fruitId, number, knapsackId) {
        cc.log("farmUserKnapsackFruitUpdateSell", openId, uId, id, fruitId, number, knapsackId)
        return new Promise((resolve, reject) => {
            HttpMsg.post(`${url}api/game/farmUserKnapsackFruitUpdateSell`,
                {
                    id: id,
                    uId: uId,
                    openId: openId,
                    fruitId: fruitId,
                    number: number,
                    knapsackId: knapsackId,
                },
                (res) => {
                    cc.log(res)
                    resolve(res)
                }, (err) => {
                })
        })
    }

    farmUserKnapsackFruitListAll(openId, uId, userId) {
        cc.log("farmUserKnapsackFruitListAll", openId, uId, userId)
        return new Promise((resolve, reject) => {
            HttpMsg.post(`${url}api/game/farmUserKnapsackFruitListAll`,
                {
                    userId: userId,
                    uId: uId,
                    openId: openId,
                    clicks: 0,
                },
                (res) => {
                    cc.log(res)
                    resolve(res)
                }, (err) => {
                })
        })
    }

    farmUserFruitBuy(uId, openId, fruitId, number) {
        cc.log("farmUserFruitBuy", uId, openId, fruitId, number)
        return new Promise((resolve, reject) => {
            HttpMsg.post(`${url}api/game/farmUserFruitBuy`,
                {
                    fruitId: fruitId,
                    uId: uId,
                    openId: openId,
                    number: number,
                },
                (res) => {
                    cc.log(res)
                    resolve(res)
                }, (err) => {
                })
        })
    }

    showToast(tip: string, duration: number = 1500) {
        wx.showToast({
            title: tip,
            duration: duration,
            icon: "none"
        });
    }

    showLoading(title: string = "加载中", mask: boolean = true) {
        wx.showLoading({title: title, mask: mask});
    }

    hideLoading() {
        wx.hideLoading({});
    }

    farmFruitListAll() {
        cc.log("商城查询")
        return new Promise((resolve, reject) => {
            HttpMsg.post(`${url}api/game/farmFruitListAll`,
                {},
                (res) => {
                    cc.log(res)
                    resolve(res)
                }, (err) => {
                })

        })
    }

    farmUserLandSeedHarvest(uId, openId, userId, landId) {
        return new Promise((resolve, reject) => {
            HttpMsg.post(`${url}api/game/farmUserLandSeedHarvest`,
                {
                    userId: userId,
                    uId: uId,
                    openId: openId,
                    landId: landId,
                },
                (res) => {
                    cc.log(res)
                    resolve(res)
                }, (err) => {
                })
        })
    }

    share(title = "", imageUrl = "", query = "") {
        wx.shareAppMessage({
            title: title,
            imageUrl: imageUrl,        // 分享图片要放在 wechatgame/res/raw-assers 路径下
            query: query  // key1=val1&key2=val2
        });
    }

    // onShow() {
    //     wx.onShow((res) => {
    //         cc.log("onShow", res)
    //     })
    // }

    getService() {
        wx.openCustomerServiceConversation({
            showMessageCard: true,
            sendMessageImg: "",
            success: function (data) {
                cc.log("success =", data)
            },

            fail: function (data) {
                cc.log("fail =", data)
            },

            complete: function (data) {
                cc.log("complete =", data)
            }
        })

    }

    farmUserLandSeedUpdate(userId, fruitId, landId) {
        cc.log("farmUserLandSeedUpdate", userId, fruitId, landId)
        return new Promise((resolve, reject) => {
            HttpMsg.post(`${url}api/game/farmUserLandSeedUpdate`,
                {
                    userId: userId,
                    fruitId: fruitId,
                    landId: landId,
                },
                (res) => {
                    cc.log(res)
                    resolve(res)
                }, (err) => {
                })

        })
    }

    getUserInfo() {
        return new Promise((resolve, reject) => {
            let visibleSize = cc.view.getVisibleSize();
            const button = wx.createUserInfoButton({
                type: 'text',
                text: '获取用户信息',
                style: {
                    left: 0,
                    top: 0,
                    width: visibleSize.width,
                    height: visibleSize.height,
                    lineHeight: 40,
                    backgroundColor: '#00000000',
                    color: '#00000000',
                    textAlign: 'center',
                    fontSize: 16,
                    borderRadius: 4
                }
            })
            platform.showToast("点击屏幕授权")
            button.onTap((res) => {
                cc.log(res)
                wx.getUserInfo({
                    success: (res) => {
                        cc.log("获取用户授权成功", res.userInfo)
                        button.destroy()
                        resolve({
                            Icon: res.userInfo.avatarUrl,
                            name: res.userInfo.nickName,
                        })

                    }
                })
            })
        })
    }
}

class NolPlatform implements Platform {

    getPath(callBack) {
    }

    farmDealKnapsackPutIn(userId, number, fruitId, knapsackId, unitPrice) {
    }

    farmDealSoldOut(id, userId, fruitId, dealNumber, dealUnitPrice, dealStatus) {

    }

    farmUserLandSeedListAll(uId, openId) {
    }

    showAd() {
    }

    farmDealBuy(Dealid, otherUserId, fruitId, dealNumber, dealUnitPrice, uId, openId) {
    }

    farmDealList(userId, partition) {
    }

    showApp(callBack) {
    }

    hideApp(callBack) {
    }

    farmUserById(id) {
    }

    feedAnimal(animalId, userId) {

    }

    farmMailDelAll(userId) {
    }

    farmMailKeyToGet(userId) {
    }

    farmTaskUserListAll(userId) {
    }

    farmTaskUserReceive(id) {
    }

    farmUserKnapsackFruitUpdateStatus(userId, knapsackId) {
    }

    farmUserThisTimeThat(userId) {
    }

    unLockFarmLand(landId, userId) {
    }


    farmUserKnapsackFruitUpgrade(levelId, userId) {
    }

    farmUserLandSeedPropUpdate(id, landId, type) {
    }

    farmMailReceiveAward(id) {
    }

    rankList(id) {
    }

    farmUserKnapsackFruitUpdateConsume(openId, uId, id, fruitId, number) {
    }

    farmUserNameHP(id, userName, userHeadPortrait) {
    }

    farmMailRead(id) {
    }

    farmMailDelSingle(id) {
    }

    farmMailListAll(userId) {
    }

    farmUserKnapsackFruitListAll(openId, uId, userId) {
    }

    farmUserKnapsackFruitUpdateSell(openId, uId, id, fruitId, number, knapsackId) {
    }

    async login() {
        cc.log("login")
        alert("登陆失败,请更换到微信小游戏")
        throw "登录失败"
    }

    showLoading(title?, mask?) {
    }

    hideLoading() {
    }

    farmUserFruitBuy(uId, openId, fruitId, number) {
        return new Promise((resolve, reject) => {
            resolve({msg: "success", code: 0})
        })
    }

    showToast(tip, duration) {
        cc.log(`${tip}`)

    }

    share(title: string) {
        cc.log("share")

    }

    // onShow() {
    //     cc.log("onShow")
    // }

    getUserInfo() {
        return new Promise((resolve, reject) => {
            cc.log("getUserInfo")
            resolve({
                Icon: "https://thirdwx.qlogo.cn/mmopen/vi_32/1syGLDqBEdN5xzWh1p9EYjvU557UZAzSMaleQ5vY1xroIolZtHianKBn5ZaPPFo5yNZom31YFjHAe8FTK50W0CQ/132",
                name: "张三",
            })
        })
    }

    farmUserLandSeedHarvest(uId, openId, landId, userId) {
        cc.log("farmUserLandSeedHarvest")
    }

    farmFruitListAll() {
        cc.log("商城查询")
        return new Promise((resolve, reject) => {
            resolve({
                farmFruitListAll: [{fruitId: 400200}, {fruitId: 400300}, {fruitId: 400400}]
            })
        })
    }

    getService() {
        cc.log("getService")
    }

    farmUserLandSeedUpdate(userId, fruitId, landId) {
        cc.log("farmUserLandSeedUpdate")
    }

    farmUserAllianceShare(inviterId, inviteeId) {
    }

    farmUserAllianceList(userId) {
    }

    farmUserToDayAllianceGet(userId) {
    }
}

// // 定义插屏广告
// export let interstitialAd = null
//
// // 创建插屏广告实例，提前初始化
// // @ts-ignore
// if (wx.createInterstitialAd) {
//     // @ts-ignore
//     interstitialAd = wx.createInterstitialAd({
//         adUnitId: 'adunit-fa784cbbf6e06d9e'
//     })
// }


export let platform: Platform
if (cc.sys.platform === cc.sys.WECHAT_GAME) {
    platform = new WxPlatform()
} else {
    platform = new NolPlatform()
}


