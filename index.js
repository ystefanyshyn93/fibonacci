const n = parseFloat(prompt('Введіть число', ''));

function formulaBine (n) {
    const phi = 1.618;
    const fN = Math.pow(phi,n)/Math.sqrt(5);
    if (n>=1) {
    return Math.round(fN);
    }
}
document.write(formulaBine (n));