var a = require('./js/a');
a();
console.log('hello world');
require('./css/base.css');
require('./css/theme.less');
document.querySelector('#container').innerHTML = '<div><p>hello world</p></div>';