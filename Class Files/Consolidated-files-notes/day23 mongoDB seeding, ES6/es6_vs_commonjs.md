
CommonJS (required, module.export) = launch 2009 -> sync, Node-only

ESModules, ES6 (import, export) = became official ECMAScript 2015; works in browser, and node >= 13
    - "type": "module" or .js -> .mjs

## Syntax Cheat Sheet
|Feature | CommonJS | ESModules |
| ------ | -------- | --------- |
| Default export | module.exports = myFn | export default MyFn |
| named export | - (caveat: export as object) | export const sum = ... |
| import default | const MyFn = require('./lib') | import MyFn from './lib.js'
| import named | const { sum } = require('./math') | import { sum } from './math.js' |
| dynamic import | require() (always sync) | await import('./heavy.js') |
| file extension in Node | .js | .mjs or .js + "type": "module" in package.json |


