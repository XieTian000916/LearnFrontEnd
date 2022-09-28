"use strict";
/* 三斜线指令是包含单个[XML]标签的单行注释。注释的内容会做为编译器指令使用
如果一个命名空间在一个单独的 TypeScript 文件中
则最应使用三斜杠 /// 引用它 */
/// <reference path = "24_namespace.ts"/>
const yinyong = {
    name: "kokomi",
};
console.log(yinyong);
