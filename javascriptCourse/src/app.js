let student = {id:1, name:"Rumeysa"}

function save(puan = 100, ogrenci){ // default varsa onu sona yazmak önerilir yani (student, puan =10) şeklinde
    console.log(ogrenci.name + " : " + puan)
}

save(undefined, student);

//rest (geriye kalanlar, geriye kalan değiikenler)  --> C# da karşılığı params  --> Java da karşılığı varArgs 
let showProducts = function(id, ...products){
    console.log(id)
    console.log(products[0])
}

//showProducts(10,["Elma","Armut","Karpuz"])

//ctrl k c --> yorum satırı, ctrl k u --> yorum kaldır

//spread
let points = [1,2,3,4,50,4,60,14]

// console.log(Math.max(points))  --> Nan hatası verir çünkü points bir array dir.

console.log(Math.max(...points))  //spread yani ayırır  --> split gibi
console.log(..."ABC","D",..."EFG","H")

// rest ile parametreye istediğimiz kadar parametre gönderiyoruz ve array olarak tutuluyor
//spread elimizdeki bir array i ayrıştırıyor

//destructuring (parçalamak)
let populations = [10000,20000,30000]
let [small, medium, high] = populations

function someFunction([small1], number){
    console.log(small1)
}
someFunction(populations)

let category = {id:1, name:"Rumeysa"}
console.log(category.id)
console.log(category.name)
console.log(category["name"]) //üstteki veya bu şekilde

let {id, name} = category
console.log(id)
console.log(name)


