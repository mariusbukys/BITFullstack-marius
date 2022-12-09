console.log('veikia isorinis')



  function rand(min, max) {
     min = Math.ceil(min);
     max = Math.floor(max);return Math.floor(Math.random() * (max - min + 1) + min);}
    
//    console.log(randomNumber(0, 2));

// Pirma uzduotis

// const vardas = ("jacky");
// const pavarde = ("chanas");
// if (vardas.length < pavarde.length) {
//     console.log(pavarde);
// } else {
//     console.log(vardas);
// }

// Antra uzduotis

// const vardas = ('marius');
// const pavarde = ('bukys');
// const gimimoMetai = (1979);
// const metai = (2022);

// amzius = metai - gimimoMetai;
// console.log('As esu ' + vardas +' ' + pavarde +'.' + ' Man yra ' + amzius + ' metai(u)');

// Trecia uzduotis

// const vardas = ("jacky");
// const pavarde = ("chanas");
// let random = vardas.slice(-3)+pavarde.slice(-3)
// const random = vardas[2]+ vardas[3] + vardas[4] + pavarde [3] + pavarde[4] + pavarde[5]
// console.log(random);

// Ketvirta uzduotis

// const fairyTale = ('Once upon a time in Holywood');
// console.log(fairyTale.replaceAll('o', '*').replaceAll('O', '*'));

// Penkta uzduotis

//   let nulis = 0
//   let vienas = 0
//   let duu = 0 

//    let pirmas = Math.floor(Math.random() * (3))
  
//     if (pirmas == 0){
//         nulis++;
//     }  else if (pirmas==1){
//         vienas++;
//     }  else {
//         duu++;
//     }        
            

//    let antras = Math.floor(Math.random() * (3))
//    if (antras == 0){
//     nulis++;
// }  else if (antras==1){
//     vienas++;
// }  else {
//     duu++;
// }        
//    let trecias = Math.floor(Math.random() * (3))
//    if (trecias == 0){
//     nulis++;
// }  else if (trecias==1){
//     vienas++;
// }  else {
//     duu++;
// }   
//    let ketvirtas = Math.floor(Math.random() * (3))
//    if (ketvirtas == 0){
//     nulis++;
// }  else if (ketvirtas==1){
//     vienas++;
// }  else {
//     duu++;
// }   
   
//  console.log(pirmas,antras,trecias,ketvirtas)  
// console.log('nuliuku:' + nulis, 'vienetuku:' + vienas, 'dvejetuku:' + duu);

// 2022/12/01 uzduotys

// Pirma Uzduotis

// pirmas = randomNumber(0,4);
// antras = randomNumber(0,4);
// dalyba = pirmas/antras

// console.log(pirmas, antras)
// console.log(dalyba.toFixed(2))

// Antra uzduotis

//  let pirmas = randomNumber(0,25);
//  let antras = randomNumber(0,25);
//  let trecias = randomNumber(0,25);

//  console.log(pirmas,antras,trecias)

//  if (pirmas > Math.min(pirmas,antras,trecias) && pirmas < Math.max(pirmas,antras,trecias)) {
//      console.log('vidurinis pirmas:'+ pirmas)
//  } else if (antras > Math.min(pirmas,antras,trecias) && antras < Math.max(pirmas,antras,trecias)) {
//     console.log('vidurinis antras:'+ antras)
//  } else {
//     console.log('vidurinis trecias:'+ trecias)
//  }
  
 
 // Trecia Uzduotis

// let vardas = 'jason';
// let pavarde = 'statham';

// stringas = vardas.substring(0, 1) + pavarde.substring(0, 1)
// console.log(stringas)


// Ketvirta Uzduotis


//   result = Math.random().toString(36).substring(2, 7)
//  console.log(result)

// a = randomNumber(66, 90 || 97, 121)
// b = randomNumber(66,90 || 97,121)
// c = randomNumber(66,90 || 97, 121)
// result = String.fromCharCode(a,b,c)
// console.log(result.toLowerCase())

// Penktadienio Issukis

// Pirma uzduotis

// kiekis = randomNumber(0, 3000);
//  zvake = 1;
//  suma = kiekis * zvake
//  if (suma >= 1000 && suma < 2000) {
//     kaina = suma - (suma * 0.03);
//    console.log('kaina su 3% nuolaida: ' + kaina)
//  } else if (suma >= 2000) {
//     kaina = suma - (suma * 0.04);
//    console.log('kaina su 4% nuolaida: ' + kaina)
//  }

//  console.log('zvakiu kiekis: ' + kiekis + ' zvaikiu kaina: ' + suma)

// Antra uzduotis

// let vienas = randomNumber(0,100);
// let du = randomNumber(0,100);
// let trys = randomNumber(0,100);
// vidurkis = (vienas + du + trys)/3
// if (vidurkis < 10 || vidurkis > 90 ) {
//    console.log('vidurkis mazesnis uz 10 arba didesnis uz 90')
// } else {
//    console.log(vidurkis.toFixed(2))
// }


// Trecia uzduotis

// valandos = randomNumber(0, 23);
// minutes = randomNumber(0, 59);
// sekundes = randomNumber(0, 59);
// milisekundes = randomNumber(0, 300)


// if (valandos < 10) {
//    valandos = '0' + valandos;
// }
// if (minutes < 10) {
//    minutes = '0' + minutes;
// }
// if (sekundes < 10) {
//    sekundes = '0' + sekundes;
// }

// console.log('LAIKRODIS: ' + valandos + ':' + minutes + ':' + sekundes )

// minutes = minutes + Math.floor(milisekundes/60)

// sekundziuLikutis = milisekundes % 60;

// sekundes = sekundes + sekundziuLikutis


// if (sekundes > 59) {
//    minutes++;
//    sekundes = sekundes % 60;
// }
// if (minutes > 59) {
//    valandos++
//    minutes =minutes % 60
// }
// console.log('LAIKRODIS Su Pridetom sekundem: ' + valandos + 'h:' + minutes + 'm:' + sekundes + 's::' + milisekundes )

// 2020/12/05 Uzduotys

// Antra Uzduotis
// i = 0;
// result = '';
// while (i < 3){
//    a = rand(-10, 10);
  
//    result+=a + ' '
//    if (a < 0)
//    console.log('zalias');
//    if (a = 0)
//    console.log('raudonas');
//    if (a > 0)
//    console.log('melynas');
   
//    i++
// }


// console.log(result)
// Trecia Uzduotis

// let string = '2001: A Space Odyssey'
// let newStr = string.replaceAll(/[aeiuoy]/gi,'')
// console.log(newStr)

// Ketvirta Uzduotis

// let i = 0
// let b = 0
// let result = '';
// while (i < 300) {
//    a = rand(0,300)
//   if(a > 150)
//   b++
  
//    result+= a + ' ',
  
//    i++
// }


// console.log(result)
// console.log(b)

// Penkta Uzduotis

// let i = 1
// let skaiciai = '';
// while (i < 3000) {
//    if (i % 77 === 0)
//    skaiciai+= i + ',';
   
//    i++

// }
// console.log(skaiciai)

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
// i = 0;
// vinis = 85;
// vinis1 = 85;
// vinis2 = 85;
// vinis3 = 85;
// vinis4 = 85;
// smugiai = '';
 
// while(true) {
   
//    vinis -= rand(5, 20);
//    smugiai++
//    vinis1 -= rand(5, 20);
//    smugiai++
//    vinis2 -= rand(5, 20);
//    smugiai++
//    vinis3 -= rand(5, 20);
//    smugiai++
//    vinis4 -= rand(5, 20);
//    smugiai++

//    if(vinis <= 0)
//    break
//     i++
// }
// console.log(vinis, vinis1, vinis2, vinis3, vinis4)
// console.log(smugiai)

// i = 0;
// vinis = 85;
// vinis1 = 85;
// vinis2 = 85;
// vinis3 = 85;
// vinis4 = 85;
// smugiai = '';
// papildomismugiai = '';
 
// while(true) {
  
//    vinis -= rand(20, 30);
//    smugiai++
//    nepataike = rand(0, 1)
//    if (nepataike === 0){
//       papildomismugiai++
//    }
//    vinis1 -= rand(20, 30);
//    smugiai++
//    nepataike = rand(0, 1)
//    if (nepataike === 0){
//       papildomismugiai++
//    }
//    vinis2 -= rand(20, 30);
//    smugiai++
//    nepataike = rand(0, 1)
//    if (nepataike === 0){
//       papildomismugiai++
//    }
//    vinis3 -= rand(20, 30);
//    smugiai++
//    nepataike = rand(0, 1)
//    if (nepataike === 0){
//       papildomismugiai++
//    }
//    vinis4 -= rand(20, 30);
//    smugiai++
//    nepataike = rand(0, 1)
//    if (nepataike === 0){
//       papildomismugiai++
//    }

//    if(vinis <= 0)
//    break
//     i++
// }
// console.log(vinis, vinis1, vinis2, vinis3, vinis4)
// console.log('Smugiai penkiom vinim sukalti: ' +  smugiai)
// console.log('Vel nepataikiau: ' + papildomismugiai)


// TRECIA UZDUOTIS



let stringas = '';
let stringasDu = '';
for (i = 0; i<50; i++ ) {
   stringas += rand(1, 200) + ' '

for (i = 0; i < stringas.length; i++) {
    if(stringas[i > 50])
   stringasDu += stringas[i]
} 
} 
   

console.log(stringas)
console.log(stringasDu)