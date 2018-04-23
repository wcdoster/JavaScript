const emailList = customers.map(
    (customer) => {
    return customer.contacts.email       
    }
).reduce(
    (bigArray, nextArray) => {
        return bigArray.concat(nextArray);
    }
)


// .map(
//     customer => {
//         let emails = ""
//         emails.concat(customer.contacts.email)
//         return emails
//     }
// ).concat()

console.log(emailList)