/*const n = parseFloat(prompt('Введіть число', ''));

function formulaBine (n) {
    const phi = 1.618;
    const fN = Math.pow(phi,n)/Math.sqrt(5);
    if (n>=1) {
    return Math.round(fN);
    }
}
document.write(formulaBine(n));*/



/*const n = parseFloat(prompt('Введіть число', ''));

function fibonacci (n) {
    if (n<2) {
        return n;
    } 
    else {
        return (fibonacci(n-1) + fibonacci(n-2));
    }
}
document.write(fibonacci(n-1) + fibonacci(n-2));*/




const n = parseFloat(prompt('Введіть число', ''));

function fibonacci(n) {
    var a = 1,
     b = 1;
  for (let i = 3; i <= n; i++) {
    const c = a + b;
    a = b;
    b = c;
  }
  return b;
}
document.write(fibonacci(n));



