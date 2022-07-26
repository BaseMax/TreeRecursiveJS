/*
 * Name: Tree Recursive (Iterative) JavaScript
 * Description: Tree Recursive (Iterative) JavaScript; Convert a list of objects to a tree structure.
 * Date: 2022/07/26
 * Author: Max Base
 * Repository: https://github.com/BaseMax/TreeRecursiveJS
 */

// Function
const TreeRecursive1 = (list, parent_id = null) => {
  const tree = list.filter(item => item.parentId === parent_id);
  tree.forEach(item => {
    item.children = TreeRecursive1(list, item.id);
  });
  return tree;
};

const TreeRecursive2 = (list, parent_id = null) => {
  return list.filter(item => item.parentId === parent_id).map(item => {item.children = TreeRecursive2(list, item.id); return item;});
};

const TreeRecursive3 = (list, parent_id = null) => {
  return list.reduce((acc, item) => {
    if (item.parentId === parent_id) {
      item.children = TreeRecursive3(list, item.id);
      acc.push(item);
    }
    return acc;
  }, []);
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

const res1 = TreeRecursive1(testList);
console.log(JSON.stringify(res1, null, 4));

const res2 = TreeRecursive1(testList);
console.log(JSON.stringify(res2, null, 4));

const res3 = TreeRecursive1(testList);
console.log(JSON.stringify(res3, null, 4));
