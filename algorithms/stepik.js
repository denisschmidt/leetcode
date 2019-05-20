/**
 * Рекурсия
 *
 * recFibbo(100) ~ 1.77 * 10 ^21
 *
 * С частотой 1GHz будет работать очень долго несколько десятков тысяч лет
 *
 * */
const recFibbo = n => {
  if (n === 0 || n === 1) return n;
  return recFibbo(n - 1) + recFibbo(n - 2);
};

function stepikFibbo() {
  process.stdin.setEncoding('utf8');
  let n = 0;

  process.stdin.on('data', function(data) {
    if (data !== null) {
      n = parseInt(data);
    }
    const arr = new Array(0, 1);
    if (n >= 2) {
      for (var i = 2; i <= n; i++) {
        arr[i] = Math.abs(arr[i - 1] + arr[i - 2]);
      }
    }
    process.stdout.write(arr[n].toString());
    process.exit();
  });
}

function stepikFibbo2() {
  process.stdin.setEncoding('utf8');
  let n = 0;

  process.stdin.on('data', function(data) {
    if (data !== null) {
      n = parseInt(data);
    }
    const arr = new Array(0, 1, 1, 2, 3, 5, 8);
    if (n >= 7) {
      for (var i = 2; i <= n; i++) {
        arr[i] = (arr[i - 1] + arr[i - 2]) % 10;
      }
    }
    process.stdout.write(arr[n].toString());
    process.exit();
  });
}

function stepikFibbo3() {
  process.stdin.setEncoding('utf8');
  let buffer = [];
  let content = '';

  process.stdin.on('data', function(data) {
    content += data;
    buffer = content.split(' ');

    if (buffer.length === 3) {
      const arr = new Array(0, 1);
      let x = buffer[0];
      let y = buffer[1];
      let k = 0;

      for (let i = 2; i < y * 6; i++) {
        arr[i] = (arr[i - 1] + arr[i - 2]) % y;
        k++;
        if (arr[i] === 1 && arr[i - 1] === 0) {
          break;
        }
      }

      let period = arr.length - 2; // находим период Пизано
      let index = x % period;
      process.stdout.write(arr[index].toString());
      process.exit();
    }
  });
}

stepikFibbo3();
