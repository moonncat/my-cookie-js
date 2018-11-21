export class MyCookie {
    document:Document;
    constructor(document:Document){
        this.document=document;
    }

    set(key: string, val: string, expires: string = "", path: string = "") {
        var ck = key + "=" + val;
        if (path && path.length > 0) {
            ck += ";path=/" + path;
        } else {
            ck += ";path=/";
        }
        if (expires && expires.length > 0) {
            ck += ";expires=" + expires;
        }
        this.document.cookie = ck;
    }

    get(key: string) {
        var cookie = this.document.cookie;
        var reg = new RegExp(key + "=[^;]*(;|$)");
        var result = reg.exec(cookie);
        if (!result || result.length < 1) {
            return undefined;
        } else {
            var keyVal = result[0].split('=');
            //find the key
            if (keyVal[0] === key) {
                if (keyVal.length > 1) {
                    //if key=xxx
                    var length = keyVal[1].length;
                    if (keyVal[1].substring(length - 1, length) === ';') {
                        return keyVal[1].substring(0, length - 1);
                    } else {
                        return keyVal[1];
                    }
                } else {
                    //if key=
                    return "";
                }
            }
        }
    }
}



