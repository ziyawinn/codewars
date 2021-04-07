function mineColor(line, number) {
    const dict = {a:1,b:2,c:3,d:4,e:5,f:6,g:7,h:8}
    return dict[line] % 2 === number % 2 ? 'black':'white';
   }