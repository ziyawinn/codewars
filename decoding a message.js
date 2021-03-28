function decode(code,list='abcdefghijklmnopqrstuvwxyz') {
    return code.toLowerCase()
               .replace(/./gi, a => list.indexOf(a) > -1 ? list[list.length - list.indexOf(a) - 1] : a)
  }