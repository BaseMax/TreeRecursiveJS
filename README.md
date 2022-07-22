# Tree Recursive JS

## Using

```sh
$ node TreeRecursive.js
```

## Example

**Input:**

```js
const testList = [ 
  { id: 1, name: "base", parentId: null }, 
  { id: 2, name: "erfan", parentId: 1 }, 
  { id: 3, name: "max", parentId: 1 }, 
  { id: 4, name: "bagher", parentId: 2 }, 
  { id: 5, name: "mamad", parentId: 3 }, 
  { id: 6, name: "mojtaba", parentId: 8 }, 
  { id: 7, name: "mari", parentId: 4 }, 
  { id: 8, name: "sara", parentId: null }, 
];
```

**Output:**

```js
const newList = [ 
  { 
    id: 1, 
    name: "base", 
    childrens: [ 
      { 
        id: 2, 
        name: "erfan", 
        childrens: [ 
          { 
            id: 4, 
            name: "bagher", 
            childrens: [{ id: 7, name: "mari", childrens: [] }], 
          }, 
        ], 
      }, 
      { 
        id: 3, 
        name: "max", 
        childrens: [{ id: 5, name: "mamad", childrens: [] }], 
      }, 
    ], 
  }, 
  { 
    id: 8, 
    name: "sara", 
    childrens: [{ id: 6, name: "mojtaba", childrens: [] }], 
  }, 
];
```
