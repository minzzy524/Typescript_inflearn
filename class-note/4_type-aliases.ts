// interface Person {
//     name : string;
//     age: number;
// }

type _Person = {
    name : string;
    age : number;
}

var minzzy2 : _Person = {
    name: '민성',
    age : 30
}

// 타입은 인터페이스로도 쓰고 이렇게도 쓴다 
// 하지만 타입은 확장이 안되서 왠만하면 확장이 가능한 인터페이스를 사용해라
type MinzzyType = string;
var str: MinzzyType = '김민찌';

