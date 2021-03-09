import {UserMsg, UserData} from "../data/UserData";
import UI_farmSecItem from "../fui/com/UI_farmSecItem";
import UI_showItem from "../fui/com/UI_showItem";
import {GameData} from "../data/GameData";
import {ConfigMgr} from "../Lib/ConfigMgr";
import UI_gmBtn from "../fui/com/UI_gmBtn";
import {platform} from "../Lib/Platform";
import {ViewMgr} from "../Lib/Mvc/ViewMgr";
import {ViewName} from "../data/Model";

const {ccclass, property} = cc._decorator;
/**
 * 商城
 */
@ccclass
export default class ShopSrc extends cc.Component {
    private View
    private m_list: fgui.GList;
    private listCont = []

    start() {
    }

    protected onDestroy(): void {

    }

    show(args) {
        cc.log("ShopShow")
        this.View = args.view
        this.m_list = <fgui.GList>(this.View.getChild("list"));
        this.m_list.setVirtual()
        this.m_list.itemRenderer = this.renderListItem.bind(this)
        this.listCont = GameData.ShowDataList;
        this.m_list.numItems = this.listCont.length
        platform.farmFruitListAll().then(res => {
            cc.log(res)
            this.listCont = res.farmFruitListAll.map((val, idx, arr) => ({
                val: val.fruitId
            }))
            this.m_list.numItems = this.listCont.length
            // this.m_list.refreshVirtualList()
        })

    }

    private renderListItem(index: number, obj: UI_showItem) {
        let info = GameData.ShowDataList[index]
        cc.log(info)
        let res = ConfigMgr.getInstance().getConfigInfoById("fruit", info)
        let pic = <fgui.GLoader>(obj.getChild("pic"));
        pic.icon = fgui.UIPackage.getItemURL("com", `${res.pic}`)
        let name = <fgui.GTextField>(obj.getChild("name"));
        name.text = res.name
        let price = <fgui.GTextField>(obj.getChild("price"));
        let buy = Number(res.buy);
        price.text = `${buy}`
        let m_gmBtm = <UI_gmBtn>(obj.getChild("gmBtm"));
        m_gmBtm.off(fgui.Event.CLICK)
        m_gmBtm.on(fgui.Event.CLICK, () => {
            ViewMgr.getInstance().closeViewByName(ViewName.Shop)
            ViewMgr.getInstance().openView({
                View: ViewName.ShopSec,
                ags: info
            })


            // platform.farmUserFruitBuy(UserMsg.getUserInfo.uid, UserMsg.getUserInfo.openId, info, 1).then(res => {
            //     if (res.code == 0) {
            //         UserData.getInstance().BadChangeById(info, 1)
            //         UserData.getInstance().MoneyChange(-buy)
            //         platform.showToast("购买成功")
            //     } else {
            //         platform.showToast("购买失败")
            //     }
            // })
        })
    }


}
