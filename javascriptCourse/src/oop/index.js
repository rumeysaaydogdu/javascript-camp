class Customer{
    constructor(id,customerNumber){

    }
}

let customer = new Customer(1, "12345")

//prototyping
customer.name = "Rumeysa"  // instance a yapılan prototyping
console.log(customer.name)

Customer.bisey = "Birşey"  // class a yapılan prototyping
console.log(Customer.bisey)  // customer.bisey olmaz (customer --> instance  ,   Customer --> sınıf)