const mmConversionTable = {
  mm: 1,
  m: 1e3,
  cm: 10,
  km: 1e6,
}


// typeof 変数 で変数・値ら型情報を抽出
// keyof で抽出した型情報のうち、プロパティ名を抜き出して新たな型にする
function convertUnits(value: number, unit: keyof typeof mmConversionTable) {
  const mmValue = value * mmConversionTable[unit]
  return {
    mm: mmValue,
    m: mmValue / 1e3,
    km: mmValue / 1e6
  }
}

console.log(convertUnits(300000, "cm"))