class Storage {
  setStorage(key: string, value: any, isSessionStorage = false) {
    if (isSessionStorage) {
      window.sessionStorage.setItem(key, JSON.stringify(value))
    } else {
      window.localStorage.setItem(key, JSON.stringify(value))
    }
  }
  getStorage(key: string, isSessionStorage = false) {
    let value = window.localStorage.getItem(key)
    if (isSessionStorage) {
      value = window.sessionStorage.getItem(key)
    }
    if (value) {
      return JSON.parse(value)
    }
  }
  deleteStorage(key: string, isSessionStorage = false) {
    if (isSessionStorage) {
      window.sessionStorage.removeItem(key)
    } else {
      window.localStorage.removeItem(key)
    }
  }
  clearStorage(isSessionStorage = false) {
    if (isSessionStorage) {
      window.sessionStorage.clear()
    } else {
      window.localStorage.clear()
    }
  }
}

export default new Storage()
