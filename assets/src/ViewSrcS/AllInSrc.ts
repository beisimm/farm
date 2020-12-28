import UI_AllInView from "../fui/com/UI_AllInView";
import UI_AllInBig from "../fui/com/UI_AllInBig";
import {UserData, UserMsg} from "../data/UserData";
import UI_farmSecItem from "../fui/com/UI_farmSecItem";
import {ConfigMgr} from "../Lib/ConfigMgr";
import UI_oneKeyAddBtn from "../fui/com/UI_oneKeyAddBtn";
import {OpenViewModel, ViewName} from "../data/Model";
import {EventMgr} from "../Lib/Mvc/EventMgr";
import {Msg} from "../Lib/Mvc/Msg";
import {ViewMgr} from "../Lib/Mvc/ViewMgr";

const {ccclass, property} = cc._decorator;
/**
 * 合成页面
 */
@ccclass
export default class AllInSrc extends cc.Component {
    private View: UI_AllInView
    private m_list: fgui.GList;
    private select: number;
    private m_oneBtn: UI_oneKeyAddBtn;
    private selectInfo: any;
    private pList: any[];
    private m_hcBtn: fgui.GGraph;


    start() {
        this.m_oneBtn.on(fgui.Event.CLICK, this.oneBtnClick, this)
        this.m_hcBtn.on(fgui.Event.CLICK, this.hcBtnClick, this)
        this.pList = new Array(5).fill({});
    }

    protected onDestroy(): void {
        this.m_oneBtn.off(fgui.Event.CLICK)
    }

    show(args) {
        console.log("AllInSrcShow")
        this.View = args.view
        this.m_list = <fgui.GList>(this.View.getChild("list"));
        this.m_list.setVirtual()
        this.m_list.itemRenderer = this.renderListItem.bind(this)
        this.m_list.numItems = UserData.getInstance().getAllInData.length
        this.m_oneBtn = <UI_oneKeyAddBtn>(this.View.getChild("oneBtn"));
        this.m_hcBtn = <fgui.GGraph>(this.View.getChild("hcBtn"));
        this.m_oneBtn.enabled = false
        this.m_hcBtn.enabled = false
    }

    private renderListItem(index: number, obj: UI_AllInBig) {
        let info = UserData.getInstance().getAllInData[index]
        let res = ConfigMgr.getInstance().getConfigInfoById("fruit", info.id)
        let m_name = <fgui.GTextField>(obj.getChild("name"));
        m_name.text = res.name.slice(0, 4)
        let m_item = <UI_farmSecItem>(obj.getChild("item"));
        let m_pic = <fgui.GLoader>(m_item.getChild("pic"));
        m_pic.icon = fgui.UIPackage.getItemURL("com", `${res.pic}`)
        let m_num = <fgui.GTextField>(m_item.getChild("num"));
        m_num.text = info.num.toString()
        let m_c3 = obj.getController("c3");
        if (index == this.select) {
            m_c3.selectedIndex = 1
        } else {
            m_c3.selectedIndex = 0
        }
        obj.off(fgui.Event.CLICK)
        obj.on(fgui.Event.CLICK, () => {
            this.select = index
            this.selectInfo = info
            console.log("点击", info)
            this.m_list.refreshVirtualList()
            this.m_oneBtn.enabled = true
        })
    }

    private oneBtnClick() {
        console.log("oneBtnClick", this)
        this.m_hcBtn.enabled = true
        let res = ConfigMgr.getInstance().getConfigInfoById("fruit", this.selectInfo.id)
        let itemURL = fgui.UIPackage.getItemURL("com", `${res.pic}`);
        this.pList.forEach((val, idx, arr) => {
            let child = this.View.getChild(`p${idx}`);
            if (idx < this.selectInfo.num) {
                child.icon = itemURL
            } else {
                child.icon = ''
            }
        })

    }

    private hcBtnClick() {
        let id = this.selectInfo.id;
        console.log("合成点击")
        let a: OpenViewModel = {
            View: ViewName.Award,
            ags: {
                id: id + 1
            }
        }
        EventMgr.getInstance().emit(Msg.OPEN_VIEW, a)
        ViewMgr.getInstance().closeViewByName(ViewName.AllIn)
    }
}


