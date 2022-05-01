// Generics
// 제네릭 : 타입을 함수의 파라미터로 받는 개념

import { isTemplateExpression } from "typescript";

// function logText(text){
//     console.log(text);
//     return text;
// }

// logText(10); // 숫자 10
// logText('하이'); // 문자열 하이
// logText(true); // 진위값 true

// function logText<T>(text: T):T {
//     console.log(text);
//     return text;
// }
// logText<string>('하이');

////////////////////////////////////////////////////

// 기존 타입 정의 방식과 제네릭의 차이점 - 함수 중복 선언의 단점

// function logText(text: string){
//     console.log(text);
//     return text;
// }

// function logNumber(num: number){
//     console.log(num);
//     return num;
// }
// 중복코드 >> 좋지 않음

logText(10); 
logText('하이'); 
// const num = logNumber(10); // 이러면 num에서 number 관련 api 사용 가능함
// logText(true); 


//////////////////////////////////////////////////////

// 기존 문법과 제네릭의 차이점 - 유니온 타입을 이용한 선언 방식의 문제점

function logText(text: string | number){
    console.log(text);
    return text;
}

logText(10); 
logText('하이'); 


// const a = logText('하이'); 
// a.split('') // 이거 에러 난다
// 문제점 : 유니온에서 string과 number의 공통적인 함수만 호출 가능한 상황이 생김
// input은 둘 다 넣을 수 있지만, 반환값에서 에러 발생
// 이걸 제네릭을 이용하면 해결할 수 있음


///////////////////////////////////////////////////////

// 제네릭의 장점과 타입 추론에서의 이점

function logText2<T>(text: T): T {
    console.log(text);
    return text;
}

const str2 = logText2<string>('abc');
str2.split('') // 인자랑 반환값을 T로 설정하고, string으로 지정하면 split 가능
const login = logText2<boolean>(true);


// 인터페이스에 제네릭 선언하는 방법

// interface Dropdown {
//     value : string;
//     selected : boolean;
// }

interface Dropdown<T> {
    value: T;
    selected : boolean;
}

//const obj2: Dropdown<string> = {value: 'abc', selected: false}
const obj3: Dropdown<number> = { value:30, selected:true}

////////////////////////////////////////////////////////////

// 제네릭의 타입 제한(타입에 대해 더 자세히 힌트를 줄 수 있다)

function logTextLength<T>(text : T[]) : T[] {
    console.log(text.length);
    text.forEach(function (text) { // T가 배열이라는 자세한 힌트를 주면 foreach도 사용 가능
        console.log(text);
    });
    return text;
}

logTextLength<string>(['abc','ded']);

////////////////////////////////////////////////////////////

// 제네릭의 타입 제한 - 정의된 타입 이용하기

interface LengthType {
    length: number;
}

function logTextLength2<T extends LengthType>(text:T):T{ // T에 정의된 interface 확장
    text.length;
    return text;
}

logTextLength2("a");
//logTextLength2(10); 
logTextLength2({length: 10});

////////////////////////////////////////////////////////////

// 제네릭의 타입 제한 - keyof 이용하기

interface SI {
    name: string;
    price: number;
    stock: number;
}

function MS<T extends keyof SI>(item: T):T{
    return item;
}

MS("name");   // MS하고 () 안에서 컨트롤 스페이스 하면 뭐 들어갈 수 있는지 뜬다