// time to live forever
const TTL_FOREVER = 0
// storage object
const ls = window.localStorage
/**
 * Cache class
 */
export class Cache {
  constructor (namspace) {
    this.namspace = `__cache_${namspace}`
    const stored = JSON.parse(ls.getItem(this.namspace))
    this.map = stored ? stored.map : {}
    this.ttl = stored ? stored.ttl : {}
  }
  /**
   * Store key-value
   * @param  {string} key         key
   * @param  {Any} value          value
   * @param  {Number} [ttl=30000] time to live
   * @return {Cache}              Cache object
   */
  put (key, value, ttl = 30000) {
    this.map[key] = value
    this.ttl[key] = ttl === TTL_FOREVER ? TTL_FOREVER : new Date().getTime() + ttl * 1000
    ls.setItem(this.namspace, JSON.stringify({ map: this.map, ttl: this.ttl }))
    return this
  }

  /**
   * Get stored value, null for not found
   * @param  {string} key key
   * @return {Any}        stored value
   */
  get (key) {
    const ttl = this.ttl[key]
    // value valid when time < ttl or no ttl
    if (ttl === TTL_FOREVER || new Date().getTime() <= ttl) {
      return this.map[key]
    }
    return null
  }

  /**
   * Clear all stored values
   * @return {Cache} Cache object
   */
  clear () {
    this.map = {}
    this.ttl = {}
    ls.removeItem(this.namspace)
    return this
  }

  /**
   * Get stored keys
   * @return {[string]} all stored keys
   */
  keys () {
    return Object.keys(this.map)
  }
}

export default {
  create (namspace) {
    return new Cache(namspace)
  },
  get (namspace, key) {
    const stored = ls.getItem(`__cache_${namspace}`)
    if (stored) {
      const json = JSON.parse(stored)
      const ttl = json.ttl[key]
      // value valid when time < ttl or no ttl
      if (ttl === TTL_FOREVER || new Date().getTime() <= ttl) {
        return json.map[key]
      }
      return null
    }
    return null
  }
}
