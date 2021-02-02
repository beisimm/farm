export class Util {
    /**
     * csv转json数组
     */
    static csvToJson(csv): Array<any> {
        var lines = csv.split("\n");
        var result = [];
        var headers = lines[0].split(",");
        for (var i = 1; i < lines.length; i++) {
            var obj = {};
            var currentline = lines[i].split(",");
            for (var j = 0; j < headers.length; j++) {
                obj[headers[j]] = currentline[j];
            }
            result.push(obj);
        }
        return result; //JSON []
    }

    /**
     * 剩余时间戳序列化成为时间格式
     * @param EndTime 结束时间戳
     */
    static RemTime(EndTime: number): string {
        let NowTime = Math.floor(((new Date()).valueOf() / 1000));
        let sss = EndTime - NowTime
        if (sss <= 0) return "00:00:00"
        let h = Math.floor(sss / (3600))
        let m = Math.floor((sss - (3600 * h)) / 60)
        let s = Math.floor(sss - (3600 * h) - (60 * m))
        let hh = h.toString().padStart(2, "0")
        let mm = m.toString().padStart(2, "0")
        let ss = s.toString().padStart(2, "0")
        let Time = `${hh}:${mm}:${ss}`
        return Time
    }

    /**
     * 以某点为圆心，生成圆周上等分点的坐标
     *
     * @param {number} r 半径
     * @param {cc.Vec2} pos 圆心坐标
     * @param {number} count 等分点数量
     * @param {number} [randomScope=80] 等分点的随机波动范围
     * @returns {cc.Vec2[]} 返回等分点坐标
     */
    static getCirclePoints(r: number, pos: cc.Vec2, count: number, randomScope: number = 60): cc.Vec2[] {
        let points = [];
        let radians = (Math.PI / 180) * Math.round(360 / count);
        for (let i = 0; i < count; i++) {
            let x = pos.x + r * Math.sin(radians * i);
            let y = pos.y + r * Math.cos(radians * i);
            points.unshift(cc.v3(x + Math.random() * randomScope, y + Math.random() * randomScope, 0));
        }
        return points;
    }

    static getRemotePic(url: string) {
        return new Promise((resolve, reject) => {
            cc.assetManager.loadRemote(url, {ext: '.png'}, (err, res: cc.Texture2D) => {
                // console.log("getRemotePic", err, res)
                let sf = new cc.SpriteFrame(res)
                resolve(sf)
            })
        })
    }

    static strLenSub(str, len = 7) {
        if (str.length > 7) return str.slice(0, str.length - len) + '...'
        else return str
    }

}

