import UI_ShopSecView from "../fui/com/UI_ShopSecView";
import {ConfigMgr} from "../Lib/ConfigMgr";
import {platform} from "../Lib/Platform";
import {UserData, UserMsg} from "../data/UserData";
import {ViewMgr} from "../Lib/Mvc/ViewMgr";
import {ViewName} from "../data/Model";

const {ccclass, property} = cc._decorator;

@ccclass
export default class ShopSecSrc extends cc.Component {
    private View: UI_ShopSecView
    private info: any;

    start() {
    }

    protected onDestroy(): void {
        this.View.m_addBtn.off(fgui.Event.CLICK)
        this.View.m_delBtn.off(fgui.Event.CLICK)
        this.View.m_num.off(fgui.Event.Submit)
        this.View.m_buyBtn.off(fgui.Event.CLICK)
    }

    num = 1
    all = 0
    buy = 0

    show(args) {
        cc.log("ShopSecSrcShow", args)
        let info = args.args
        this.info = info
        this.View = args.view
        this.View.m_addBtn.on(fgui.Event.CLICK, this.addClick, this)
        this.View.m_delBtn.on(fgui.Event.CLICK, this.delClick, this)
        this.View.m_num.on(fgui.Event.Submit, this.submit, this)
        this.View.m_buyBtn.on(fgui.Event.CLICK, this.buyClick, this)
        let res = ConfigMgr.getInstance().getConfigInfoById("fruit", info)
        this.View.m_pic.icon = fgui.UIPackage.getItemURL("com", `${res.pic}`)
        this.View.m_name.text = res.name
        this.buy = Number(res.buy);
        this.View.m_all.text = this.buy.toString()
    }

    buyClick(){
        platform.farmUserFruitBuy(UserMsg.getUserInfo.uid, UserMsg.getUserInfo.openId,this.info, this.num).then(res => {
            if (res.code == 0) {
                // UserData.getInstance().BadChangeById(info, 1)
                UserData.getInstance().MoneyChange(-this.all)
                platform.showToast("购买成功")
                ViewMgr.getInstance().closeViewByName(ViewName.ShopSec)
            } else {
                platform.showToast("购买失败")
            }
        })
    }

    submit(e) {
        cc.log(e)
        cc.log("onChang", e.string)
        let num = Number(e.string)
        if (!num) e.string = "1"
        else if (num < 1) {
            e.string = "1"
            this.View.m_all.text = this.buy.toString()
        } else if (num > 99) {
            e.string = "99"
            this.View.m_all.text = (this.buy * 99).toString()

        } else {
            this.num = Math.floor(num)
            e.string = this.num.toString()
            this.all = this.num * this.buy
            this.View.m_all.text = this.all.toString()
        }
    }

    addClick() {
        if (this.num >= 99) return
        this.num++
        this.all = this.num * this.buy
        this.View.m_num.text = this.num.toString()
        this.View.m_all.text = this.all.toString()
    }

    delClick() {
        if (this.num <= 1) return
        this.num--
        this.all = this.num * this.buy
        this.View.m_num.text = this.num.toString()
        this.View.m_all.text = this.all.toString()
    }

}
