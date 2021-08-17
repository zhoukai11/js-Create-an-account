window.addEventListener('load', function() {
    //获取元素
    var btn = document.querySelector('.btn');
    var userInp = document.querySelector('.userInp');
    var yhm = document.getElementById('yhm');
    var passwordInp1 = document.querySelector('.passwordInp1');
    var mima = document.getElementById('mima');
    var eye1 = document.getElementById('eye1');
    var passwordInp2 = document.querySelector('.passwordInp2');
    var qrmm = document.getElementById('qrmm');
    var eye2 = document.getElementById('eye2');
    var phoneInp = document.querySelector('.phoneInp');
    var sj = document.getElementById('sj');
    //设置正则表达式
    var userInpReg = /^[0-9A-z_-]{4,16}$/; //用户名
    // console.log(userInpReg.test('--rl'));
    var passwordInpReg = /^1[0-5]{2}[6-9]{3}[a-d]{2}$/i; //密码
    // console.log(passwordInpReg.test('123677dD'));
    var phoneInpReg = /^1[3-9]{1}[0-9]{9}$/; //手机号
    // console.log(phoneInpReg.test('1-365298220'));
    //点击提交按钮进行校验
    btn.addEventListener('click', function() {
            //要检验对象
            var user = userInp.value;
            var password1 = passwordInp1.value;
            var password2 = passwordInp2.value;
            var phone = phoneInp.value;
            //检查
            if (userInpReg.test(user)) {
                yhm.innerHTML = '用户名合法';
                yhm.style.color = 'green';
            } else {
                yhm.innerHTML = '用户名不合法';
                yhm.style.color = '#df3033';
            }
            if (passwordInpReg.test(password1)) {
                mima.innerHTML = '密码合法';
                mima.style.color = 'green';
            } else {
                mima.innerHTML = '密码不合法';
                mima.style.color = '#df3033';
            }
            if (passwordInpReg.test(password2) && password1 == password2) {
                qrmm.innerHTML = '密码一致';
                qrmm.style.color = 'green';
            } else {
                qrmm.innerHTML = '密码不合法或不一致，请重新输入';
                qrmm.style.color = '#df3033';
            }
            if (phoneInpReg.test(phone)) {
                sj.innerHTML = '手机号码合法';
                sj.style.color = 'green';
            } else {
                sj.innerHTML = '手机号码格式不正确，请重新输入';
                sj.style.color = '#df3033';
            }
        })
        //登录密码显示
    var flag1 = 0;
    eye1.onclick = function() {
            if (flag1 == 0) {
                passwordInp1.type = 'text';
                eye1.src = 'images/open.png'
                flag1 = 1;
            } else {
                passwordInp1.type = 'password';
                eye1.src = 'images/close.png'
                flag1 = 0;
            }
        }
        //确认密码显示
    var flag2 = 0;
    eye2.onclick = function() {
        if (flag2 == 0) {
            passwordInp2.type = 'text';
            eye2.src = 'images/open.png'
            flag2 = 1;
        } else {
            passwordInp2.type = 'password';
            eye2.src = 'images/close.png'
            flag2 = 0;
        }
    }
})