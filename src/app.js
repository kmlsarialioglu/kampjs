console.log("Merhaba uzaylı. Biz dostuz...")

var dolarDun=9.2
var dolarBugun=9.3

//console.log(dolarDun)


let konutKredileri=["Standart Konut kredisi","Kamu Konut Kredisi","Özel Konut Kredisi"]
for (let index = 0; index < konutKredileri.length; index++) {
    console.log("<li>" +konutKredileri[index]+"</li>") 
    
}
let sayi1=10
sayi1="kemal"
let student={id:1,name:"kemal"}

function save(ogrenci,puan=10) {
    console.log(ogrenci.name + " : "+ puan)
}
//save(student,100);

let showProducts=function(id,...products){
    console.log(id)
    console.log(products)
}

//console.log(typeof showProducts) Rest Parametresi verileri array olarak tutmamızı sağlar
//showProducts(10,"Elma","Armut","Ayva")
//spread
let points=[1,2,3,4,5,6,50,13,75]
console.log(...points)
console.log(Math.max(...points))
console.log(..."ABC","D",..."EFG","H")//Spread parametresi array içindeki verileri ayırmaya yarıyor

//Destructuring 
let populations=[10000,20000,30000,[40000,100000]]
let [small,medium,high,[veryHigh,maximum]]=populations
console.log(small)
console.log(medium)
console.log(high)
console.log(veryHigh)
console.log(maximum)

function someFunction([small1],number){
    console.log(small1)
}
someFunction(populations)