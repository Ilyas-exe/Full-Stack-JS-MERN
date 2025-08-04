function digitalRoot(n) {
  let sum = 0;
  let i = 0
  n = n.toString()
  while (true) {
    sum += Number(n[i])

    if (i == n.length - 1) {
      i = 0
      n = sum + ''
      sum = 0
      if (n.toString().length == 1) { break }
    } else {
      i++
    }
  }

  return n
}
console.log(digitalRoot(49319))