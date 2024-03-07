"use strict";
const timeLine1 = document.querySelector('.content6-8');
const timeLine2 = document.querySelector('.content8-12');
const timeLine3 = document.querySelector('.content12-15');
const timeLine4 = document.querySelector('.content15-18');
const timeLine5 = document.querySelector('.content18-22');
const timeLine6 = document.querySelector('.content22-24');
const time1 = document.querySelector('.time1');
const time2 = document.querySelector('.time2');
const time3 = document.querySelector('.time3');
const time4 = document.querySelector('.time4');
const time5 = document.querySelector('.time5');
const time6 = document.querySelector('.time6');
const plofile = document.querySelector('.mb-4');
const plofileContent = document.querySelector('.row');
const navbarToggler = document.querySelector('.navbar-toggler');
const navbarLinks = document.querySelector('#navbarLinks');
navbarToggler === null || navbarToggler === void 0 ? void 0 : navbarToggler.addEventListener('click', () => {
    if (navbarLinks) {
        navbarLinks.style.display = navbarLinks.style.display === 'flex' ? 'none' : 'flex';
    }
});
function contentBlock(element) { element.style.display = "block"; }
;
function contentNone(element) { element.style.display = "none"; }
;
const timeLineContent = [timeLine1, timeLine2, timeLine3, timeLine4, timeLine5, timeLine6];
timeLineContent.forEach(element => { element.style.display = "none"; });
contentNone(plofileContent);
let n = 0;
plofile.addEventListener('click', () => {
    if (n === 0) {
        contentBlock(plofileContent);
        n++;
    }
    else {
        contentNone(plofileContent);
        n--;
    }
    ;
});
let n1 = 0;
time1.addEventListener('click', () => {
    if (n1 === 0) {
        contentBlock(timeLine1);
        n1++;
    }
    else {
        contentNone(timeLine1);
        n1--;
    }
    ;
});
let n2 = 0;
time2.addEventListener('click', () => {
    if (n2 === 0) {
        contentBlock(timeLine2);
        n2++;
    }
    else {
        contentNone(timeLine2);
        n2--;
    }
    ;
});
let n3 = 0;
time3.addEventListener('click', () => {
    if (n3 === 0) {
        contentBlock(timeLine3);
        n3++;
    }
    else {
        contentNone(timeLine3);
        n3--;
    }
    ;
});
let n4 = 0;
time4.addEventListener('click', () => {
    if (n4 === 0) {
        contentBlock(timeLine4);
        n4++;
    }
    else {
        contentNone(timeLine4);
        n4--;
    }
    ;
});
let n5 = 0;
time5.addEventListener('click', () => {
    if (n5 === 0) {
        contentBlock(timeLine5);
        n5++;
    }
    else {
        contentNone(timeLine5);
        n5--;
    }
    ;
});
let n6 = 0;
time6.addEventListener('click', () => {
    if (n6 === 0) {
        contentBlock(timeLine6);
        n6++;
    }
    else {
        contentNone(timeLine6);
        n6--;
    }
    ;
});
