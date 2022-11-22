let timer = 100;
let chars = ["|", "/", "-", "\\" ];
let counter = 0;
while (counter < 2) {
  for (let char of chars) {
    setTimeout(() => {
      process.stdout.write('\r' + char + '   ');
    }, timer);
    timer += 200;
  }
  counter++;
}