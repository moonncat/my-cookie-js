'use strict';

this.window = {
  document: { cookie: "key3={'key':'val'}; path=/; key4=!@#$%^&*()<>'/.,?; path=/; " }
}
var file = require('./cookie');
var mc = new file.MyCookie(this.window.document);
var assert = require('assert');

describe('set and get', function () {
  var count=0;
  assert.strictEqual(mc.get("key3"), "{'key':'val'}", 'should return {"key":"val"}');
  count++;
  assert.strictEqual(mc.get("key4"), "!@#$%^&*()<>'/.,?", 'should return !@#$%^&*()<>"/.,?');
  count++;
  
  mc.set("key1", "val1");
  assert.strictEqual(mc.get("key1"), "val1", 'should return val1');
  count++;

  mc.set("key2", "val2");
  assert.strictEqual(mc.get("key2"), "val2", 'should return val2');
  count++;
  
  mc.set("key3", "{'key':'val'}");
  assert.strictEqual(mc.get("key3"), "{'key':'val'}", 'should return {"key":"val"}');
  count++;

  mc.set("key4", "!@#$%^&*()<>'/.,?");
  assert.strictEqual(mc.get("key4"), "!@#$%^&*()<>'/.,?", 'should return !@#$%^&*()<>"/.,?');
  count++;
  

  console.log(count+' test(s).');
});


