---
layout: home
---

# 표현식과 연산자
자바스크립트에는 래퍼 객체가 있고 묵시적 타입 변환을 할 수 있다.

## 연산자
프로그래밍은 연산지를 사용하여 다양한 계산을 합니다.

### 표현식과 연산자

#### 표현식
표현식이란 결과적으로 `어떤 값`으로 평가되는 것입니다. 평가란 식의 값을 `계산`하는 행위를 뜻합니다. 
표현식은 `숫자`, `문자열`, `논리값` 등의 원시 값 입니다. 변수, 프로퍼티, 배열 요소, 함수 호출, 메서드 호출도 표현식 입니다.  

> 표현식은 먼저 왼쪽 피연산자 값부터 순서대로 평가되고, 그 다음에 연산자로 계산이 시작됩니다


#### 연산자
`연산자`를 시용하면 표현식을 `조합`하여 더욱 복잡한 표현식을 만들어 낼 수 있습니다.

`+`와 같은 연산자는 `a + b`처럼 a와 b를 연산합니다. 그리고 연산의 대상이 되는 것을 `피연산자`라고 합니다. 피연산자의 갯수에 따라 연산자의 종류를 구분합니다.

* 단항 연산자
* 이항 연산자
* 삼항 연산자

### 연산자의우선순위
연산자 여러 개 였을 때는 계산 순서 에 따라 결과사 달라섭니디. 연산시에는 우선순위라는 것이 정해져 있고, 우선순위에 따라 연산 순서가 정해집니다.

`그룹 연산자 ()`를 시용해서 계신 순시를 명시적으로 지징 가능합니다.

### 연산자결합법칙
우선순위가 갑은 연산사기 나열되어 있으면, 왼쪽에서 오른쪽 방향으로 결합합니다.

연산자에는 왼쪽과 결합해서 연산할지 아니면 오른쪽과 결합해서 연산할지를 결정하는 결합 법칙이 정해져 있습니다

### 연산자의 부수효과
변수 값을 바꾸는 표현식은 일반적으로 부수 효과가 있는 표현식이라고 합니다.

```
x = 10;
```

대입 연산자, 증가 연산자.    갑소 연산자. delete가 부수 효과가 있는 연산자입니다.


## 산술연산
산술 연산을 하는 연산자, 제곱근이나 삼각 함수 등의 수학 함수를 배옵니다

### 산술연산자
산술 연신자는 피연산자가 숫자인 연산자입니다.
> 피연산자가 숫자가 아닐 때는 연산자가 피연산자 타입음 숫자 타입으로 바꾸어 연산합니다.

계산할 수 없을 때는 `NaN` 이 나옵니다.

#### 산술 이항 연산자
* 정수끼리 나누어도 결과가 부동소수점이 된다
* 나머지 연산자 %의 피연산자는 부동소수점이다
* `+` 연산자는 피연산자 중 하나가 문자열이면 나머지 피연산자를 문자열로 만든다
* 계산할 수 없는 경우에눈 `NaN` 으로 평가 합니다.

#### 산술 단항 연산자
모두가 `부수 효과`가 있는 연신자이며 피연산지는」 좌변에 있어야 합니다.

증가 연산자와 감소 연산자는 피 연산자 앞에 표기하는 전위 표기 법과 뒤에 표기하는 후위 표기법을 시용할 수 있습니다.


#### 산술 대입 연산자
대입 연산자와 산술 이항 연산자를 조합한 연산을 좀 디 간략하게 표기한 것입니다.

* `+=`
* `-=`
* `*=`
* `/=`
* `%=`

### Math 객체의 프로퍼티
Math 객체의 프로퍼티와 메서드를 지원합니다.


```js
var angle = Math.PI * theta / 180;
```

### 부동소수점과 정확도 문제
산술 연산을 할 때는 숫자에 유효한 자릿수가 였으므로 게산할 때 오차가 발생한다는 점을 항상 염두에 두어아힙니다.

자바스크깁트의 숫자는 IEEE745로 규성된 64비트 부동소수점 입니다.

## 문자열 제어하기
분자열을 다루는 연신자와 메시드를 배웁니다. 

### 문자열 연결

`+` 연산자는 피연산자가 모두 문자열아면 문자열로 연결합니다.

```js
"hello" + "world!"
"1" + "2"
```

피연신자 중 하나가 문자열 또는 문자열로 변환할수 였는 객제라면 다른 피연신지의 타입을 문자열로 바꾼다음 연결합니다.

```js
10 + "lilit tle india ns"   // '10lilit tle india ns'
1  +   {} // '1[object Object]'
true +   ( new  Date()) // 'trueMon Mar 20 2023 14:15:32 GMT+0900 (한국 표준시)'
```

> 피연산시 두 개를 `숫자` 또는 `NaN`으로 타입을 바꾸어 더합니다.


### 문자열을 조작하는 메서드
문자열을 처리하기 위한 객체로 String 객제가 마련되어 였습니니.  

문자열을 String 객체로 변환 하려면 String `생성자`를 사용합니다. 

```js
var msgObj = new String( "Everything  is practice.");
```
원시 값을 객체로 변환하는 행위를 가리켜 원시 값을 객체로 래핑(warapping) 한다라고 합니다.


다양한 문자열 메서드를 제공합니다.


* at(index)
Returns the character (exactly one UTF-16 code unit) at the specified index. Accepts negative integers, which count back from the last string character.

* charAt(index)
Returns the character (exactly one UTF-16 code unit) at the specified index.

* charCodeAt(index)
Returns a number that is the UTF-16 code unit value at the given index.

* codePointAt(pos) (en-US)
Returns a nonnegative integer Number that is the code point value of the UTF-16 encoded code point starting at the specified pos.

* concat(str [, ...strN ])
Combines the text of two (or more) strings and returns a new string.

* includes(searchString [, position])
Determines whether the calling string contains searchString.

* endsWith(searchString [, length])
Determines whether a string ends with the characters of the string searchString.

* indexOf(searchValue [, fromIndex])
Returns the index within the calling String object of the first occurrence of searchValue, or -1 if not found.

* lastIndexOf(searchValue [, fromIndex])
Returns the index within the calling String object of the last occurrence of searchValue, or -1 if not found.

* localeCompare(compareString [, locales [, options]])
Returns a number indicating whether the reference string compareString comes before, after, or is equivalent to the given string in sort order.

* match(regexp)
Used to match regular expression regexp against a string.

* matchAll(regexp) (en-US)
Returns an iterator of all regexp's matches.

* normalize([form])
Returns the Unicode Normalization Form of the calling string value.

* padEnd(targetLength [, padString])
Pads the current string from the end with a given string and returns a new string of the length targetLength.

* padStart(targetLength [, padString])
Pads the current string from the start with a given string and returns a new string of the length targetLength.

* repeat(count)
Returns a string consisting of the elements of the object repeated count times.

* replace(searchFor, replaceWith)
Used to replace occurrences of searchFor using replaceWith. searchFor may be a string or Regular Expression, and replaceWith may be a string or function.

* replaceAll(searchFor, replaceWith)
Used to replace all occurrences of searchFor using replaceWith. searchFor may be a string or Regular Expression, and replaceWith may be a string or function.

* search(regexp)
Search for a match between a regular expression regexp and the calling string.

* slice(beginIndex[, endIndex])
Extracts a section of a string and returns a new string.

* split([sep [, limit] ])
Returns an array of strings populated by splitting the calling string at occurrences of the substring sep.

* startsWith(searchString [, length])
Determines whether the calling string begins with the characters of string searchString.

* substring(indexStart [, indexEnd])
Returns a new string containing characters of the calling string from (or between) the specified index (or indices).

* toLocaleLowerCase( [locale, ...locales])
The characters within a string are converted to lowercase while respecting the current locale.For most languages, this will return the same as toLowerCase().

* toLocaleUpperCase( [locale, ...locales])
The characters within a string are converted to uppercase while respecting the current locale.For most languages, this will return the same as toUpperCase().

* toLowerCase()
Returns the calling string value converted to lowercase.

* toString()
Returns a string representing the specified object. Overrides the Object.prototype.toString() method.

* toUpperCase()
Returns the calling string value converted to uppercase.

* trim()
Trims whitespace from the beginning and end of the string. Part of the ECMAScript 5 standard.

* trimStart()
Trims whitespace from the beginning of the string.

* trimEnd()
Trims whitespace from the end of the string.

* valueOf()
Returns the primitive value of the specified object. Overrides the Object.prototype.valueOf() method.

* @@iterator() (en-US)
Returns a new iterator object that iterates over the code points of a String value, returning each code point as a String value.

> https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String#%EC%9D%B8%EC%8A%A4%ED%84%B4%EC%8A%A4_%EB%A9%94%EC%84%9C%EB%93%9C


#### 문자열 길이 구하기
문자열의 길이는 배열과 마찬가지로 `length` 프로퍼터로 구할 수 였습니다.

```js
rnsgObj.length //  ~ 23
```


문자열은 객체가 아니므로 프로퍼터를 가지고 였지 않습니다.
문자열에서 프로퍼티를 사용하려고 하면 문자열이 자동으로 String 객제로 변환됩니다.

#### 문자열의 래퍼객체

String 객체는 원시 값이 아니라 객체입니다.

```js
var msg = new String("Everything  is practice.");
console.log(msg);
/*
String {'Everything  is practice.'}0: "E"1: "v"2: "e"3: "r"4: "y"5: "t"6: "h"7: "i"8: "n"9: "g"10: " "11: " "12: "i"13: "s"14: " "15: "p"16: "r"17: "a"18: "c"19: "t"20: "i"21: "c"22: "e"23: "."length: 24[[Prototype]]: String[[PrimitiveValue]]: "Everything  is practice."
*/
```

valueOf()  메서드를 사용해서 String 객체를 문자열로 변환 합니다.

```js
var msg = new String("Everything  is practice.").valueOf();
console.log(msg);

// Everything  is practice.
```

> 자바스크립트의 문자열은 불변입니다. 매서드는 호출한 결과 문자열뿐이지, 자체 문자열을 수정하지는 않습니다.


### String 생성자의 메서드
자바스크립트의 함수는 객제이며 프로퍼티를 갖고 었습니다. 

* String.length  

* String.fromCharCode()  
문자 코드(UTF-16 인코딩 값)를 문자영로 변환합니다.

```js
String.fromCharCode(0xAE38); // '길'
String.fromCharCode( 65 , 66 , 67 ); // 'ABC'
```


* String.fromCodePoint()  

* String.prototype  

* String.raw()  


### 문자열을 배열로 읽고 쓰기
문자열을 읽을 때는 charAt 메서드 대신 대괄호 연산자를 사용할 수 있습니다.

```js
msg[3]
msg[msg.length - 1]
```

쓰기는 불가능  
배멸치럽 값을 대입해서 수정할 수는 없습니다. 대입해도 무시됩니다.

```js
msg[3] = "R";
console.log(msg);
```


## 논리 연자와 관계 연산자
논리 연산자와 관계 연산자를 배웁니다.

### 관계연산자
관계 연산자는 두 개의 피연산지를 비교한 결괴를 논리값( true /false) 으로 반환힙니다. 
> 주로 제어 구조( if/else 문, while문, do/while문, for문)에서 조건식을 만들때 사용합니다.

* `==` [동일연산자](/operator/equality)
* `!=`
* `===` [일치연산자](/operator/equality)
* `!==`
* `<`
* `>`
* `<=`
* `>=`

### 논리연산자
논리 연산자는 관계 연산자를 사용하여 만든 논리식과 결합하여 더욱 복잡한 논리를 정의합니다.

* `&&`
* `||`
* `!`

## 비트연산
비트 연산자는 데이터 통신이나 이진 파일을 처리할 때 자주 시용합니다. 비트 연산이란 2진수 숫자의 자리별 값(비트 값)음 다루는 연산입니다. 비트 인산자에는 비트 논리 연산자와 비트 시프트 연산자가 있습니다.

### 비트 논리 연산자
비트 논리 연산자는 비트 값이 0 이면 `false`.  비트 값이 1 이면 `true` 로 평가하는 연산자입니다.

* `&` and
* `|` or
* `^` xor
* `~` not

### 비트 시프트 연산자
비트 시프트 연산자는 정수를 2 진수 비트 단위로 오른쪽 또는 왼쪽으로 이동시기는 연산자 입니다.

* `<<` 왼쪽 시프트
* `>>` 부호 이는 오른쪽 시프트
* `>>>` 부호없는 오른쪽 시프트

### 비트연산의 대입 연산자

* `&=`
* `|=`
* `^=`

* `<<=`
* `>>=`
* `>>>=`


## 기타연산

* `typeof` 데이터 타입을 조사한다.
* `?:` 조건 연산자
* `void` 정의되지 않는 값을 반환한다
* `,` 왼쪽에서 오른쪽 순서대로 피연산자를 연속해서 실행한다
* `delete` 객체의 프로퍼티나 배열 요소를 제거한다
* `new` 새로운 객체를 생성한다
* `in` 객체의 프로퍼티 포함 여부를 확인한다.
* `instanceof` 객체의 종류를 확인한다.
* `eval()` 인수로 받은 문자열을 자바스크립트 코드로 실행한다.

### typeof

### 조건연산자

### 쉼표 연산자

### eval 함수


## 명시적 타입 변환
자바스크립트는 연산을 할 때 피연산자의 타입을 묵시적으로 변환해서 유연하게 계산합니다.  
반대로, 변수 값을 출력할 때처럼 명시적으로 타입을 변환하여 사용할 수 있습니다.

### 숫자를 문자열로 변환하기
숫자의 타입을 문자열로 바꿀 수 있습니다.


#### 숫자+문자열
숫자외 문지열을 + 연산지로 연결하면 숫자의 타입이 문자열로 비뀝니다.

```js
10 + "cookies"
```

#### Number 객체의 메서드를 활용하는 방법
Number 객체의 메서드는 숫자의 타입을 문자열로 바꿉니다.

* toString
* toLocaleString 
* toFixed 
* toExponential
* toPrecision

#### String 함수를 활용하는 방법
String 생성자 앞에 new 연산자를 붙이면 String 객제를 생성하는 함수로 사용할 수 였습니다.

연산자를 붙이지 않으면 일반적 인 함수로 활용할 수 있습니다. 


### 문자열을 숫자로 변환하기
문자열의 타입을 숫자로 바꿀 수 있습니다.

#### 수식 안에서 묵시적으로 변환하는 방법
숫지를 뜻하는 문자열 타입을 목시적으로 숫자 타입으로 바꿀 수 있습니다

```js
var s = "2";
```

#### parselnt와 parseFloat 함수를 사용하는 방법
parseint와 parseFloat 함수는 문자열을 해석( p. ir`L ) 해서 숫자로 바꾸는 함수입니 다. 


#### Number 함수를 활용하는 방법
Number 생성자 앞에 new 연산자를 붙이면 Number 객체를 생성하는 함수로 사용할 수 있지만, new 
연산자를 붙이지 않으면 일반 함수로 활용할 수 있습니 다. 

```js
Number("2.71828");   // 2.71828
```

### 논리값으로 변환하기
모든 값을 논리값으로 바꾸는 방법은 두 가지입니다

```js
!!x
```
`!` 연산자는 논리 타입이 아닌 값의 타입을논리 타입으로 바꿉니다.  
그다음에 ! 를 하 
나 더 붙여서 참과 거 짓을 뒤바꾸고 있습니다. 


```js
Boolean(x);
```



