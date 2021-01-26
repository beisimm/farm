import UI_BadSecView from "../fui/com/UI_BadSecView";
import {GameData} from "../data/GameData";
import {ConfigMgr} from "../Lib/ConfigMgr";
import UI_delBtn from "../fui/com/UI_delBtn";
import UI_addBtn from "../fui/com/UI_addBtn";
import UI_MaxBtn from "../fui/com/UI_MaxBtn";
import UI_csBtn from "../fui/com/UI_csBtn";
import {UserData, UserMsg} from "../data/UserData";
import {ViewMgr} from "../Lib/Mvc/ViewMgr";
import {AuideSenceFun, ViewName} from "../data/Model";
import {EventMsg} from "../Lib/Mvc/EventMgr";
import {Msg} from "../Lib/Mvc/Msg";
import UI_zmBtn from "../fui/com/UI_zmBtn";
import {MusicMgr} from "../Lib/MusicMgr";
import {platform} from "../Lib/Platform";


const {ccclass, property} = cc._decorator;
@ccclass
export default class BadSecSrc extends cc.Component {
    private View: UI_BadSecView;
    private m_pic: fgui.GLoader;
    private m_name: fgui.GTextField;
    private m_delBtn: UI_delBtn;
    private m_addBtn: UI_addBtn;
    private m_maxBtn: UI_MaxBtn;
    private m_num: fgui.GTextField;
    private m_price: fgui.GTextField;
    private m_allPrice: fgui.GTextField;
    private unitPrice: number;
    private info: any;
    private selectNum: number = 1
    private m_c1: fgui.Controller;
    private m_csBtn: UI_csBtn;
    private m_sjbtn: UI_zmBtn;
    private allPrice: number = 0

    start() {
    }

    protected onDestroy(): void {
        this.m_maxBtn.off(fgui.Event.CLICK)
        this.m_addBtn.off(fgui.Event.CLICK)
        this.m_delBtn.off(fgui.Event.CLICK)
        EventMsg.off(Msg.SENCE_AUIDE)
    }

    show(args) {
        cc.log("BadSecSrcShow")
        EventMsg.on(Msg.SENCE_AUIDE, this.Auide.bind(this))
        this.View = args.view
        this.m_pic = <fgui.GLoader>(this.View.getChild("pic"));
        this.m_name = <fgui.GTextField>(this.View.getChild("name"));
        this.m_delBtn = <UI_delBtn>(this.View.getChild("delBtn"));
        this.m_addBtn = <UI_addBtn>(this.View.getChild("addBtn"));
        this.m_maxBtn = <UI_MaxBtn>(this.View.getChild("maxBtn"));
        this.m_num = <fgui.GTextField>(this.View.getChild("num"));
        this.m_price = <fgui.GTextField>(this.View.getChild("price"));
        this.m_allPrice = <fgui.GTextField>(this.View.getChild("allPrice"));
        this.m_csBtn = <UI_csBtn>(this.View.getChild("csBtn"));
        this.m_sjbtn = <UI_zmBtn>(this.View.getChild("sjbtn"));
        this.m_c1 = this.View.getController("c1");
        this.uiInit()
        this.eventOn()
    }

    Auide(args) {
        console.log("AuideSence", args)
        switch (args.func) {
            case AuideSenceFun.add:
                this.addClick()
                break
            case AuideSenceFun.cs:
                this.csClick()
                break
        }
    }


    private eventOn() {
        this.m_maxBtn.on(fgui.Event.CLICK, this.maxClick, this)
        this.m_addBtn.on(fgui.Event.CLICK, this.addClick, this)
        this.m_delBtn.on(fgui.Event.CLICK, this.delClick, this)
        this.m_csBtn.on(fgui.Event.CLICK, this.csClick, this)
    }


    private uiInit() {
        this.info = GameData.seletBadData
        let info = this.info
        // cc.log(info)
        let res = ConfigMgr.getInstance().getConfigInfoById("fruit", info.id)
        this.m_c1.selectedIndex = Number(res.canShop)
        this.m_pic.icon = fgui.UIPackage.getItemURL("com", `${res.pic}`)
        this.m_name.text = res.name
        this.unitPrice = Number(res.shop)
        this.allPrice = this.unitPrice * this.selectNum
        this.m_price.text = this.unitPrice.toString()
        this.randerData();
    }


    private maxClick() {
        this.selectNum = this.info.num
        this.randerData();
    }

    private randerData() {
        this.m_num.text = this.selectNum.toString()
        this.allPrice = this.selectNum * this.unitPrice;
        this.m_allPrice.text = (this.allPrice).toString()
    }

    private addClick() {
        this.selectNum++
        if (this.selectNum > this.info.num) this.selectNum = this.info.num
        this.randerData();
    }

    private delClick() {
        this.selectNum--
        if (this.selectNum < 1) this.selectNum = 1
        this.randerData();
    }

    private csClick() {
        platform.farmUserKnapsackFruitUpdateSell(UserMsg.getUserInfo.openId, UserMsg.getUserInfo.uid, UserMsg.getUserInfo.id, this.info.id, this.selectNum, this.info.knapsackId).then(res => {
            platform.showToast("出售成功")
            UserData.getInstance().MoneyChange(this.allPrice)
            ViewMgr.getInstance().closeViewByName(ViewName.BadSec)
            MusicMgr.inst().playEffect("click2")
            UserData.getInstance().BadChange(this.info.idx, -this.selectNum)
            EventMsg.emit(Msg.BAD_REFRESH)
        })
    }
}
