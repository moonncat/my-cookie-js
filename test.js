'use strict';

this.window = {
  document: { cookie: "key1=val1;key2=val2; key3={'key':'val'}; path=/; key4=!@#$%^&*()<>'/.,?" }
}
var file = require('./cookie');
var mc = new file.MyCookie(this.window.document);
var assert = require('assert');

var assert = require('assert');
describe('cookie test', function() {
  describe('string', function() {
    it('simple string', function() {
      assert.strictEqual(mc.get("key1"), "val1", 'should return val1');
    });
  });
  describe('string', function() {
    it('string with space tailing', function() {
      assert.strictEqual(mc.get("key2"), "val2", 'should return val2');
    });
  });
  describe('json', function() {
    it('json format', function() {
      assert.strictEqual(mc.get("key3"), "{'key':'val'}", 'should return {"key":"val"}');
    });
  });
  describe('special character', function() {
    it('special character', function() {
      assert.strictEqual(mc.get("key4"), "!@#$%^&*()<>'/.,?", 'should return !@#$%^&*()<>"/.,?');
    });
  });
  describe('set and get string', function() {
    it('set and get', function() {
      mc.set('key3',"{'key':'val'}")
      assert.strictEqual(mc.get("key3"), "{'key':'val'}", "should return {'key':'val'}");

      mc.set('key4','!@#$%^&*()<>"/.,?')
      assert.strictEqual(mc.get("key4"), '!@#$%^&*()<>"/.,?', 'should return !@#$%^&*()<>"/.,?');
    });
  });
  describe('set and get json', function() {
    it('set and get object', function() {
      mc.setObject('key3',{'key':'val'})
      assert.strictEqual(mc.get("key3"), '{"key":"val"}', 'should return {"key":"val"}');
    });
  });
});

