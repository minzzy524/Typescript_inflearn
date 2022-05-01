interface _User {
    name : string;
    age: number;
}

// 변수에 활용할 인터페이스
var minseong: _User = {
    name : "MS",
    age: 30
}

// 함수에 인터페이스 활용
function _getUser(_user : _User){
    console.log(_user);
}

const _capt = {
    name : '민찌',
    age: 22
}
_getUser(_capt);

// 함수의 스펙(구조)에 인터페이스를 활용
interface _SumFunction {
    (a: number, b:number) : number;
}

var _sum: _SumFunction;
_sum = function (a: number, b:number) :number{
    return a+b;
}

// 인덱싱
interface StringArray {
    [index : number] : string;
}

var arr = ['a','b','c'];
arr[0]; // 'a'
//arr[0]= 10 // interface 형식에 맞지 않음


// 딕셔너리 패턴
interface StringRegexDictionary {
    [key:string] : RegExp;
}

var obj : StringRegexDictionary = {
    cssFile : /\.css$/,
    jsFile : /\.js$/,
}

//obj['csFile'] = 'a'

Object.keys(obj).forEach(function(value){});

// 인터페이스 확장
interface Person {
    name: string,
    age: number
}

interface Developer extends Person {
    skill : string
}

let minzzy33 : Developer = {
    name : "김민찌",
    age : 30,
    skill : "ts"
}



