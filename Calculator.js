let calculations = (localStorage.getItem('calculations')) || '';
function updateCalculations (selector) {
calculations += selector;                  
document.querySelector('p').innerHTML = `${calculations}`;
localStorage.setItem('calculations', calculations);
}