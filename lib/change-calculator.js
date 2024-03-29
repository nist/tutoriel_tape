module.exports = function calculateChange (totalPayable, cashPaid) {
  const coins = [5000, 2000, 1000, 500, 200, 100, 50, 20, 10, 5, 2, 1]
  const change = []
  const length = coins.length
  let remaining = cashPaid - totalPayable

  for (let i = 0; i < length; i++) {
    const coin = coins[i]

    if (remaining / coin >= 1) {
      const times = Math.floor(remaining / coin)

      for (let j = 0; j < times; j++) {
        change.push(coin)
        remaining = remaining - coin
      }
    }
  }
  return change
}
