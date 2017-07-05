const normalize = (value, previousValue) => {
  if (!previousValue && value.length === 19) {
    return value
  }

  if (previousValue && value.length < previousValue.length) {
    return null
  }

  if (value.length === 2) {
    return value.slice(0, 2) + '/'
  }
  if (value.length === 5) {
    return value.slice(0, 2) + value.slice(2) + '/'
  }
  if (value.length === 10) {
    return value.slice(0, 10) + ' '
  }
  if (value.length === 13) {
    return value.slice(0, 13) + ':'
  }
  if (value.length === 16) {
    return value.slice(0, 16) + ':00'
  }
  if (value.length >= 19) {
    return previousValue
  }

  return value
}

export default normalize
