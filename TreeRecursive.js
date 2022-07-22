// https://github.com/BaseMax/TreeRecursiveJS

const testList = [ 
  { id: 1, name: "base", parentId: 1 },
  { id: 2, name: "erfan", parentId: null },
  { id: 3, name: "max", parentId: 1 },
  { id: 4, name: "erfan", parentId: 2 },
  { id: 5, name: "mamad", parentId: 3 },
  { id: 7, name: "erfan", parentId: 4 },
  { id: 8, name: "erfan", parentId: null },
  { id: 6, name: "mojtaba", parentId: 8 },
];

const TreeRecursive = (list) => {
  const tree = {};
  return tree;
};

const res = TreeRecursive(testList);
console.log(res);
/*
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
*/
