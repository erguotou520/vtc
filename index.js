import { Cache, default as CacheTool } from './cache'
import search from './utils/search'
import * as utils from './utils/utils'

module.exports = Object.assign({
  Cache,
  CacheTool,
  search
}, utils)
