// Write your solution in this file!
const employee = {
    name: "G",
    streetAddress: "H",
}
function updateEmployeeWithKeyAndValue(employee, key, value){
    let updateEmployeeWithKeyAndValue = {...employee}
    updateEmployeeWithKeyAndValue[key] = value
return updateEmployeeWithKeyAndValue
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key] = value
return employee  
}

function deleteFromEmployeeByKey(employee, key, value){
    let deleteFromEmployeeByKey = {...employee}
    deleteFromEmployeeByKey[key] = value
return deleteFromEmployeeByKey    
}

function destructivelyDeleteFromEmployeeByKey(employee, key, value){
    delete employee[key] 
    return employee
}

