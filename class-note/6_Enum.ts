
// Enum 타입 : 특정한 값들의 집합을 의미하는 자료형, 문자형 이넘과 숫자형 이넘이 있음

// 숫자형 이넘

enum Shoes {
    Nike, // 초기화 하지 않으면 enum number = 0 에서 하나씩 증가
    Adidas,
    Puma
}

var myShoes = Shoes.Nike;
console.log(myShoes); // 0


/////////////////////////////////////////////////////////////////

// 문자형 이넘

enum Shoes2 {
    Nike = '나이키', // 초기화 하지 않으면 enum number = 0 에서 하나씩 증가
    Adidas = '아디다스'
}

var myShoes2 = Shoes2.Nike;
console.log(myShoes2); // '나이키'


/////////////////////////////////////////////////////////////////

// 이넘 활용 사례

enum Answer {
    Yes = 'y',
    No = 'n'
}

function askQuestion(answer : string){
    if(answer === Answer.Yes){
        console.log("정답");
    }
    if(answer === Answer.No){
        console.log("오답");        
    }
}

askQuestion(Answer.Yes); // enum에서 정의한 것만 사용 가능

// askQuestion('예스')
// askQuestion('y')
// askQuestion('Yes')
