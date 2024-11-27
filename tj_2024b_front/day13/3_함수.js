// 함수 정의
// 1. 매개변수 X, 반환값 X
function func1( ) {console.log(`func1 execute`);}
// 2. 매개변수 O, 반환값 X
function func2(X,Y) {
    console.log(`func2 execute ${X+Y}`);
}
// 3. 매개변수 O, 반환값 O
function func3(X,Y) {
    console.log(`func3 execute`);
    let result =  X+Y;
    return result;
}
// 4. 매개변수 X, 반환값 O
function func4(){
    console.log(`func4 execute`);
    return 10;
}

// 함수 호출
func1() // 인자값 X 리턴값 X
func2(1,2) // 인자값 O (1,2) 리턴값 X
func3(1,2) // 인자값 O (1,2) 리턴값 O (3), 함수 결과를 다음코드에서 사용할 예정이라면 변수에 대입
func4() // 인자값 X 리턴값 O (10)

