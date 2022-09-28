// 写成可单独调用的动画效果文件
function animate(obj, target, callback) {
    // 启动前清除以前的定时器
    clearInterval(obj.timer);
    // obj.timer给每个元素单独的计时器
    obj.timer = setInterval(function () {
        // 更改step参数实现动画匀速、缓动等效果
        var step = (target - obj.offsetLeft) / 50
        // 三元表达式判断正负后取整（永远往大了取）
        step = step > 0 ? Math.ceil(step) : Math.floor(step);
        if (obj.offsetLeft == target) {
            clearInterval(obj.timer);
            // if (callback) {
            //     callback();
            // }
            // 短路运算符
            // 等价于上面的if写法
            // 左边参数传入时为真，继续执行&&后面的callback
            // 左边无参数传入时代码中断不执行
            callback && callback();
        }
        // 更改step参数实现动画匀速、缓动等效果
        obj.style.left = obj.offsetLeft + step + 'px';
    }, 10);
}