var maxRedigit = function(num) {
    if ((''+num).length!==3) return null
    return (''+num).split('').sort((a,b)=>b-a).join('')*1
  };