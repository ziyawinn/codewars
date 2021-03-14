function stackHeight2d(layers) {
    return !layers ? 0 : ((layers - 1) * Math.sqrt(3) / 2 + 1)
  }