for (let i = 0; i < 4; i++)
{
  let u = document.querySelector('.numbers');
  let row = u.appendChild(document.createElement('div'));
  row.className = "row";
  for (let u = 0; u < 4; u++)
  {
    let key = row.appendChild(document.createElement('div'));
    key.className = "key";
  }
}