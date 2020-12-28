import {UserMsg, UserData} from "../data/UserData";
import UI_farmSecItem from "../fui/com/UI_farmSecItem";
import UI_showItem from "../fui/com/UI_showItem";
import {GameData} from "../data/GameData";
import {ConfigMgr} from "../Lib/ConfigMgr";
import UI_gmBtn from "../fui/com/UI_gmBtn";

const {ccclass, property} = cc._decorator;
/**
 * 商城
 */
@ccclass
export default class ShopSrc extends cc.Component {
    private View
    private m_list: fgui.GList;

    start() {
    }

    protected onDestroy(): void {

    }

    show(args) {
        console.log("ShopShow")
        this.View = args.view
        this.m_list = <fgui.GList>(this.View.getChild("list"));
        this.m_list.setVirtual()
        this.m_list.itemRenderer = this.renderListItem.bind(this)
        this.m_list.numItems = GameData.ShowDataList.length
    }

    private renderListItem(index: number, obj: UI_showItem) {
        let info = GameData.ShowDataList[index]
        console.log(info)
        let res = ConfigMgr.getInstance().getConfigInfoById("fruit", info)
        let pic = <fgui.GLoader>(obj.getChild("pic"));
        pic.icon = fgui.UIPackage.getItemURL("com", `${res.pic}`)
        let name = <fgui.GTextField>(obj.getChild("name"));
        name.text = res.name
        let price = <fgui.GTextField>(obj.getChild("price"));
        let buy = Number(res.buy);
        price.text = `摊位售价: ${buy}/个`
        let m_gmBtm = <UI_gmBtn>(obj.getChild("gmBtm"));
        m_gmBtm.off(fgui.Event.CLICK)
        m_gmBtm.on(fgui.Event.CLICK, () => {
            UserData.getInstance().BadChangeById(info, 1)
            UserData.getInstance().MoneyChange(-buy)
        })
    }


}
