// 类的装饰器
// 装饰器本身是一个函数
// 通过@符号来使用
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function testDecorator(constructor) { }
var Test = /** @class */ (function () {
    function Test() {
    }
    Test = __decorate([
        testDecorator
    ], Test);
    return Test;
}());
var test = new Test();
