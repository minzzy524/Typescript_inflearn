// ES2015 (ES6)

function Person3(name, age){
    this.name = name;
    this.age = age;
}

var capt = new Person3('켑틴', 33);

class Person2 {
    // 클래스 로직
    // 클래스의 역할은 인스턴스를 만들어 주는 역할 >> 맨 처음에 생성자 호출
    constructor(name, age) {
        console.log('생성되었음');
        this.name = name;
        this.age = age;
    }
}

var minzzy = new Person2('민성', 30);
console.log(minzzy);


/////////////////////////////////////////////////////////

// 코딩할 때 prototype을 자주 사용 했었음
// Built-in Javascript API 또는 Javascript Native API


/////////////////////////////////////////////////////////
