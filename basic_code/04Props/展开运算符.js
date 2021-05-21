function sum(...numbers){
  let result = 0;
  numbers.forEach((item) => {
    result += item;
  })
  return result;
}


const result1 = sum(1, 2, 3, 4, 5);
const result2 = sum(1, 2);
console.log(result1, result2);

const obj = {name: 'yxp', age: 18};
const obj2 = {...obj};
obj.name = 'hahahh';
console.log(obj2,obj);