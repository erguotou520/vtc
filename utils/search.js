/**
 * search result from an array that matched
 * @param  {Array} array      array to filter
 * @param  {String} searchKey key to search
 * @return {Array}            filtered array
 */
export default function (array, searchKey) {
  return array.filter(obj => {
    return Object.keys(obj).some(key => {
      return String(obj[key]).toLowerCase().indexOf(searchKey.toLowerCase()) > -1
    })
  })
}
