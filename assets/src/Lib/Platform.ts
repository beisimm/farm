import {HttpMsg} from "./httpMsg";

declare interface Platform {
    /**
     * 登录
     */
    login()

    /**
     * 分享
     */
    share(title: string)

    /**
     * 回主屏监听
     */
    onShow()

    /**
     * 获取用户授权
     */
    getUserInfo()

    /**
     *  获取客服
     */
    getService()
}


class NolPlatform implements Platform {
    login() {
        console.log("login")
    }

    share(title: string) {
        console.log("share")

    }

    onShow() {
        console.log("onShow")
    }

    getUserInfo() {
        return new Promise((resolve, reject) => {
            console.log("getUserInfo")
            resolve({
                Icon: "https://thirdwx.qlogo.cn/mmopen/vi_32/1syGLDqBEdN5xzWh1p9EYjvU557UZAzSMaleQ5vY1xroIolZtHianKBn5ZaPPFo5yNZom31YFjHAe8FTK50W0CQ/132",
                name: "张三",
            })
        })
    }

    getService() {
        console.log("getService")
    }
}

/**
 * 测试地址
 */
const url = "http://192.168.0.153:88/"


class WxPlatform implements Platform {
    login() {
        return new Promise((resolve, reject) => {
            wx.login({
                success: (res) => {
                    console.log('login', res)
                    if (res.code) {
                        HttpMsg.post(`${url}api/user/login`, {code: res.code}, (res) => {
                            console.log(res)
                            resolve(res.user)
                        })
                    } else {
                        console.log('登录失败！' + res)
                        reject(res)
                    }
                }
            })
        })
    }

    share(title) {
        wx.shareAppMessage({
            title: title,
            imageUrl: "",        // 分享图片要放在 wechatgame/res/raw-assers 路径下
            query: 'shareMsg=' + '分享卡片上所带的信息'  // query最大长度(length)为2048
        });
    }

    onShow() {
        wx.onShow((res) => {
            console.log("onShow", res)
        })
    }

    getService() {
        wx.openCustomerServiceConversation({
            showMessageCard: true,
            sendMessageImg: "",
            success: function (data) {
                console.log("success =", data)
            },

            fail: function (data) {
                console.log("fail =", data)

            },

            complete: function (data) {

                console.log("complete =", data)

            }

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
            button.onTap((res) => {
                console.log(res)
                wx.getUserInfo({
                    success: (res) => {
                        console.log("获取用户授权成功", res.userInfo)
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

export let platform: Platform
if (cc.sys.platform === cc.sys.WECHAT_GAME) {
    platform = new WxPlatform()
} else {
    platform = new NolPlatform()
}
