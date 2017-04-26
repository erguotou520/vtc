import { Cache, default as CacheTool } from './cache'
import { default as _search } from './utils/search'
import * as utils from './utils/utils'
export default Object.assign({}, {
  Cache,
  CacheTool,
  search: _search
}, utils)

export { Cache, CacheTool }

export function search (...args) {
  return search.apply(args)
}

export function merge (...args) {
  return utils.merge.apply(args)
}

export function clone (...args) {
  return utils.clone.apply(...args)
}

export function param (...args) {
  return utils.param(args)
}

export function resolvePath (...args) {
  return utils.resolvePath.apply(args)
}

export function isString (...args) {
  return utils.isString.apply(args)
}

export function isNumber (...args) {
  return utils.isNumber.apply(args)
}

export function isRegExp (...args) {
  return utils.isRegExp.apply(args)
}

export function isBool (...args) {
  return utils.isBool.apply(args)
}

export function isDate (...args) {
  return utils.isDate.apply(args)
}

export function isArray (...args) {
  return utils.isArray.apply(args)
}

export function isObject (...args) {
  return utils.isObject.apply(args)
}

export function isFunction (...args) {
  return utils.isFunction.apply(args)
}
