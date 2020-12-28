// import UI_closeBtn from "../fui/com/UI_closeBtn";
//
// export class ViewCom {
//     private static m_bg: fgui.GGraph;
//     private static m_closeBtn: UI_closeBtn;
//     private static view: any;
//     private static self: any;
//
//     static onShow(view, self) {
//         this.self = self
//         this.view = view
//         this.m_bg = <fgui.GGraph>(view.getChild("bg"));
//         this.m_closeBtn = <UI_closeBtn>(view.getChild("closeBtn"));
//         view.makeFullScreen();
//         fgui.GRoot.inst.addChild(this.view);
//         this.m_bg.color = cc.color(0, 0, 0, 0)
//         cc.tween(this.m_bg)
//             .to(0.2, {color: cc.color(0, 0, 0, 125)})
//             .start()
//         this.m_closeBtn.on(fgui.Event.CLICK, this.onClose, this)
//         this.m_bg.on(fgui.Event.CLICK, this.onClose, this)
//     }
//
//     private static onClose() {
//         console.log("关闭", this.view)
//         this.m_closeBtn.off(fgui.Event.CLICK)
//         this.m_bg.off(fgui.Event.CLICK)
//         this.view.removeFromParent()
//         // this.self.node.destroy()
//     }
// }
