// const {ccclass, property} = cc._decorator;
//
// @ccclass
// export default class BaseView extends cc.Component {
//     private closeBtn: cc.Node;
//     private ViewBg: cc.Node;
//     private viewM: cc.Node;
//
//     onLoad() {
//         this.closeBtn = this.node.getChildByName("closeBtn");
//         this.ViewBg = this.node.getChildByName("ViewBg");
//         this.viewM = this.node.getChildByName("viewMain");
//         let CanvasNode = cc.Canvas.instance.node;
//         this.ViewBg.width = CanvasNode.width
//         this.ViewBg.height = CanvasNode.height
//         this.ViewBg.opacity = 0
//         cc.tween(this.ViewBg)
//             .to(0.2, {opacity: 200})
//             .start()
//         this.viewM.scale = 0
//         cc.tween(this.viewM)
//             .to(0.5, {scale: 1}, {easing: 'elasticOut'})
//             .start()
//         this.ViewBg.on(cc.Node.EventType.TOUCH_END, this.onClose, this)
//         this.closeBtn.on(cc.Node.EventType.TOUCH_END, this.onClose, this)
//     }
//
//     protected onDestroy(): void {
//         this.ViewBg.off(cc.Node.EventType.TOUCH_END, this.onClose, this)
//         this.closeBtn.off(cc.Node.EventType.TOUCH_END, this.onClose, this)
//     }
//
//
//     start() {
//
//     }
//
//
//     // update (dt) {}
//     private onClose() {
//         console.log("关闭视图")
//         this.node.removeFromParent(true)
//         this.node = null
//         this.onDestroy()
//     }
// }
