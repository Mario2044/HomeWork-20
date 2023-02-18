const setMath = (operator) => {
    return (...numbers) => {
      const result = numbers.reduce((acc, cur) => {
        return operator === '+' ? acc + cur :
               operator === '-' ? acc - cur :
               operator === '*' ? acc * cur :
               operator === '/' ? acc / cur :
               acc;
      });
      const operationString = numbers.join(` ${operator} `);
      return `${operationString} = ${result}`;
    }
};
  
const setNumbers = (...numbers) => {
    return (operator) => {
      const result = numbers.reduce((acc, cur) => {
        return operator === '+' ? acc + cur :
               operator === '-' ? acc - cur :
               operator === '*' ? acc * cur :
               operator === '/' ? acc / cur :
               acc;
      });
      const operationString = numbers.join(` ${operator} `);
      return `${operationString} = ${result}`;
    }
};
  
const funcWithMath = setMath('-');
console.log(funcWithMath(10, 2, 3)); 
console.log(funcWithMath(3, 1)); 

const whatDo = setNumbers(10, 2, 3);
console.log(whatDo('-')); 
console.log(whatDo('+')); 

const whatDo_1 = setNumbers(3, 1);
console.log(whatDo_1('-'));
console.log(whatDo_1('+')); 