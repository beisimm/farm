import UI_PetView from "../fui/com/UI_PetView";
import {UserMsg} from "../data/UserData";
import UI_wyBtn from "../fui/com/UI_wyBtn";
import UI_PetItem from "../fui/com/UI_PetItem";
import {ConfigMgr} from "../Lib/ConfigMgr";
import UI_petPb from "../fui/com/UI_petPb";
import {EventMgr} from "../Lib/Mvc/EventMgr";
import {Msg} from "../Lib/Mvc/Msg";
import {senceFun} from "../data/Model";

const {ccclass, property} = cc._decorator;

@ccclass
export default class PetSrc extends cc.Component {
    private View: UI_PetView
    private b1Btn1: UI_wyBtn;
    private b1Btn2: UI_wyBtn;
    private b1Btn3: UI_wyBtn;
    pbf = []
    sf = []

    start() {
    }

    protected onDestroy(): void {
        this.b1Btn1.off(cc.Node.EventType.TOUCH_END)
        this.b1Btn2.off(cc.Node.EventType.TOUCH_END)
        this.b1Btn3.off(cc.Node.EventType.TOUCH_END)
    }

    show(args) {
        console.log("PetSrcShow")
        this.View = args.view
        this.b1Btn1 = <UI_wyBtn>(this.View.getChild(`b0`));
        this.b1Btn2 = <UI_wyBtn>(this.View.getChild(`b1`));
        this.b1Btn3 = <UI_wyBtn>(this.View.getChild(`b2`));
        this.b1Btn1.on(cc.Node.EventType.TOUCH_END, this.btnClick, this)
        this.b1Btn2.on(cc.Node.EventType.TOUCH_END, this.btnClick, this)
        this.b1Btn3.on(cc.Node.EventType.TOUCH_END, this.btnClick, this)

        UserMsg.getUserInfo.pets.forEach((val, idx, arr) => {
            let petItem = <UI_PetItem>(this.View.getChild(`i${idx}`));
            petItem.getController("c1").selectedIndex = idx
            let res = ConfigMgr.getInstance().getConfigInfoById("pet", val.id);
            console.log(res)
            let name = <fgui.GTextField>(petItem.getChild("name"))
            name.text = `${res.name}(抓捕几率70%)`
            let pb = <UI_petPb>(petItem.getChild("pb"))
            this.pbf[idx] = pb
            let state = <fgui.GTextField>(petItem.getChild("state"))
            this.sf[idx] = state
            let value = Math.round((val.eTime - UserMsg.NewTime) / 288)
            if (value < 0) value = 0
            pb.value = value
            if (value <= 0) state.text = "状态: 饥饿"
            else state.text = "状态: 饱食"
        })
    }

    btnClick(e) {
        let name = e.target.$gobj.name;
        let idx = Number(name[1]);
        let pb = this.pbf[idx];
        let state = this.sf[idx]
        console.log(name[1])
        let pet = UserMsg.getUserInfo.pets[idx];
        let number1 = pet.eTime - UserMsg.NewTime;
        let b
        if (number1 < 0) b = 1
        else {
            b = 1-((number1) / 28800) ;
        }
        console.log(b)
        pet.sTime = UserMsg.NewTime
        pet.eTime = UserMsg.NewTime + 28800
        cc.tween(pb).to(1 * b, {value: 100}).call((val, idx, arr) => {
            state.text = "状态: 饱食"
        }).start()
        let flag = UserMsg.petFlag[idx];
        if (!flag) {
            UserMsg.petFlag[idx] = true
            switch (idx) {
                case 0:
                    console.log("狗活动")
                    EventMgr.getInstance().emit(Msg.SENCE_REFRESH, {func: senceFun.dogstart})
                    break
                case 1:
                    console.log("猫活动")
                    EventMgr.getInstance().emit(Msg.SENCE_REFRESH, {func: senceFun.catstart})
                    break
                case 2:
                    console.log("鸡活动")
                    EventMgr.getInstance().emit(Msg.SENCE_REFRESH, {func: senceFun.ckstart})
                    break
            }
        }

    }

}
