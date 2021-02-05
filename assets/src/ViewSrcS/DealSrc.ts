import UI_DealView from "../fui/com/UI_DealView";
import {platform} from "../Lib/Platform";
import {UserMsg} from "../data/UserData";
import UI_farmSecItem from "../fui/com/UI_farmSecItem";
import {ConfigMgr} from "../Lib/ConfigMgr";
import UI_DealItem from "../fui/com/UI_DealItem";
import {Util} from "../Lib/Util";
import UI_DealItem2 from "../fui/com/UI_DealItem2";

const {ccclass, property} = cc._decorator;
/**
 * 交易所
 */
@ccclass
export default class DealSrc extends cc.Component {
    private View: UI_DealView
    private m_allBtn: fgui.GGraph;
    private m_myBtn: fgui.GGraph;
    private m_c1: fgui.Controller;
    private allList = []
    private mylist = []

    start() {
    }

    protected onDestroy(): void {
        this.m_myBtn.off(fgui.Event.CLICK)
        this.m_allBtn.off(fgui.Event.CLICK)
    }

    show(args) {
        console.log("DealSrcShow")
        this.View = args.view
        this.m_allBtn = <fgui.GGraph>(this.View.getChild("allBtn"));
        this.m_myBtn = <fgui.GGraph>(this.View.getChild("myBtn"));
        this.m_c1 = this.View.getController("c1");
        this.m_myBtn.on(fgui.Event.CLICK, this.myView, this)
        this.m_allBtn.on(fgui.Event.CLICK, this.allView, this)
        this.View.m_allList.setVirtual()
        this.View.m_allList.itemRenderer = this.renderListItem.bind(this)
        // this.View.m_allList.numItems = 0
        this.View.m_myList.setVirtual()
        this.View.m_myList.itemRenderer = this.renderListItem2.bind(this)
        // this.View.m_myList.numItems = 0
        this.allView()
    }

    private renderListItem(index: number, obj: UI_DealItem) {
        let info = this.allList[index]
        let res = ConfigMgr.getInstance().getConfigInfoById("fruit", info.fruitId)
        obj.m_name.text = res.name
        obj.m_num.text = `在售: ${info.dealNumber}`
        obj.m_price.text = `${info.dealUnitPrice}`
        obj.m_pic.icon = fgui.UIPackage.getItemURL("com", `${res.pic}`)
        obj.m_buyBtn.off(cc.Node.EventType.TOUCH_END)
        obj.m_buyBtn.on(cc.Node.EventType.TOUCH_END, () => {
            console.log("点击", info)
            platform.farmDealBuy(info.id, info.userId, info.fruitId, 1, info.dealUnitPrice, UserMsg.getUserInfo.uid, UserMsg.getUserInfo.openId).then((res) => {
                if (res.code == 0) {
                    platform.showToast("购买成功")
                    this.allView()
                } else {
                    platform.showToast("购买失败")
                }
            })
        })

    }

    private renderListItem2(index: number, obj: UI_DealItem2) {
        let info = this.mylist[index]
        let res = ConfigMgr.getInstance().getConfigInfoById("fruit", info.fruitId)
        obj.m_name.text = res.name
        obj.m_num.text = `在售: ${info.dealNumber}`
        obj.m_price.text = `售价:${info.dealUnitPrice}`
        obj.m_pic.icon = fgui.UIPackage.getItemURL("com", `${res.pic}`)
        obj.m_buyBtn.off(cc.Node.EventType.TOUCH_END)
        obj.m_buyBtn.on(cc.Node.EventType.TOUCH_END, () => {
            console.log("点击", info)
            platform.farmDealSoldOut(info.id, UserMsg.getUserInfo.id, info.fruitId, info.dealNumber, info.dealUnitPrice, info.dealStatus).then((res) => {
                platform.showToast("下架成功")
                this.myView()
            })
        })
    }

    // farmDealSoldOut

    private myView() {
        this.m_c1.selectedIndex = 1
        platform.farmDealList(UserMsg.getUserInfo.id, 1).then(res => {
            this.mylist = res.farmDealList.content
            this.View.m_myList.numItems = this.mylist.length
            this.View.m_myList.refreshVirtualList()
        })
    }

    private allView() {
        this.m_c1.selectedIndex = 0
        platform.farmDealList(UserMsg.getUserInfo.id, 0).then(res => {
            console.log(res)
            this.allList = res.farmDealList.content
            this.View.m_allList.numItems = this.allList.length
            this.View.m_allList.refreshVirtualList()
        })

    }
}
