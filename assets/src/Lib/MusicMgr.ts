/**
 * 音乐管理
 */
export class MusicMgr {
    private MusicId: number;

    constructor() {
        cc.log("音乐实例化")
        Promise.all(this.MusicList.map((val, idx, arr) => {
            this.getMusicByName(val)
        }))
        cc.log("音乐加载完成", this.MusicS)
        let to = setTimeout(() => {
            // cc.audioEngine.setMaxAudioInstance(1)
            this.playMusic("bg2")
            clearTimeout(to)
        }, 1000)
    }

    MusicFlag = true
    EffFlag = true

    MusicList = [
        "bg", // 偷菜音乐
        "bg2", // 背景音乐
        "click",// 音效
        "click1",// 出售果实的声音
        "click2",// 收果实的声音
        "click3",// 农场升级声
    ]
    MusicS = {}

    getMusicByName(name: string): Promise<any> {
        return new Promise((resolve, reject) => {
            cc.assetManager
                .getBundle("music")
                .load(name, (err: Error, asset) => {
                    if (err) {
                        cc.log('Error url [' + err + ']');
                        reject(err)
                    } else {
                        this.MusicS[name] = asset
                        resolve(asset)
                    }
                })
        })
    }

    /**
     * 播放音乐
     */
    playMusic(name) {
        if (!this.MusicFlag) return
        let clip = this.MusicS[name]
        cc.log("playMusic", clip)
        cc.audioEngine.stopAll()
        this.MusicId = cc.audioEngine.play(clip, true, 0.5);
    }

    swichMusic() {
        if (this.MusicFlag) {
            cc.audioEngine.stopAll()
        } else {
            this.playMusic("bg2")
        }
        this.MusicFlag = !this.MusicFlag
    }

    stopMusic(){
        cc.audioEngine.stopAll()
    }

    swichEff() {
        this.EffFlag = !this.EffFlag
    }

    /**
     * 播放音效
     */
    playEffect(name) {
        if (!this.EffFlag) return
        let clip = this.MusicS[name]
        cc.audioEngine.playEffect(clip, false);
    }

    private static _inst: MusicMgr

    public static inst(): MusicMgr {
        if (this._inst == null) {
            this._inst = new MusicMgr();
        }
        return this._inst;
    }
}

