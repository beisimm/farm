export class HttpMsg {
    /**
     * get请求
     * @param {string} url
     * @param {function} callback
     */
    static get(url, callback) {
        console.log("Status: Send Get Request to " + url);
        xhr.open("GET", url, true);
        xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        xhr.setRequestHeader("Access-Control-Allow-Origin", "*");
        xhr.setRequestHeader("Content-Type", "applocation/x-www-form-urlencoded");
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && (xhr.status >= 200 && xhr.status <= 207)) {
                callback(true, xhr.responseText);
            }
        };
        xhr.send();
    }

    static getParam(data) {
        let url = ''
        console.log(data)
        for (let k in data) {
            console.log(k)
            let value = data[k] !== undefined ? data[k] : '';
            url += `&${k}=${value}`
        }
        return url ? url.substring(1) : ''
    }

    static post(url, pra, callBack) {
        // return new Promise((resolve, reject) => {
            let param = this.getParam(pra);
            // url += param
            url = `${url}?${param}`
            console.log(url)
            xhr.open("POST", url);
            xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
            xhr.setRequestHeader("Access-Control-Allow-Origin", "*");
            xhr.setRequestHeader("Content-Type", "applocation/x-www-form-urlencoded");
            xhr.onreadystatechange = () => {
                if (xhr.readyState === 4 && (xhr.status >= 200 && xhr.status <= 207)) {
                    callBack(xhr.response)
                }
            };
            xhr.send();
        // })
    }

}

let xhr = new XMLHttpRequest()
xhr.responseType = "json"
