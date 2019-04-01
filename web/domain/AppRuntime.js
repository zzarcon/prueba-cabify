class AppRuntime {
  static isServer() {
    return typeof window === 'undefined'
  }
}

export default AppRuntime
