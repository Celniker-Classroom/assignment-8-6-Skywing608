let count = 0







// ----- Functions to implement -----

// 1) myFunc(): persistent counter
function myFunc(){
  count ++;
  return count;
}
counter()
// 2) getRandomNum(max): 1..max int or 0 if invalid
function getRandomNum(max){
  Math.random()
  return Math.ceil(Math.random() * (max)) 
}
// 3) myAdder(x, y): numeric sum
function myAdder(x, y){
  var value1 = parseInt(x);
  var value2 = parseInt(y);
  var sum = value1 + value2;
  return sum;
}
// 4) distance(x1, y1, x2, y2): Euclidean distance
function distance(x1, y1, x2, y2){
  var valuex1 = parseInt(x1);
  var valuex2 = parseInt(x2);
  var valuey1 = parseInt(y1);
  var valuey2 = parseInt(y2);
  return Math.sqrt((valuex2 - valuex1) ** 2 + (valuey2 - valuey1) ** 2);
}
// 5) quadratic(a, b, c): roots of ax^2 + bx + c = 0
function quadratic(a, b, c){
  valuea = parseInt(a);
  valueb = parseInt(b);
  valuec = parseInt(c);
  let disc = valueb * valueb - 4 * valuea * valuec;
    if (disc > 0) {
        let r1 = (-valueb + Math.sqrt(disc)) / (2 * valuea);
        let r2 = (-valueb - Math.sqrt(disc)) / (2 * valuea);
        return [r1, r2];
    } else if (disc === 0) {
        return [-valueb / (2 * valuea)];
    } else {
        let real = (-valueb / (2 * valuea));
        let imag = (Math.sqrt(-disc) / (2 * valuea));
        return [real + "+" + imag + "i", real + "-" + imag + "i"];
    }
}

// ----- Helpers -----
function $(id) { return document.getElementById(id); }
function setText(id, value) { $(id).textContent = String(value); }

// ----- Click Handlers (wire UI -> functions -> DOM) -----

function onMyFuncClick() {
  const val = myFunc();
  setText('outMyFunc', val);
}

function onRandomClick() {
  const max = $('maxRand').value;
  const val = getRandomNum(max);
  setText('outRandom', val);
}

function onAdderClick() {
  const x = $('addX').value;
  const y = $('addY').value;
  const sum = myAdder(x, y);
  setText('outAdder', sum);
}

function onDistanceClick() {
  const x1 = $('x1').value, y1 = $('y1').value;
  const x2 = $('x2').value, y2 = $('y2').value;
  const d = distance(x1, y1, x2, y2);
  setText('outDistance', d);
}

function onQuadraticClick() {
  const a = $('qa').value, b = $('qb').value, c = $('qc').value;
  const roots = quadratic(a, b, c);
  setText('outQuadratic', Array.isArray(roots) ? roots.join(', ') : roots);
}
