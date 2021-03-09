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
import UI_AllinItem from "../fui/com/UI_AllinItem";
import {platform} from "../Lib/Platform";
import {Wxad} from "../Lib/wxad";

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
    private m_p0: UI_AllinItem;
    private m_p1: UI_AllinItem;
    private m_p2: UI_AllinItem;
    private m_p3: UI_AllinItem;
    private m_p4: UI_AllinItem;
    private itemURL: string = ''
    private listcont


    start() {

    }

    protected onDestroy(): void {
        this.m_oneBtn.off(fgui.Event.CLICK)
        this.m_p0.node.off(cc.Node.EventType.TOUCH_END)
        this.m_p1.node.off(cc.Node.EventType.TOUCH_END)
        this.m_p2.node.off(cc.Node.EventType.TOUCH_END)
        this.m_p3.node.off(cc.Node.EventType.TOUCH_END)
        this.m_p4.node.off(cc.Node.EventType.TOUCH_END)
    }

    show(args) {
        cc.log("AllInSrcShow")
        this.View = args.view
        this.m_list = <fgui.GList>(this.View.getChild("list"));
        this.m_list.itemRenderer = this.renderListItem.bind(this)
        this.m_oneBtn = <UI_oneKeyAddBtn>(this.View.getChild("oneBtn"));
        this.m_hcBtn = <fgui.GGraph>(this.View.getChild("hcBtn"));
        this.m_p0 = <UI_AllinItem>(this.View.getChild("p0"));
        this.m_p1 = <UI_AllinItem>(this.View.getChild("p1"));
        this.m_p2 = <UI_AllinItem>(this.View.getChild("p2"));
        this.m_p3 = <UI_AllinItem>(this.View.getChild("p3"));
        this.m_p4 = <UI_AllinItem>(this.View.getChild("p4"));
        this.m_p0.node.on(cc.Node.EventType.TOUCH_END, this.childOnclik, this)
        this.m_p1.node.on(cc.Node.EventType.TOUCH_END, this.childOnclik, this)
        this.m_p2.node.on(cc.Node.EventType.TOUCH_END, this.childOnclik, this)
        this.m_p3.node.on(cc.Node.EventType.TOUCH_END, this.childOnclik, this)
        this.m_p4.node.on(cc.Node.EventType.TOUCH_END, this.childOnclik, this)
        this.m_oneBtn.on(fgui.Event.CLICK, this.oneBtnClick, this)
        this.m_hcBtn.on(fgui.Event.CLICK, this.hcBtnClick, this)
        this.pList = new Array(5).fill(false);
        this.m_oneBtn.enabled = false
        this.m_hcBtn.enabled = false
        this.m_list.setVirtual()
        UserData.getInstance().getAllInData().then(listcont => {
            cc.log(listcont)
            this.listcont = listcont
            this.m_list.numItems = this.listcont.length
            this.m_list.refreshVirtualList()
        })

    }

    private renderListItem(index: number, obj: UI_AllInBig) {
        let info = this.listcont[index]
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
            let res = ConfigMgr.getInstance().getConfigInfoById("fruit", this.selectInfo.id)
            this.itemURL = fgui.UIPackage.getItemURL("com", `${res.pic}`);
            cc.log("点击", info)
            this.clearAll()
            this.m_list.refreshVirtualList()
            this.m_oneBtn.enabled = true
        })
    }

    clearAll() {
        this.m_hcBtn.enabled = false
        this.count = 0
        this.pList.forEach((val, idx, arr) => {
            this.pList[idx] = false
            // val = false
            let c = <UI_AllinItem>(this.View.getChild(`p${idx}`));
            let child = c.getChild("pic")
            child.icon = ''
        })
        cc.log(this.pList)
    }

    private oneBtnClick() {
        cc.log("oneBtnClick", this)
        this.m_hcBtn.enabled = true
        this.pList.forEach((val, idx, arr) => {
            let c = <UI_AllinItem>(this.View.getChild(`p${idx}`));
            let child = c.getChild("pic")
            if (idx < this.selectInfo.num) {
                this.count++
                child.icon = this.itemURL
                this.pList[idx] = true
            } else {
                child.icon = ''
            }
        })

        if (this.selectInfo.num >= 5) {
            this.count = 5
        } else this.count = this.selectInfo.num
    }

    private hcBtnClick() {


        if (this.count < 3) {
            platform.showToast("种植合成不低于3个")
            return
        }
        let id = this.selectInfo.id;
        cc.log("合成点击")
        if ([3, 4].includes(this.count)) {
            ViewMgr.getInstance().openView({
                View: ViewName.Alert,
                ags: {
                    type: 1,
                    title: "增加成功率",
                    content: "观看广告可以增加20%的成功率",
                    suc: () => {
                        cc.log("成功")
                        Wxad._int().videoAd((res) => {
                            cc.log("成功")
                            this.reques(id, 1);
                        }, (res) => {
                            cc.log("失败")
                            this.reques(id, 0);
                        })

                    },
                    fil: () => {
                        cc.log("失败")
                        this.reques(id, 0);
                    }
                }
            })

        } else {
            this.reques(id, 0);
        }


    }

    flag = false

    private reques(id, add) {
        if (this.flag) return
        this.flag = true
        platform.farmUserKnapsackFruitUpdateConsume(UserMsg.getUserInfo.openId, UserMsg.getUserInfo.uid, UserMsg.getUserInfo.id, id, this.count, add)
            .then(res => {
                cc.log(res)
                if (res.code == 0) {
                    // platform.showToast("合成成功")
                    ViewMgr.getInstance().openView({
                        View: ViewName.Award,
                        ags: {
                            id: id + 1
                        }
                    })
                } else {
                    platform.showToast("合成失败")
                }
                this.flag = true
                ViewMgr.getInstance().closeViewByName(ViewName.AllIn)
            })
    }

    count = 0

    private childOnclik(e) {
        let UI_AllinItem: UI_AllinItem = e.target.$gobj;
        let name = e.target.$gobj.name[1]
        if (this.itemURL != "") {
            if (UI_AllinItem.getChild("pic").icon == "") {
                if (this.count < this.selectInfo.num) {
                    UI_AllinItem.getChild("pic").icon = this.itemURL
                    this.pList[name] = true
                    this.count++
                }
            } else {
                UI_AllinItem.getChild("pic").icon = ""
                this.pList[name] = false
                this.count--
            }
        }
        let anies = this.pList.filter(value => {
            return value == true
        })
        if (anies.length > 0) {
            this.m_hcBtn.enabled = true
        } else {
            this.m_hcBtn.enabled = false
        }
        cc.log("点击了", name, this.count)
        cc.log("anies", anies)
    }
}


