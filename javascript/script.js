console.log('veikia isorinis')



  function rand(min, max) {
     min = Math.ceil(min);
     max = Math.floor(max);return Math.floor(Math.random() * (max - min + 1) + min);}
    
//    console.log(randomNumber(0, 2));

// Pirma uzduotis

function names(){
   const vardas = ("jacky");
const pavarde = ("chanas");
if (vardas.length < pavarde.length) {
    document.write(`<h3>${pavarde}</h3>`);
} else {
    document.write(`<h3>${vardas}</h3>`);
}
}



// Antra uzduotis
function yearSum (){
const vardas = ('marius');
const pavarde = ('bukys');
const gimimoMetai = (1979);
const metai = (2022);

amzius = metai - gimimoMetai;
document.write(`As esu ${vardas} ${pavarde}. Man yra ${amzius} metai(u)`);

}
// Trecia uzduotis

function lastLetters() {
const vardas = ("jacky");
const pavarde = ("chanas");
let random = vardas.slice(-3)+pavarde.slice(-3)
document.write(random);
}

// Ketvirta uzduotis

function fairyTale() {
   const fairyTale = ('Once upon a time in Holywood');
   document.write(fairyTale.replaceAll('o', '*').replaceAll('O', '*'));
}

// Penkta uzduotis

function allNumbers() {
   let nulis = 0
   let vienas = 0
   let duu = 0 
 
    let pirmas = Math.floor(Math.random() * (3))
   
     if (pirmas == 0){
         nulis++;
     }  else if (pirmas==1){
         vienas++;
     }  else {
         duu++;
     }        
             
 
    let antras = Math.floor(Math.random() * (3))
    if (antras == 0){
     nulis++;
 }  else if (antras==1){
     vienas++;
 }  else {
     duu++;
 }        
    let trecias = Math.floor(Math.random() * (3))
    if (trecias == 0){
     nulis++;
 }  else if (trecias==1){
     vienas++;
 }  else {
     duu++;
 }   
    let ketvirtas = Math.floor(Math.random() * (3))
    if (ketvirtas == 0){
     nulis++;
 }  else if (ketvirtas==1){
     vienas++;
 }  else {
     duu++;
 }   
    
  document.write(pirmas , antras , trecias , ketvirtas ) 
  document.write(` nuliuku: ${nulis} `, ` vienetuku: ${vienas} `, ` dvejetuku: ${duu} `);
}

// 2022/12/01 Uzduotys

// Pirma Uzduotis

function fixedNumber() {
pirmas = rand(0,4);
antras = rand(0,4);
dalyba = pirmas/antras

document.write(`${pirmas, antras} <br>`)
document.write(dalyba.toFixed(2))
}

// Antra uzduotis

function middleMin() {
   let pirmas = rand(0,25);
   let antras = rand(0,25);
   let trecias = rand(0,25);
  
   document.write(`${pirmas},${antras},${trecias}`)
  
   if (pirmas > Math.min(pirmas,antras,trecias) && pirmas < Math.max(pirmas,antras,trecias)) {
      document.write(' vidurinis pirmas: '+ pirmas)
   } else if (antras > Math.min(pirmas,antras,trecias) && antras < Math.max(pirmas,antras,trecias)) {
      document.write(' vidurinis antras: '+ antras)
   } else {
      document.write(' vidurinis trecias: '+ trecias)
   }
}

  
 
 // Trecia Uzduotis

function vardai() {
let vardas = 'jason';
let pavarde = 'statham';

stringas = vardas.substring(0, 1) + pavarde.substring(0, 1)
document.write(stringas)
}

// Ketvirta Uzduotis


 function randLetter() {
   result = Math.random().toString(36).substring(2, 7)
   console.log(result)
  
  a = rand(66, 90 || 97, 121)
  b = rand(66,90 || 97,121)
  c = rand(66,90 || 97, 121)
  result = String.fromCharCode(a,b,c)
  document.write(result.toLowerCase())
 }


// Penktadienio Issukis

// Pirma uzduotis

function zvakes() {
   kiekis = rand(0, 3000);
 zvake = 1;
 suma = kiekis * zvake
 if (suma >= 1000 && suma < 2000) {
    kaina = suma - (suma * 0.03);
    document.write(`kaina su 3% nuolaida: ${kaina} <br>`)
 } else if (suma >= 2000) {
    kaina = suma - (suma * 0.04);
   document.write(`kaina su 4% nuolaida: ${kaina} <br>`)
 }

 document.write(`Zvakiu kiekis: ${kiekis} Zvakiu kaina: ${suma}`)
}

// Antra uzduotis
function randFixed() {

let vienas = rand(0,100);
let du = rand(0,100);
let trys = rand(0,100);
vidurkis = (vienas + du + trys)/3
if (vidurkis < 10 || vidurkis > 90 ) {
   document.write('vidurkis mazesnis uz 10 arba didesnis uz 90')
} else {
   document.write(vidurkis.toFixed(2))
}
}


// Trecia uzduotis

function clock() {
   valandos = rand(0, 23);
minutes = rand(0, 59);
sekundes = rand(0, 59);
milisekundes = rand(0, 300)


if (valandos < 10) {
   valandos = '0' + valandos;
}
if (minutes < 10) {
   minutes = '0' + minutes;
}
if (sekundes < 10) {
   sekundes = '0' + sekundes;
}

document.write('LAIKRODIS: ' + valandos + ':' + minutes + ':' + sekundes )

minutes = minutes + Math.floor(milisekundes/60)

sekundziuLikutis = milisekundes % 60;

sekundes = sekundes + sekundziuLikutis


if (sekundes > 59) {
   minutes++;
   sekundes = sekundes % 60;
}
if (minutes > 59) {
   valandos++
   minutes =minutes % 60
}
document.write(' LAIKRODIS Su Pridetom sekundem: ' + valandos + 'h:' + minutes + 'm:' + sekundes + 's::' + milisekundes )
}

// 2020/12/05 Uzduotys

// Antra Uzduotis 

function colors() {
   i = 0;
result = '';
while (i < 3){
   a = rand(-10, 10);
  
   result+=a + ' '
   if (a < 0)
   document.write('zalias');
   if (a = 0)
   document.write('raudonas');
   if (a > 0)
   document.write('melynas');
   
   i++
}


document.write(result)
}

// Trecia Uzduotis

function removeLetter() {
   let string = '2001: A Space Odyssey'
let newStr = string.replaceAll(/[aeiuoy]/gi,'')
document.write(newStr)
}

// Ketvirta Uzduotis

function numeris() {
let i = 0;
let b = 0;
let result = '';
while (i < 300) {
   let a = rand(0,300)
  if(a > 150)
  b++
  
   result+= a + ' ';
  
   i++
}
document.write(result)
document.write(`<h3>${b}</h3>`)
}

// Penkta Uzduotis

function anyNum() {
   let i = 1
let skaiciai = '';
while (i < 3000) {
   if (i % 77 === 0)
   skaiciai+= i + ',';
   
   i++

}
document.write(skaiciai)
}

// 2022/12/06 Uzduotys

// 3 uzduotis

// a = rand(0, 1);
// if(a===1){
//    console.log('S')
// } else {
//    console.log('H')
// }


// let s = 0
// let h = 0
// let result = '';
// for(i = 0; i<10; i++){
//    a = rand(0, 1);
//    if(a===0){
//       h++
//       a = 'H'
//    }
//   if(a===1){
//       s++
//    a = 'S'
//    }
//    result += a + ' ' 
   
//        if(h > 2)
//        break 
//    // if(h===1)
//    //    break
//    // if(h===3)
//    // break
// }
// console.log(result)
// console.log(s, h)

// let y = 0
// let x = 0;
// const masyvas = [];
// for(let i=0; i<30; i++){
//    masyvas[i] = rand(5, 25)
// }
// for(let i = 0; i < masyvas.length; i++){
//    if(masyvas[i] > 10)
//    x++
//    if(masyvas[i] %2 === 0)
//    y+=masyvas[i]
// }

// console.log(x)
// console.log(y)


// masyvasDu = []
// for(let i=0; i < 30; i++){
//    masyvasDu[i] = masyvas[i] - i
// }
// console.log(masyvasDu)
// console.log(masyvas)


// const masyvas = [];
// const masyvasDu = [];
// const masyvasTrys = [];
// for(let i=0; i<30; i++){
//    masyvas[i] = rand(5, 25)
//     if(masyvas[i]%2 ===0){
//       masyvasDu.push(masyvas[i])
//     } else {
//       masyvasTrys.push(masyvas[i])
//     }
// }

// console.log(masyvasDu)
// console.log(masyvasTrys)


// for( i = 0; i < masyvasDu.length; i++) {
//    if (masyvasDu[i] > 15){
//       masyvasDu[i] = 0;
//    }
// }
// console.log(masyvasDu)
  
// let result = []
// for( i = 0; i < masyvasDu.length; i++) {
//   if(masyvasDu[i] > 10){
//     result.push(masyvasDu[i])
//   }
// }
// console.log(masyvasDu.filter(number => number > 10))
// console.log(result)

// 2022/12/08 Uzduotys

// PIRMA UZDUOTIS


// let i = 0;
// let kazys = '';
// let petras = '';
// while (true) {
//    petras = rand(10, 20);
//    petras += i;
//    kazys = rand(5, 25)
//    kazys += i;
//    if(petras >= 222 || kazys >= 222)
// break
//   i++
// }
// if(kazys > petras){
//    console.log(`${kazys}>${petras} Partija laimejo: Kazys` )
// } else {
//    console.log(`${kazys}<${petras} Partija laimejo: Petras` )
// }

// ANTRA UZDUOTIS  Penkiu viniu kalimas
i = 0;
vinis = 85;
vinis1 = 85;
vinis2 = 85;
vinis3 = 85;
vinis4 = 85;
smugiai = '';
 
while(true) {
   
   vinis -= rand(5, 20);
   smugiai++
   vinis1 -= rand(5, 20);
   smugiai++
   vinis2 -= rand(5, 20);
   smugiai++
   vinis3 -= rand(5, 20);
   smugiai++
   vinis4 -= rand(5, 20);
   smugiai++

   if(vinis <= 0)
   break
    i++
}
console.log(vinis, vinis1, vinis2, vinis3, vinis4)
console.log(smugiai)

i = 0;
vinis = 85;
vinis1 = 85;
vinis2 = 85;
vinis3 = 85;
vinis4 = 85;
smugiai = '';
papildomismugiai = '';
 
while(true) {
  
   vinis -= rand(20, 30);
   smugiai++
   nepataike = rand(0, 1)
   if (nepataike === 0){
      papildomismugiai++
   }
   vinis1 -= rand(20, 30);
   smugiai++
   nepataike = rand(0, 1)
   if (nepataike === 0){
      papildomismugiai++
   }
   vinis2 -= rand(20, 30);
   smugiai++
   nepataike = rand(0, 1)
   if (nepataike === 0){
      papildomismugiai++
   }
   vinis3 -= rand(20, 30);
   smugiai++
   nepataike = rand(0, 1)
   if (nepataike === 0){
      papildomismugiai++
   }
   vinis4 -= rand(20, 30);
   smugiai++
   nepataike = rand(0, 1)
   if (nepataike === 0){
      papildomismugiai++
   }

   if(vinis <= 0)
   break
    i++
}
console.log(vinis, vinis1, vinis2, vinis3, vinis4)
console.log('Smugiai penkiom vinim sukalti: ' +  smugiai)
console.log('Vel nepataikiau: ' + papildomismugiai)


// TRECIA UZDUOTIS



let stringas = ('');
let stringasDu = ('');
i = 0;
while( i < 50) {
   skaiciai= rand(1, 200) + ' ';
   check = stringas.includes(skaiciai)
   if(check === false) 
      stringas += skaiciai
         if(skaiciai % i === 0)
             stringasDu += skaiciai;
    
      // if( (skaiciai % i) === 0){
      //    stringasDu += skaiciai
      //   }
i++
} 


   

console.log(stringas)
console.log(stringasDu)


//2022/12/13 Uzduotys

//PIRMA UZduotis
 
function personName(name) {
  
   console.log('Labas ' + name)
  }
personName ('Elena')

//ANTRA Uzduotis


function rasytastekstas(tekstas) {
         tekstoIlgis = tekstas.length
         console.log(tekstoIlgis)
}
rasytastekstas('Lorem ipsum dolor sit')

//TRECIA Uzduotis

function person(name, lastName) {
    upName = name.substring(0,1).toUpperCase() + name.slice(1) ;
    upLastname = lastName.substring(0,1).toUpperCase() + lastName.slice(1) 
    console.log(upName + ' ' + upLastname)
}
person('marius', 'bukys')

//KETVIRTA Uzduotis

function randomNumbers(){
       random1 = rand(0,5)
       random2 = rand(0,5)
       random3 = rand(0,5)
       console.log(random1 + ',' + random2 +',' +random3)
}
randomNumbers()

function randomNum(num1,num2,num3){
      
       console.log(num1 + ',' + num2 +',' + num3)
}
randomNum(rand(0,5),rand(0,5),rand(0,5))

//PENKTA Uzduotis 

function numbers ( from,to,limit){
   masyvas = []
   if(!isNaN(from) && !isNaN(to) && !isNaN(limit)) {
      
   for(i = 0; i < limit; i++){
      skaicius = rand(from,to)
      masyvas[i] = skaicius
   }
   console.log(masyvas)
   } else {
      console.log('Suvestos reiksmes nera skaiciai')
   }
  
}
numbers(3,40,15)


//2022/12/14 
//Sugeneruokite 10 skai??i?? masyv?? pagal taisykl??: 
//Du pirmi skai??iai- atsitiktiniai nuo 5 iki 25. 
//Tre??ias, pirmo ir antro suma. Ketvirtas- antro ir tre??io suma.
// Penktas tre??io ir ketvirto suma ir t.t.

array = [];
for (i = 0; i < 2; i++){
   array[array.length] = rand(5,25)
}
for( i = 2; i < 10; i++){
   array.push(array[array.length - 1]  + array[array.length - 2])
}

console.log(array)

//Sukurkite masyv?? i?? 10 element??. Kiekvienas masyvo elementas turi b??ti 
//masyvas su atsitiktiniu kiekiu nuo 2 iki 20 element??. 
//Element?? reik??m??s atsitiktinai parinktos raid??s i?? intervalo A-Z. 
//I??r????iuokite antro lygio masyvus pagal ab??c??l?? (t.y. tuos kur su raid??m).

arrayFirst = [];


for( j = 0; j < 10; j++){
   arraySecond = [];
   for(i = 0; i < rand(2,20); i++){
      arraySecond[arraySecond.length] = String.fromCharCode(rand(66,90))
   }
   arrayFirst.push(arraySecond.sort()) 
   
}

console.log(arraySecond.sort())
console.log(arrayFirst.sort())

//Sukurkite funkcij?? kuri pakelt?? paduot?? skai??i?? n laipsniu, ir gr????int?? 
//reik??m?? (perduodami du parametrai: skai??ius ir laipsnis)
document.write('<h2>Pirma uzduotis</h2>')
function nlaipsnis (skaicius,laipsnis){
   document.write('Pakelta laipsniu: ' + skaicius ** laipsnis)
}
nlaipsnis(2,1)

//Para??ykite funkcij??, kurios argumentas b??t?? tekstas, 
//kuris yra ??terpiamas ?? h1 tag??. Rezultat?? atvaizduokite nar??ykl??je.
document.write('<h2>Antra uzduotis</h2>')
function string(text){
   
document.write('<h1>' +text+'</h1>')
}
string('tobulas pasaulis')

//Para??ykite funkcij?? su dviem argumentais, pirmas argumentas tekstas, 
//??terpiamas ?? h tag??, o antrasis tago numeris (1-6). Ra??ydami ??i?? funkcij?? 
//remkit??s pirm??jame u??davinyje para??yta funkcija.
document.write('<h2>Trecia uzduotis</h2>')
function tekstas(text,num){
   document.write('<h' + num + '>' + text + '</' + num + 'h>') 
}
tekstas('tobulas pasaulis',3)

// Apra??ykite funkcij?? kuri priimt?? vien?? parametr?? "number"
// bei patikrint?? ar duotas skai??ius yra pirminis. 

document.write('<h2>Ketvirta uzduotis</h2>')
function primeNumber(num){
   
   for( i=2; i<num; i++ ){
      if(num % i === 0){
         return false //console.log('skaicius ne pirminis')
      } 
   }
   return true //console.log('skaicius pirminis')
}
// primeNumber(15)
if(primeNumber(8677)){
   console.log( 'skaicius pirminis')
} else{
   console.log('skaicius nera pirminis')
}



//Sugeneruokite 100 element?? masyv?? kurio reik??m??s atsitiktiniai skai??iai nuo 997 iki 15991. 
//Pasinaudodami penktoje u??duotyje apra??yta funkcija masyve palikite tik pirminius skai??ius, 
//kurie yra didesni nei 5000;

masyvas = [];
masyvasDu = []
for (let i = 0; i < 100; i++){
   masyvas[i] = rand(997,15991) 
}
function primeNumber(masyvas) {
    for (let i = 2; i < masyvas; i++){
     if(masyvas % i == 0){
       return false;
     }
   }
   return true;
 }

 masyvas.forEach(
   function (masyvas) {
   let item = primeNumber(masyvas);
   if (item) {
     masyvasDu.push(masyvas);
   }
 });
 

console.log(masyvas)
console.log(masyvasDu)



//Sugeneruokite masyv?? i?? 10 element??, kurio elementai b??t?? masyvai i?? 5 element?? su reik??m??mis 
//nuo 5 iki 25.

arrayTen = [];
for(i = 0; i < 10; i++){
   arrayFive = [];
   for(j = 0; j < 5; j++){
      let element = rand(5,25)
      arrayFive[arrayFive.length] = element;
   }
   arrayTen.push(arrayFive)
}
console.log('Penktadienio uzduotys 12/16')
console.log(arrayTen)

//Suskai??iuokite kiek masyve yra element?? didesni?? u?? 10;
//Raskite did??iausio elemento reik??m??;
arrayTen = [];
num = 0;
largest = 0;
for(i = 0; i < 10; i++){
   arrayFive = [];
   for(j = 0; j < 5; j++){
      let element = rand(5,25)
      arrayFive[arrayFive.length] = element;
      if (arrayFive[j] > largest){
          largest = arrayFive[j]
      }
      if(element > 10){
         num++
      } 
   }
   arrayTen.push(arrayFive)

}
console.log('Antra Uzduotis(a , b)')
console.log(arrayTen)
console.log(num)
console.log(largest)

//Suskai??iuokite kiekvieno antro lygio masyv?? su vienodais indeksais sumas 
//(t.y. suma reik??mi?? turin??i?? indeks?? 0, 1 ir t.t.)



arrayTen = [];
a = 0;
b = 0;
c = 0;
d = 0;
e = 0;
for(i = 0; i < 10; i++){
   arrayFive = [];
   for(j = 0; j < 5; j++){
      let element = rand(5,25)
      arrayFive[arrayFive.length] = element;
   }  
arrayTen.push(arrayFive)
}
for(let x=0; x<arrayTen.length; x++){
   a += arrayTen[x][0];   
   b += arrayTen[x][1];   
   c += arrayTen[x][2];   
   d += arrayTen[x][3];   
   e += arrayTen[x][4];   
}

console.log('Antra Uzduotis (c)')
console.log(arrayTen)
console.log(a , b, c, d, e)



//Visus antro lygio masyvus ???pailginkite??? iki 7 element??

arrayTen = [];
for(i = 0; i < 10; i++){
   arrayFive = [];
   for(j = 0; j < 5; j++){
      let element = rand(5,25)
      arrayFive[arrayFive.length] = element;
   }
   for (k = 0; k < 2; k++){
      let element = rand(5,25)
      arrayFive.push(element)
   }
   arrayTen.push(arrayFive)
}

console.log(arrayTen)

//Suskai??iuokite kiekvieno i?? antro lygio masyv?? element?? sum?? atskirai ir sumas 
//panaudokite kaip reik??mes sukuriant nauj?? masyv??. T.y. pirma naujo masyvo reik??m?? 
//turi b??ti lygi ma??esnio masyvo, turin??io indeks?? 0 dideliame masyve, vis?? element?? sumai 
arrayNew = [];
arrayTen = [];

for(i = 0; i < 10; i++){
   arrayFive = [];
   for(j = 0; j < 5; j++){
      let element = rand(5,25)
      arrayFive[arrayFive.length] = element;
   }
   arrayNew.push(arrayFive[0] + arrayFive[1] + arrayFive[2] + arrayFive[3] +arrayFive[4])
   arrayTen.push(arrayFive)
   
}

console.log(arrayTen)
console.log(arrayNew)


//Sukurkite masyv?? i?? 10 element??. Masyvo reik??mes u??pildykite pagal taisykl??:
// generuokite skai??i?? nuo 0 iki 5. Ir sukurkite tokio ilgio masyv??. 
//Jeigu reik??m?? yra 0 masyvo nekurkite. Antro lygio masyvo reik??mes papildykite 
//atsitiktiniais skai??iais nuo 0 iki 10. Ten kur masyvo n??ra ??kelkite skai??i?? nuo 0 iki 10.

masyvas = [];
for( i = 0; i < 10; i++){
    masyvasDu = [];
    for( j=0; j< rand(0,5); j++){
      masyvasDu[masyvasDu.length] = rand(0,10);
   } 
    masyvas.push(masyvasDu)
   
}

masyvas.forEach(function(item, i) { 
   if (item == 0) 
   masyvas[i] = rand(0,10); });

console.log( masyvas.sort((a, b) => a - b))