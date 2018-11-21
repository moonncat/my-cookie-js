'use strict';

var file = require('./cookie');
var mc =new file.MyCookie();

mc.set("key1", "val1");
mc.set("key2", "val2");
mc.set("key3", "{'key':'val'}");
mc.set("key4", "!@#$%^&*()<>'/.,?");
console.log(document.cookie);

var isPassed = true;
if (mc.get("key1") !== "val1") {
  console.log("key1 not matched");
  isPassed = false;
}
if (mc.get("key2") !== "val2") {
  console.log("key2 not matched");
  isPassed = false;
}
if (mc.get("key3") !== "{'key':'val'}") {
  console.log("key3 not matched");
  isPassed = false;
}
if (mc.get("key4") !== "!@#$%^&*()<>'/.,?") {
  console.log("key4 not matched");
  isPassed = false;
}
if (!isPassed) {
  throw "test failed";
}

