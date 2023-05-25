# JSON

자바스크립트는 객체를 쉽게 표현하여 사용할 수 있는 Notation 표기법을 제공합니다.  이를 JSON이라고 합니다.



객체는 `{}`로 표현할 수 있습니다.

```js
var obj = {
  "kor":30,
  "eng":50,
  "math":80
};
```



## 중첩 데이터

json은 표기법은 중첩된 데이터도 손쉽게 표현을 할 수 있습니다.



```js
var notice = [
  {"id":1, "title":"hello"},
  {"id":2, "title":"world"} 
];
```



## eval()

문자열을 입력받아 자바스크립크 코드로 실행을 할 수 있습니다. 

```js
eval('var x=30;');
console.log(x);
```



eval() 함수를 응용하면 json 데이터가 문자열로 넘어올때, 간접 적으로 문자열을 파싱하여 데이터를 처리 할 수 있다.

```js
var data = '[ {"co":0.6}, {"co":0.7}, {"co":0.8} ]';
eval("var arr=" + data);
console.log(arr[0].co);
```



### Json Parser

일반적인 자바스크립트 객체의 선언과 접근

```js
var data = {
    id:1,
    title:"aaa"
};

console.log(data.title);
```



데이터가 json형식의 맞는 문자열일때 `JSON.parse()`함수를 통하여 데이터를 변경할 수 있습니다.

```js
var data = JSON.parse('[ {"co":0.6}, {"co":0.7}, {"co":0.8} ]');
```



반대로 기존의 객체를 json 형태의 문자열로 변경할 수도 있습니다.

```js
var data = {
    id:1,
    title:"aaa"
};

var json = JSON.stringify(data);
console.log(json);
```











