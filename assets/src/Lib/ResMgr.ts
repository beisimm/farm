/**
 * 资源管理
 * @author Lucai
 */

export class ResMgr {

    private static instance

    public static getInstance(): ResMgr {
        if (this.instance == null) {
            this.instance = new ResMgr();
        }
        return this.instance;
    }

    constructor() {
        this.loadRes("prefab")
        this.loadRes("ViewSrc")
    }

    public bundleList = [
        "prefab",
        "ViewSrc"
    ]

    loadRes(bundleName: string) {
        cc.assetManager.loadBundle(bundleName, (err: Error, bundle: cc.AssetManager.Bundle) => {
            if (err) {
                cc.log('Error ', err);
            } else {
                console.log("res", bundle)
            }
            return;
        })
    }

    loadResP(bundleName: string): Promise<any> {
        return new Promise((resolve, reject) => {
            cc.assetManager.loadBundle(bundleName, (err: Error, bundle: cc.AssetManager.Bundle) => {
                if (err) {
                    cc.log('Error ', err);
                    reject(err)
                    return;
                } else {
                    resolve(bundle)
                }
            });
        })
    }

    getRes(name: string, bundleName: string, type?: any): Promise<any> {
        return new Promise((resolve, reject) => {
            cc.assetManager
                .getBundle(bundleName)
                .load(name, (err: Error, asset) => {
                    if (err) {
                        cc.log('Error url [' + err + ']');
                        reject(err)
                        return;
                    } else {
                        resolve(asset)
                    }
                })
        })
    }

    getPrefab(name: string): Promise<cc.Prefab> {
        return new Promise((resolve, reject) => {
            cc.assetManager
                .getBundle("prefab")
                .load(name, (err: Error, asset: cc.Prefab) => {
                    if (err) {
                        cc.log('Error url [' + err + ']');
                        reject(err)
                        return;
                    } else {
                        resolve(asset)
                    }
                })
        })
    }



}
