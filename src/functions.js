function addToCart(productName="Elma",quantity){
    console.log("Sepete Eklendi :" + productName + "Adet :"+ quantity)
}

//addToCart()
addToCart("Yumurta",10)
//addToCart(15)

let sayHello=()=>{
    console.log("Hello World")
}
sayHello()

let sayHello2 = function(){
    console.log("Hello World 2")
}
sayHello2()


//function addToCart2(productName,quantity=1,unitPrice) {
    
//}

// addToCart2("Elma",5,10)
// addToCart2("Armut",2,20)
// addToCart2("Limon",3,15)
let product1={productName:"Elma", unitPrice:10, quantity:5}

function addToCart3(product) {
    console.log("Ürün :" + product.productName + "Adet :" 
    + product.quantity + "Fiyat :" + product.unitPrice)
} 

addToCart3(product1)

let product2={productName:"Elma", unitPrice:10, quantity:5}
let product3={productName:"Elma", unitPrice:10, quantity:5}
product2=product3
product2.productName="KARPUZ"
console.log(product3.productName)