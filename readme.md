# my-cookie-js 

> Get and set key/value into cookie


## Install

```
$ npm install --save my-cookie-js 
```


## Usage

```js

var mc=MyCookie();

mc.set('key1','val1');
//document.cookie
//key1=val1;path=/

mc.get('key1');
//val1

mc.setObject('key2',{name:'name1'});
//document.cookie
//key2={name="name1"};path=/

mc.get('key2');
//"{name=\"name1\"}"
```

**


## License

MIT © [Dino]
