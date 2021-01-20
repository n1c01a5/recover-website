export function checkNumber (value) {
  if (value === '') {
    return true
  } else {
    if (value.match(/^[0-9]+$/)) {
      return false
    } else {
      return true
    }
  }
}

export function checkPhone (value) {
  if (value !== '') {
    if (value.match(/^[0-9 ()+-]+$/)) {
      if (value.length <= 14 && value.length >= 7) {
        return false
      } else {
        return true
      }
    } else {
      return true
    }
  } else {
    return false
  }
}

export function isValidEmail (value) {
  if (value.length !== '') {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return re.test(String(value).toLowerCase())
  } else {
    return false
  }
}

export function checkSpecialChar (value) {
  if (value === '') {
    return true
  } else {
    if (value.match(/^[a-zA-Z\s]*$/)) {
      return false
    } else {
      return true
    }
  }
}
