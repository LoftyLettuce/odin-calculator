//operate
function priority(operate)
{
  switch (operate)
  {
    case "+":
      return 2;
    case "-":
      return 2;
    case "x":
      return 1;
    case "/":
    return 1;
  }
}
function isNumber(x)
{
  return (!isNaN(Number(x)));
}
function isCloseBracket(char)
{
  return (char == ")");
}
const operator = {
  "+" : (a, b) => (a+b),
  "-" : (a, b) => (a-b),
  "x" : (a, b) => (a*b),
  "/" : (a, b) => (a/b),
};
function caculate(a, b, o)
{
  return (operator[o](a, b));
}
function operate(value){
  let numbers =[];
  let operators =[];
  for (let i  = 0, number = 0; i < value.length; i ++)
  {
    let lastOp = operators.length-1;
    let lastNum = numbers.length-1;
    if (isNumber(value[i]))
    {
      number = number*10 + Number(value[i]);
      if (i == value.length -1)
      {
        numbers.push(number);
      }
    }
    else if (isCloseBracket(value[i]))
    {
      for (let u = lastOp; operators[u] != "(" ; u--)
      {
        let result = caculate(numbers[lastNum--], numbers[lastNum], operators[u]);
        numbers.pop();
        numbers.pop();
        operators.pop();
        numbers.push(result);
      }
    }
    else 
    {
      console.log(number);
      numbers.push(number);
      number = 0;
      if (operators.length != 0)
      {
        if (priority(operators[lastOp]) <= priority(value[i]))
        {
          caculate(numbers[lastNum--], numbers[lastNum], operators[lastOp]);
          operators.pop();
        }
      }
      operators.push(value[i]);
    }
  }
  for (let i = operators.length-1, lastNum = numbers.length-1; i > -1; i--)
  {
    let result = caculate(numbers[lastNum--], numbers[lastNum], operators[i]);
    numbers.pop();
    numbers.pop();
    operators.pop();
    numbers.push(result);
  }
  return numbers[0];
};
alert(operate(s));