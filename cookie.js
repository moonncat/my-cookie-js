"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MyCookie = /** @class */ (function () {
    function MyCookie(document) {
        this.document = document;
    }
    MyCookie.prototype.set = function (key, val, expires, path) {
        if (expires === void 0) { expires = ""; }
        if (path === void 0) { path = ""; }
        var ck = key + "=" + val;
        if (path && path.length > 0) {
            ck += ";path=/" + path;
        }
        else {
            ck += ";path=/";
        }
        if (expires && expires.length > 0) {
            ck += ";expires=" + expires;
        }
        this.document.cookie = ck;
    };
    MyCookie.prototype.get = function (key) {
        var cookie = this.document.cookie;
        var reg = new RegExp(key + "=[^;]*(;|$)");
        var result = reg.exec(cookie);
        if (!result || result.length < 1) {
            return undefined;
        }
        else {
            var keyVal = result[0].split('=');
            //find the key
            if (keyVal[0] === key) {
                if (keyVal.length > 1) {
                    //if key=xxx
                    var length = keyVal[1].length;
                    if (keyVal[1].substring(length - 1, length) === ';') {
                        return keyVal[1].substring(0, length - 1);
                    }
                    else {
                        return keyVal[1];
                    }
                }
                else {
                    //if key=
                    return "";
                }
            }
        }
    };
    return MyCookie;
}());
exports.MyCookie = MyCookie;
