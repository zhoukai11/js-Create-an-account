window.addEventListener('load', function() {
    //获取元素

    var color = document.querySelector('.color');
    var ys = document.getElementById('ys');
    var URL = document.querySelector('.URL');
    var URLs = document.getElementById('URLs');
    var Chinese = document.querySelector('.Chinese');
    var zw = document.getElementById('zw');
    //设置正则表达式
    var colorReg = /^#([a-f0-9]{6}|[a-f0-9]{3})$/i; //十六进制颜色
    // console.log(colorReg.test('#111'));
    var URLReg = /^[A-z]{3,5}:\/\/([A-z0-9]+(-[A-z0-9]+)?\.)+[A-z]{2,}$/;
    // console.log(URLReg.test('http://www.163.com.cn'));
    var ChineseReg = /[\u4E00-\u9FA5]+/;
    // console.log(ChineseReg.test('s珍贵'));
    //表单中某元素失去鼠标焦点，立刻校验此项元素
    color.addEventListener('blur', function() {
        var colorValue = color.value;
        if (colorReg.test(colorValue)) {
            ys.innerHTML = '十六进制颜色合法';
            ys.style.color = 'green';
        } else {
            ys.innerHTML = '十六进制颜色不合法';
            ys.style.color = '#df3033';
        }
    })
    URL.addEventListener('blur', function() {
        var URLValue = URL.value;
        if (URLReg.test(URLValue)) {
            URLs.innerHTML = 'URL合法';
            URLs.style.color = 'green';
        } else {
            URLs.innerHTML = 'URL不合法';
            URLs.style.color = '#df3033';
        }
    })
    Chinese.addEventListener('blur', function() {
        var ChineseValue = Chinese.value;
        if (ChineseReg.test(ChineseValue)) {
            zw.innerHTML = '包含中文';
            zw.style.color = 'green';
        } else {
            zw.innerHTML = '不包含中文';
            zw.style.color = '#df3033';
        }
    })

})