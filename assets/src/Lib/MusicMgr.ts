
    /**
     * 音乐管理
     */
    export class MusicMgr {

        constructor() {
            console.log("音乐实例化")
            Promise.all(this.MusicList.map((val, idx, arr) => {
                this.getMusicByName(val)
            }))
            console.log("音乐加载完成", this.MusicS)
            let to = setTimeout(() => {
                this.playMusic("bg")
                clearTimeout(to)
            }, 1000)
        }

        MusicList = [
            "bg", // 背景音乐
            "click"  // 音效
        ]
        MusicS = {}
        audioIdS = {}

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
            let clip = this.MusicS[name]
            console.log("playMusic", clip)
            let audioID = cc.audioEngine.play(clip, true, 0.5);
            this.audioIdS[name] = audioID
            console.log(this.audioIdS)
        }

        /**
         * 播放音效
         */
        playEffect(name) {
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

