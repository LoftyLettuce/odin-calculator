//button for numbers
for (let i = 0, number = 9, lastRow = ['.', 0, 'x']; i < 4; i++)
{
  let u = document.querySelector('.numbers');
  let row = u.appendChild(document.createElement('div'));
  row.className = "row";
  for (let u = 0; u < 3; u++)
  {
    let key = row.appendChild(document.createElement('button'));
    key.className = "key";
    if (i < 3)
    {
      key.textContent = number--;
    }
    else
    {
      key.textContent = lastRow[lastRow.length - 1];
      lastRow.pop();
    }
  }
}
//buttons for operators
for (let i = 0, operators = ["=", "del", "x", "/", "+", "-"]; i < 3; i++)
{
  let u = document.querySelector('.operators');
  let row = u.appendChild(document.createElement('div'));
  row.className = "row";
  for (let u = 0; u < 2; u++)
  {
    let key = row.appendChild(document.createElement('button'));
    key.className = "key";
    key.textContent = operators[operators.length - 1];
    operators.pop();
  }
}
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
function isBracket(char)
{
  return (char == ")" || char == "(");
}
const operator = {
  "+" : (a, b) => (a+b),
  "-" : (a, b) => (a-b),
  "x" : (a, b) => (a*b),
  "/" : (a, b) => (a/b),
};
function lastIndex(target)
{
  return target.length-1;
}
function caculate(a, b, o)
{
  console.log(`${a} ${b} ${o}`);
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
      if (i == lastIndex(value))
      {
        numbers.push(number);
      }
    }
    else if (isBracket(value[i]))
    {
      if (value[i] == ")")
      {
        numbers.push(number);
        lastNum++;
        for (let u = lastOp; operators[u] != "(" ; u--)
        {
          console.log(numbers);
          let result = caculate(numbers[lastNum--], numbers[lastNum], operators[u]);
          numbers.pop();
          numbers.pop();
          operators.pop();
          numbers.push(result);
        }
        operators.pop();
      }
      else
      {
        operators.push(value[i]);
      }
    }
    else 
    {
      console.log(number);
      numbers.push(number);
      lastNum++;
      number = 0;
      if (operators.length != 0)
      {
        if (priority(operators[lastOp]) <= priority(value[i]))
        {
          let result = caculate(numbers[lastNum--], numbers[lastNum], operators[lastOp]);
          operators.pop();
          numbers.pop();
          numbers.pop();
          numbers.push(result);
        }
      }
      operators.push(value[i]);
    }
  }
  for (let i = operators.length-1, lastNum = numbers.length-1; i > -1; i--)
  {
    console.log(numbers);
    let result = caculate(numbers[lastNum--], numbers[lastNum], operators[i]);
    numbers.pop();
    numbers.pop();
    operators.pop();
    numbers.push(result);
  }
  return numbers[0];
};
//output
function display(value)
{
  let result = document.querySelector(".result");
  result.textContent = operate(value);
}
//input
let input = document.querySelector(".expressions");
let keyboard = document.querySelector(".keyboard");
//input reset
function resetInput()
{
  input.value = "";
  input.focus();
}
keyboard.addEventListener('click', (event) => 
{
  if (event.target.className == 'key')
  {
    if (event.target.textContent == "del")
    {
      input.value = input.value.slice(0, input.value.length-1);
    }
    else if (event.target.textContent == "=")
    {
      display(input.value);
      resetInput();
    }
    else
    {
      input.value += event.target.textContent;   
    }
  }
  input.focus();
});
input.addEventListener('keydown', (event) =>
{
  if (event.key.charCodeAt(0) > 64 && event.key != 'Backspace')
  {
    event.preventDefault();
  }
  else if (event.key.charCodeAt(0) == 42)
  {
    event.preventDefault();
    input.value+='x';
  }
})
