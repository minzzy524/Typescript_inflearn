// function logMessage(value : any){
//     console.log(value);
// }

// logMessage('Hello');
// logMessage(3);
// logMessage(false);

////////////////////////////////////////////////

// 유니온 타입 : 하나 이상의 타입을 쓸 수 있게 하는 것

function logMessage(value : string  | number){
    console.log(value);
};

logMessage('Hello');
logMessage(3);

// 유니온 타입의 장점

var minseong2: string | number | boolean;
function logMessage2(value : string  | number){
    if(typeof value === 'number'){
        value.toLocaleString();  // union 타입이면 value. 했을 때 number 관련한 api나 속성들을 사용가능(any일 때는 . 해도 안나옴)
    }
    if(typeof value === 'string'){
        value.toString(); // value. 누르면 string 관련 문자열 메소드나 api 사용 가능
    }
    throw new TypeError('value must be string or number');
}

logMessage2('Hello');
logMessage2(3);

// 유니온 타입의 특징 (안터페이스로 받아다 쓸 때 공톷된 프로퍼티만 접근 가능함)

interface Developer2 {
    name : string;
    skill : string;
}

interface Person2 {
    name : string;
    age : number;
}

function askSomeone(someone : Developer2 | Person2){
    someone.name // name만 접근 가능한데 실제로는 name만 가능(공통속성만 접근가능)
    // someone.skill // error
    // someone.age // error
}
askSomeone({name : "민성", age : 30})
askSomeone({name : "민성", skill : "C#"})

// 유니온은 이런 프로퍼티의 조합을 선택해서 사용이 가능하다

////////////////////////////////////////////////

// Intersection type

// function askSomeone(someone : Developer2 | Person2){
//     someone.name // name만 접근 가능한데 실제로는 name만 가능(공통속성만 접근가능)
//      someone.skill // error
//      someone.age // error

// } // 유니온은 공통 프로퍼티가 아닌 skill 과 age가 에러지만, 인터섹션은 가능하다

function askSomeone2(someone : Developer2 & Person2){ //  인터섹션
    someone.name // name만 접근 가능한데 실제로는 name만 가능(공통속성만 접근가능)
    someone.skill 
    someone.age 
    // 인터섹션을 사용하면 someone은 두 인터페이스의 모든 속성, 타입을 가지고 있는 새로운 타입
    // 따라서 someone에서 skill과 age도 접근이 가능하다
    // 하지만 실무에서는 union을 더 많이 쓴다 
    // 유니온은 각각의 인터페이스의 프로퍼티만 쓸 수 있는데, 인터섹션은 두 인터페이스의 모든
    // 모든 프로퍼티를 가져야만 오류가 발생하지 않음
}

askSomeone2({name: '김민성', skill:"C#", age:30})
// 인터섹션은 모든 프로퍼티를 다 사용해야만 에러가 나지 않음
// 내가 원하는 프로퍼티만 뽑아서 사용할 수 없음 

// var minseong3 : string | number | boolean
// var minseong4 : string & number & boolean



////////////////////////////////////////////////
