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
//input
let input = document.querySelector(".expressions");
let keyboard = document.querySelector(".keyboard");
input.focus();
keyboard.addEventListener('click', (event) => 
{
  if (event.target.className == 'key')
  {
    if (event.target.textContent != "del")
    {
      input.value += event.target.textContent;   
    }
    else
    {
      input.value = input.value.slice(0, input.value.length-1);
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