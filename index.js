// Write your solution in this file!
const employee = {
    name: "Paul",
    streetAddress: "943 Main st",
};
function updateEmployeeWithKeyAndValue(object, key, value){
    return {...employee,
        ["name"]:"Sam",
        ["streetAddress"]:"11 Broadway",
    }
}
function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value){
    obj[key]=value;
    return obj


    }
function deleteFromEmployeeByKey(obj, key ){
    obj.key = undefined
    return obj
    }

function destructivelyDeleteFromEmployeeByKey(obj, key) {
    obj[`${key}`]= undefined
    return obj
} 
