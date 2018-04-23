// Total profit for 2017

let totalProfit = 0
vehicles.forEach(
    vehicle => {
        totalProfit += vehicle.gross_profit
    }
)

console.log(totalProfit)

// In which month did they sell the most cars?


const monthCounter = {
    "01": 0,
    "02": 0,
    "03": 0,
    "04": 0,
    "05": 0,
    "06": 0,
    "07": 0,
    "08": 0,
    "09": 0,
    "10": 0,
    "11": 0,
    "12": 0,
}

vehicles.forEach(
    car => {
        for (month in monthCounter) {
            if (car.purchase_date.indexOf(month) === 5) {
                monthCounter[month] += 1
            }
        }
    }
)

console.log(monthCounter)

let topMonth = "01"
for (let month in monthCounter) {
    if (monthCounter[month] > monthCounter[topMonth]) {
        topMonth = month
    }
}

console.log(topMonth)

// Which salesperson sold the most cars?


salespeople = []

vehicles.map(
    vehicle => {
        if(salespeople.indexOf(vehicle.sales_agent.last_name) < 0) {
            salespeople.push(vehicle.sales_agent.last_name)
        }
        
    }
)

const numberOfSales = {}

salespeople.forEach(
    salesman => {
        numberOfSales[salesman] = 0;
    }
)

salespeople.forEach(
    salesman => {
        vehicles.forEach(
            vehicle => {
                if (salesman === vehicle.sales_agent.last_name){
                    numberOfSales[salesman] +=1
                }
            }
        )
    }
)

let topSalesman = salespeople[0]
for (let salesman in numberOfSales) {
    if (numberOfSales[salesman] > numberOfSales[topSalesman]) {
        topSalesman = salesman
    }
}

console.log(numberOfSales)

console.log(salespeople)

console.log(topSalesman)

// Which salesperson made the most profit?

const salespersonProfit = {}

salespeople.forEach(
    salesman => {
        salespersonProfit[salesman] = 0;
    }
)


salespeople.forEach(
    salesman => {
        vehicles.forEach(
            vehicle => {
                if (salesman === vehicle.sales_agent.last_name){
                    salespersonProfit[salesman] += vehicle.gross_profit
                }
            }
        ) 
    }
)

console.log(salespersonProfit)

let topProfit = salespeople[0]

for (let salesman in salespersonProfit) {
    if (salespersonProfit[salesman] > salespersonProfit[topSalesman]) {
        topProfit = salesman
    }
}

console.log(topProfit)


// Which model was the most popular?

let models = []

vehicles.forEach(
    car => {
        if (models.indexOf(car.vehicle.model) < 0) {
            models.push(car.vehicle.model)
        }
    }
)

const modelCounter = {}

models.forEach(
    model => {
        modelCounter[model] = 0
    }
)

console.log(models)


models.forEach(
    currentModel => {
        vehicles.forEach(
            car => {
                if (currentModel === car.vehicle.model) {
                    modelCounter[currentModel] += 1
                }
            }
        )
    }
)


console.log(modelCounter)

let topModel = models[0]

for (let model in modelCounter) {
    if (modelCounter[model] > modelCounter[topModel]) {
        topModel = model
    }
}

console.log(topModel)

// Which bank provided the most loans to our customers

let banks = []

vehicles.forEach(
    car => {
        if (banks.indexOf(car.credit.credit_provider) < 0) {
            banks.push(car.credit.credit_provider)
        }
    }
)

console.log(banks)

const bankCounter = {}

banks.forEach(
    bank => {
        bankCounter[bank] = 0
    }
)

banks.forEach(
    bank => {
        vehicles.forEach(
            car => {
                if (bank === car.credit.credit_provider) {
                    bankCounter[bank] += 1
                }
            }
        )
    }
)


console.log(bankCounter)

let topBank = banks[0]

for (let bank in bankCounter) {
    if (bankCounter[bank] > bankCounter[topBank]) {
        topBank = bank
    }
}

console.log(topBank)