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
    let a =1;
    let b = 1;
    let c;
    for (let i = 3; i <= n; i++) {
    c = a + b;
    a = b;
    b = c;
  }
  return b;
}
document.write(fibonacci(n));


