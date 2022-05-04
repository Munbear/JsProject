/**
 * prototype
 * function 기계(){ } <<= 옛날 문법
 *
 * Es5 (상속기능 구현)
 * Object.create(prototypeObject);
 * let 부모 = {
 *     name : 'Kim',
 *     age : 50
 * };
 *
 * let 자식 = Object.create(물려받을 부모 object);
 * let 자식 = Object.create(부모); <= prototype 을 부모로 해주세요~ 라고 정의
 * 자식의 age를 바꾸고 싶으면 ?
 * 자식.age = 20; // 이렇게 사용할 수 있다
 * let 손자 = Object.create(자식);
 * // 손자 { }
 * 손자.name
 * => :'kim'
 * 손자.age
 * => 20 => 50
 *
 * 
 * Es6
 *
 */