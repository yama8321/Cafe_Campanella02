
window.addEventListener('load', function () {
    setTimeout(function(){   
    let loadingBg = document.querySelector('.loading_bg');
    loadingBg.classList.add('active');
},3000);

    // setTimeout(function () {
    //     if (!loadingBg.classList.contains('active')) {
    //         loadingBg.classList.add('active');
    //     }
    // }, 3000);
});


window.onscroll = function () {
    scrollFunction();
};




document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.querySelector('.toggleButton');
    const drawerMenu = document.getElementById('drawerMenu');

    // トグルボタンをクリックした際の処理
    toggleButton.addEventListener('click', function (event) {
        event.stopPropagation(); // クリックイベントが親要素に伝播しないようにします
        drawerMenu.classList.toggle('open');
        toggleButton.classList.toggle('close');
    });

    // ドキュメント内のアンカーリンクを取得します
    const anchorLinks = document.querySelectorAll('a');
    for (let i = 0; i < anchorLinks.length; i++) {
        // アンカーリンクがクリックされた際の処理
        anchorLinks[i].addEventListener('click', function () {
            drawerMenu.classList.remove('open');
            toggleButton.classList.remove('close');
        });
    }

    // ドキュメント内をクリックした際の処理
    document.addEventListener('click', function (event) {
        const targetElement = event.target;

        // ドロワーメニューが開いている場合に限り、ドロワーメニュー外をクリックで閉じます
        if (drawerMenu.classList.contains('open') && !drawerMenu.contains(targetElement) && targetElement !== toggleButton) {
            drawerMenu.classList.remove('open');
            toggleButton.classList.remove('close');
        }
    });
});



function scrollFunction() {
    const topButton = document.getElementById("topBBB");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        topButton.style.display = "block";
    } else {
        topButton.style.display = "none";
    }
}






const targettt = document.querySelectorAll('.animeIMG');
function observation(){
    targettt.forEach(function(target) {
    const targetRect = target.getBoundingClientRect();
    if (targetRect.top < window.innerHeight && targetRect.bottom >= 0) {
        target.classList.add('fadeinn'); 
    } else {
        target.classList.remove('fadeinn');
    }
});
};

window.addEventListener('scroll', observation);

const target02 = document.querySelector('.sec01ono');

function observation02() {
    const targetRect02 = target02.getBoundingClientRect();
    if (targetRect02.top < window.innerHeight && targetRect02.bottom >= 0) {
        target02.classList.add('fadein02');
    } else {
        target02.classList.remove('fadein02');
    }
};

window.addEventListener('scroll', observation02);

const target03 = document.querySelector('.sec01p');

function observation03() {
    const targetRect03 = target03.getBoundingClientRect();
    if (targetRect03.top < window.innerHeight && targetRect03.bottom >= 0) {
        target03.classList.add('fadein03');
    } else {
        target03.classList.remove('fadein03');
    }
};

window.addEventListener('scroll', observation03);


const targetline = document.querySelectorAll('.line1');
function line001() {
    targetline.forEach(function(target) {
    const targetRect = target.getBoundingClientRect();
    if (targetRect.top < window.innerHeight && targetRect.bottom >= 0) {
        target.classList.add('line01');
    } else {
        target.classList.remove('line01');
    }
});
};
window.addEventListener('scroll', line001);


const targetline2 = document.querySelectorAll('.line2');
function line002() {
    targetline2.forEach(function(target) {
    const targetRect = target.getBoundingClientRect();
    if (targetRect.top < window.innerHeight && targetRect.bottom >= 0) {
        target.classList.add('line02');
    } else {
        target.classList.remove('line02');
    }
});
};
window.addEventListener('scroll', line002);


const targetline3 = document.querySelectorAll('.line3');
function line003() {
    targetline3.forEach(function(target) {
    const targetRect = target.getBoundingClientRect();
    if (targetRect.top < window.innerHeight && targetRect.bottom >= 0) {
        target.classList.add('line03');
    } else {
        target.classList.remove('line03');
    }
});
};
window.addEventListener('scroll', line003);



const gallaniLeft = document.querySelectorAll('.gallanimeLeftt');
function gallLeft() {
    gallaniLeft.forEach(function(target) {
    const targetRect = target.getBoundingClientRect();
    if (targetRect.top < window.innerHeight && targetRect.bottom >= 0) {
        target.classList.add('fadeLeft');
    } else {
        target.classList.remove('fadeLeft');
    }
});
};
window.addEventListener('scroll', gallLeft);

const gallanRight = document.querySelectorAll('.gallanimeRightt');
function gallRight() {
    gallanRight.forEach(function(target) {
    const targetRect = target.getBoundingClientRect();
    if (targetRect.top < window.innerHeight && targetRect.bottom >= 0) {
        target.classList.add('fadeRight');
    } else {
        target.classList.remove('fadeRight');
    }
});
};
window.addEventListener('scroll', gallRight);



const target04 = document.querySelector('.staffMino');

function observation04() {
    const targetRect04 = target04.getBoundingClientRect();
    if (targetRect04.top < window.innerHeight && targetRect04.bottom >= 0) {
        target04.classList.add('fadein04');
    } else {
        target04.classList.remove('fadein04');
    }
};

window.addEventListener('scroll', observation04);

const target05 = document.querySelector('.staffMedousa');

function observation05() {
    const targetRect05 = target05.getBoundingClientRect();
    if (targetRect05.top < window.innerHeight && targetRect05.bottom >= 0) {
        target05.classList.add('fadein05');
    } else {
        target05.classList.remove('fadein05');
    }
};

window.addEventListener('scroll', observation05);




