// https://github.com/BaseMax/TreeRecursiveJS

// Function
const TreeRecursive = (list, parent_id = null) => {
  const tree = list.filter(item => item.parentId === parent_id);
  tree.forEach(item => {
    item.children = TreeRecursive(list, item.id);
  });
  return tree;
};

// Examples
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
const res = TreeRecursive(testList);
console.log(JSON.stringify(res, null, 4));
