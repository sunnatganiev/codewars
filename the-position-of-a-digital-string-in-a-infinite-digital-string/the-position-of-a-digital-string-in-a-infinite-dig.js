// The position of a digital string in a infinite digital string
// https://www.codewars.com/kata/the-position-of-a-digital-string-in-a-infinite-digital-string/train/javascript

function findPosition(num) {
  let next = (function() {
    let n = 1;
    let pos = 0;
    let buf = [];
    return (len, cs) => {
      let cl = buf.join('').length;
      while (cl < len + cs) {
        let sn = (n++)+'';
        buf.push(sn);
        cl += sn.length;
      }
      let res = buf.join('');
      buf = [res.substr(cs)];
      return [res, (pos += cs) - cs];
    };
  }());
  
  while (1) {
    let n = next(num.length, 1e4);
    // console.log(n[0]);
    let idx = n[0].indexOf(num);
    if (0 <= idx) {
      return n[1] + idx;
    }
  }
}


console.log(findPosition('1000000071'));
// console.log(findPosition('1001'));