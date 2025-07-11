// Precisava de uma função em JS no trabalho que puxasse a data de ontem para puxar relatórios

function yesterday() {
  const date = new Date();

  let dd = date.getDate() - 1;
  let MM = date.getMonth().toString();
  let yy = date.getFullYear().toString();
  dd = dd.toString();

  const fullDate = `${dd.padStart(2, "0")}${MM.padStart(2, "0")}${yy}`;
  return fullDate;
}

console.log(yesterday());
