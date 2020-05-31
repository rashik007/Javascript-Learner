'use strict';


var cat = {
    name: {first: 'luff', last: 'leboeoudf'},
    color: 'white'
}

Object.defineProperty(cat, 'name', {writable: false})
cat.name.first = 'scratchy'
display(Object.getOwnPropertyDescriptor(cat, 'name'))
display(cat.name)