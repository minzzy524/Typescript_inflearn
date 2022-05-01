class Person4 {
    // 타입 스크립트에서는 클래스의 최상단에 클래스에서 사용할 속성을 정의해줘야 함
    // name : string;
    // age : number;

    private name : string;
    public age : number;
    readonly log : string; // readonly는 값 변경 안됨, 읽기의 접근만 가능
    // 변수의 접근 범위도 설정할 수 있다.

    constructor(name : string, age : number) {
        this.name = name;
        this.age = age;
    }
}

// // 리액트 예전 문법 - 클래스 기반 코드
// function App extends React.Component{
   
// }

// // 리액트 최신 문법 - 훅 기반의 함수형 코드
// function App2(){
//     return <div>Hello World</div>
// }
