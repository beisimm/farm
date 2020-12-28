import {GameData} from "../data/GameData";
import {Util} from "./Util";
import {MusicMgr} from "./MusicMgr";

export class CccUtil {

    /**
     * 点击缩放
     */
    static NodeClick(node: cc.Node, callBack: Function) {
        MusicMgr.inst().playEffect("click")
        cc.tween(node)
            .to(0.1, {scale: 0.9})
            .to(0.1, {scale: 1})
            .call(callBack)
            .start();
    }

    /**
     * 坐标转换成相机坐标
     */
    static NodeToCavnsAr(node) {
        let pos = node.parent.convertToWorldSpaceAR(node.position);
        let canvas = cc.find('Canvas');
        let Pos1 = canvas.convertToNodeSpaceAR(pos)
        return Pos1
    }

    /**
     * 节点对节点的运动,忽略层级
     * @param sNode 起点node
     * @param eNode 终点node
     */
    static NodeToNodeTween(sNode: cc.Node, eNode: cc.Node, nodeList, url, time = 1, sXoffset = 0, sYoffSet = 0, eXoffset = 0, eYoffset = 0) {
        let startPos = this.NodeToCavnsAr(sNode)
        let endPos = CccUtil.NodeToCavnsAr(eNode)
        startPos.x += sXoffset
        startPos.y += sYoffSet
        endPos.x += eXoffset
        endPos.y += eYoffset
        let circlePoints = Util.getCirclePoints(30, startPos, nodeList.length, 60);
        // console.log(circlePoints);
        nodeList.sort(val => val.node.dis)
        nodeList.forEach((val, idx, arr) => {
            // console.log(val,url )
            val.getChild("pic").icon = url
            cc.tween(val.node)
                .to(0, {
                    x: circlePoints[idx].x,
                    y: circlePoints[idx].y,
                    opacity: 255
                }).start()
                .delay(idx * 0.03)
                .to(0.6, {
                    position: endPos,
                    opacity: 0
                })
                .start()
        })
    }
}
