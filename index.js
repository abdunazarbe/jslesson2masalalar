 /* TIPLAR BO'LIMI
 /* 
1 masala
let age=prompt("uzunlikni kiriting","");
let ake=age%1000;
let ale=age-ake;
let af=ale/1000;
alert(`demak ${af} metr`);
//cantimetr ovopman

*/

/*
2masala

let mas=prompt("massani kiriting","");
let ake=mas%1000;
let ale=mas-ake;
let ton=ale/1000;
alert(`demak ${ton} tonna`);

*/


/*
3masala

let a=prompt("birinchi soni kiriting");
let b=prompt("ikkinchi soni kiriting");
d=a/b;
alert(d);

*/
 
/*
//4masala
let a=prompt("sonni kiriting");
let b=a/10;
let c=a%10;
let d=c/10;
let f=b-d;

alert(`onliklar xonasida ${f}`);
alert(`birliklar xonasida ${c}`);

*/

/*
5 masala
let a=prompt("sonni kiriting");
let b=a/10;
let c=a%10;
let d=c/10;
let f=b-d;
let k=c+f;
alert(`raqamlar yigindis: ${k}`);

*/

/*
 6masala
let a=prompt("sonni kiriting");
let b=a/10;
let c=a%10;
let d=c/10;
let f=b-d;
let k=c*f;
alert(`raqamlar kupaytmasi: ${k}`);

*/

/*
7 masala
let a=prompt("sonni kiriting(999dan katta)");
let b=a/100;
let c=a%100;
let d=c/100;
let f=b-d;
alert(b);

*/
/*
8 masala
let a=prompt("sekundlar sonini kiriting");
let b=a/60;
let c=b/60;

alert(`${b}minut`);
alert(`${c}soat`);
*/

//Mantiqiy amallar

/*
mantiq.1
let a=prompt("Soni kiriting");
if (a>0){
    alert(1);
}
else{
    alert(0);
}

*/
/*
mantiq.2
let a=prompt("soni kiriting");
if(a%2==1){
    alert("toq son");
}
else{
    alert("juft");
}
*/

/*
mantiq.3
let a=prompt("soni kiriting");
if(a%2==0){
    alert("juft");
}
else{
    alert("toq");
}
*/

/*

mantiq.4
let a=prompt("soni kiriting");
let b=prompt("2soni kiriting");
if(a>0 && b>0){
    alert("musbat ikkalasi ham");
}
else {
    alert("musbat son yetarli emas");
}
*/

/*mantiq .5
let a=prompt("soni kiriting");
let b=prompt("2soni kiriting");
let c=prompt("3soni kiriting");
if(a>b&&b>c){
    alert("togri")
}
else{
    alert(0)
}
*/

/* 
mantiq.6
let a=prompt("soni kiriting");
let b=prompt("2soni kiriting");
let c=prompt("3soni kiriting");
if(a<b&&b<c){
    alert("b ortada yotadi")
}
else{
    alert("b ortada emas:)")
}
*/
/*
mantiq.7
let a=prompt("soni kiriting");
let b=prompt("2soni kiriting");

if(a%2==1 && b%2==1){
    alert("ikkalasi ham toq");
}
else if(a%2==1 ||b%2==1){
alert("sonlardan bittasi toq emas");
}
else{
    alert("sonlardan hech biri toq emas");
}
*/

/*mantiq .8
let a=prompt("soni kiriting");
let b=prompt("2soni kiriting");
let c=prompt("3soni kiriting");
let d=prompt("4soni kiriting");
if(a>0 && b>0 && c>0 &&d>0){
    alert("hammasi musbat");
}
else{
    alert("hammasi musbat emas yoki qaysinisidir manfiy")
}

*/
/*
mantiq.9
let a=prompt("soni kiriting");
let b=prompt("2soni kiriting");
let c=prompt("3 soni kiriting")

if(a>0 && b>0 && c>0){
    alert("hammasi musbat");
}
else if(a<0 || b>0 && c>0){
alert("sonlardan bittasi musbat emas");
}
else if(a>0 && b>0 || c<0){
    alert("sonlardan bittasi musbat emas");
    }
else if(a>0 && c>0 ||b>0){
        alert("sonlardan bittasi musbat emas");
        }
else{
    alert("sonlardan hech biri musbat  emas");
}

*/

/* 
mantiq.10

let a=prompt("sonni kiriting");
if(a%7==0){
    alert("yakshanba");
}
else if(a%7==1){
    
        alert("dushanba");

}
else if(a%7==2){
    
    alert("seshanba");

}
else if(a%7==3){
    
    alert("chorshanba");

}
else if(a%7==4){
    
    alert("payshanba");

}
else if(a%7==5){
    
    alert("juma");

}
else if(a%7==6){
    
    alert("shanba");

}
*/
/*
mantiq.11
let a=prompt("raqam kodini kiriting");
if (a%90==0 ||a%90==1)
{
    alert("beeline");
}
else if(a%90==3 ||a%90==4)
{
    alert("ucell");
}
else if(a%90==5)
{
    alert("mobiuz");
}
else if(a%90==7||a%90==9)
{
    alert("uzmobile");
}
else if(a%30==3)
{
    alert("humans");
}
else{
    alert("men bunday komppaniya kodini bilmayman");
}

*/
/* 
mantiq .12
let a=prompt("Soni kiriting");

if (a>0){
    a+=1;
    alert(a);
}
else{
   let b=a-1;
    alert(b);
}
 */
//13 va 12 bir xil ekanu 
 /* 
 mantiq.14
let a=prompt("1 sonni kiriting");
let b=prompt("2 soni kiriting");
if (a>b){
    alert("birinchi sonni katta");
}
else if(a==b){
 alert("ikalasi teng");
}
else{
    alert("ikinci son katta");
}

*/

/*
mantiq.15

let a=prompt("1 sonni kiriting");
let b=prompt("2 soni kiriting");
let c=prompt("3 soni kiriting");
var max=0;
if(max<a){
    max=a;
}
if(max<b){
    max=b;
}
if(max<c){
    max=c;
}
alert(max);
*/
/*
mantiq.16
let a=prompt("1 sonni kiriting");
let b=prompt("2 soni kiriting");
let c=prompt("3 soni kiriting");

if(a<b && a<c){
    alert(a);
}
else if(b<a && b<c){
    alert(b);
}
else {
    alert(c);
}
*/
/* 
mantiq.17
let a=confirm("are you man");
if(a=="yes"||a=="ok"){
    alert("u are man");
}
else{
    alert("maybe u are woman");
}
*/
/* 
mantiq 18

let a=prompt("bahoni kiriting");
let b=500;
let c=400;
let d=300;
if(a==5)
{
    alert(b);
}
if(a==4)
  {
    alert(c);
  }
if(a<=3)
{
    alert(d);
}

*/

/* mantiq 19
let a=prompt("sonni kiriting");
if(a%2==1 &&a>0){
    alert("bu son -toq musbat");
}
else if(a%2==1 && a<0){
    alert("bu son -toq manfiy")
}

else if (a%2==0 && a>0)
{
    alert("bu son-juft musbat");
}
else if(a%2==0 && a<0){
   alert("bu son-juft manfiy");
}
else{
    alert("menimcha xato malumot kiritdingizov");
}
*/

/* 
mantiq 20
let a=prompt("tugilgan yilingizni kiriting");
let b=2023;
let c=b-a;
alert(c);

*/

/* 
mantiq 21
 let a=prompt("sonni kiriting");
 let b=prompt("2sonni kiriting");
 let c=prompt("3sonni kiriting");
if(a<=b &&b<=c){
    alert("qanoatlantiradi");
}
else{
    alert("qanoatlantirmaydi");
}
*/
/* 
mantiq 22
let a=prompt("1 soni kiriting");
let b=prompt("2 soni kiriting");
if(a%2==1||b%2==1){
    alert("ikkilasidan biri toq");
}
else {
    alert("ikkalasi ham toq emas shekilli");
}
*/
/*
mantiq 23
let a=prompt("sonni kiriting");
let b=prompt("2sonni kiriting");
let c=prompt("3sonni kiriting");
if(a>0&&b>0&&c>0){
    alert("hammasi musbat");
}
else{
    alert("birontasi musbat emas yoki qaysidir biri musbat emas");
}
*/

/* 
mantiq 24
let a=prompt("sonni kiriting");
let b=prompt("2sonni kiriting");
let c=prompt("3sonni kiriting");
if(a>0||b>0||c>0){
    alert("kamida bittasi musbat");
}
else{
    alert("birontasi musbat emas");
}
*/

let a=prompt("sonni kiriting");
let b=a/100;
let c=a%100;
let d=c/100;
let f=b-d;
alert(b);