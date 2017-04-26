# VTC
Vue js tools and css stylus

## Js tools usage
```
import vtc from 'vtc'

vtc.clone(foo, true)
```
or
```
import { clone } from 'vtc'

clone(foo, true)
```

### Api
- Cache(namespace): Cache class to store data in localStorage
- CacheTool: Cache tool to create and get data
- search(array, key): filter array that matched the given search key
- is\[String|Number|RegExp|Bool|Date|Array|Object|Function\](data): test given data's type is matched
- merge(to, ...origins): vue merge, just merge the inited key
- clone(data, bool): clone data, deep clone when bool is true
- param(data): param data to http request object
- resolvePath(prefix, ...path): resolve path, like nodejs

## Stylus usage
```
# App.vue
<style lang="stylus">
@import '~vtc/stylus/flex.styl'
</style>
```
