const sizeRegex = /^(\d*\.?\d+)(B|KB|MB|GB)?$/gi
const exponentOf = { B: 0, KB: 1, MB: 2, GB: 3 }

class MaxsizeValidation {
  constructor(file) {
    this._file = file
  }

  isValid(maxsize) {
    if (!maxsize) return true
    if (!maxsize.match(sizeRegex)) return false

    const matches = sizeRegex.exec(maxsize)
    const size = matches[1]
    const unit = matches[2]

    return this._file.size <= this._toBytes(size, unit)
  }

  _toBytes(size, unit) {
    return Number(size) * Math.pow(1024, exponentOf[unit])
  }
}

export default MaxsizeValidation
