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
for (let i = 0, operators = ["=", "x", "/", "+", "-"], numberButton = 2; i < 3; i++)
{
  let u = document.querySelector('.operators');
  let row = u.appendChild(document.createElement('div'));
  row.className = "row";
  if (i == 2)
  {
    numberButton--;
  }
  for (let u = 0; u < numberButton; u++)
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
keyboard.addEventListener('click', (event) => 
{
  if (event.target.className == 'key')
  {
    input.value += event.target.textContent;
  }
}
);