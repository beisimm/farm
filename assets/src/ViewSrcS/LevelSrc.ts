import {MusicMgr} from "../Lib/MusicMgr";

const {ccclass, property} = cc._decorator;

@ccclass
export default class LevelSrc extends cc.Component {
    private View

    start() {
    }
    protected onDestroy(): void {
    }

    show(args) {
        console.log("LevelSrcShow")
        this.View = args.view
        MusicMgr.inst().playEffect("click3")

    }

}
