const timeLine1 = document.querySelector('.content6-8') as HTMLDivElement;
const timeLine2 = document.querySelector('.content8-12') as HTMLDivElement;
const timeLine3 = document.querySelector('.content12-15') as HTMLDivElement;
const timeLine4 = document.querySelector('.content15-18') as HTMLDivElement;
const timeLine5 = document.querySelector('.content18-22') as HTMLDivElement;
const timeLine6 = document.querySelector('.content22-24') as HTMLDivElement;
const time1 = document.querySelector('.time1') as HTMLParagraphElement;
const time2 = document.querySelector('.time2') as HTMLParagraphElement;
const time3 = document.querySelector('.time3') as HTMLParagraphElement;
const time4 = document.querySelector('.time4') as HTMLParagraphElement;
const time5 = document.querySelector('.time5') as HTMLParagraphElement;
const time6 = document.querySelector('.time6') as HTMLParagraphElement;
const plofile = document.querySelector('.mb-4') as HTMLDivElement;
const plofileContent = document.querySelector('.row') as HTMLDivElement;

const navbarToggler: HTMLElement | null = document.querySelector('.navbar-toggler');
const navbarLinks: HTMLElement | null = document.querySelector('#navbarLinks');
navbarToggler?.addEventListener('click', () => {
    if (navbarLinks) {
        navbarLinks.style.display = navbarLinks.style.display === 'flex' ? 'none' : 'flex';
    }
});

function contentBlock(element: HTMLDivElement): void { element.style.display = "block" };
function contentNone(element: HTMLDivElement): void { element.style.display = "none" };
const timeLineContent: HTMLDivElement[] = [timeLine1, timeLine2, timeLine3, timeLine4, timeLine5, timeLine6];
timeLineContent.forEach(element => { element.style.display = "none" });
contentNone(plofileContent);

let n: number = 0; 
plofile.addEventListener('click',()=>{
  if(n === 0){
  contentBlock(plofileContent);
  n++;
  }else{
  contentNone(plofileContent);
  n--;
  };
});
let n1: number = 0; 
time1.addEventListener('click',()=>{
  if(n1 === 0){
  contentBlock(timeLine1);
  n1++;
  }else{
  contentNone(timeLine1);
  n1--;
  };
});
let n2: number = 0; 
time2.addEventListener('click',()=>{
  if(n2 === 0){
  contentBlock(timeLine2);
  n2++;
  }else{
  contentNone(timeLine2);
  n2--;
  };
});
let n3: number = 0; 
time3.addEventListener('click',()=>{
  if(n3 === 0){
  contentBlock(timeLine3);
  n3++;
  }else{
  contentNone(timeLine3);
  n3--;
  };
});
let n4: number = 0; 
time4.addEventListener('click',()=>{
  if(n4 === 0){
  contentBlock(timeLine4);
  n4++;
  }else{
  contentNone(timeLine4);
  n4--;
  };
});
let n5: number = 0; 
time5.addEventListener('click',()=>{
  if(n5 === 0){
  contentBlock(timeLine5);
  n5++;
  }else{
  contentNone(timeLine5);
  n5--;
  };
});
let n6: number = 0; 
time6.addEventListener('click',()=>{
  if(n6 === 0){
  contentBlock(timeLine6);
  n6++;
  }else{
  contentNone(timeLine6);
  n6--;
  };
});

