const {ccclass, property} = cc._decorator;

@ccclass
export default class ViewSrc extends cc.Component {

    onShow(){
        console.log("ViewSrc onShow")

    }

    onLoad () {
        console.log("ViewSrc onLoad")
    }

    start () {
        console.log("ViewSrc start")

    }

    // update (dt) {}
}
