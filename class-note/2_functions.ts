function _sum(a: number, b:number){
    return a+b;
}
_sum(10,20);

// 함수의 반환값에 타입을 정의하는 방식
function _add() : number {
    return 10;
}

// 함수의 타입을 정의하는 방식
function _sum2(a:number, b:number) : number{
    return a+b;
}

_sum2(20,30);
//_sum2(20,30,40,50); // 이러면 오류난다 이런 오류를 ts가 잡아줌
// js와는 달리 타입스크립트가 조금 더 업격하게 체크해줌

// 함수의 "옵셔널 파라미터"
function _log(a: string, b?:string){ // 두번째 파라미터에 ? 를 주면 파라미터가 안 들어와도 오류 x

}
_log('hello world')
_log('hello world','kim')
