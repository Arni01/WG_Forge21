const resultPostorder = [];
const bodyPostorder = document.body;

const treePostorderRec = (root) => {
  if (root == null) return;

  for (let i = 0; i < root.children.length; i++) {
    treePostorderRec(root.children[i]);
  }

  resultPostorder.push(root.dataset.value);

  return resultPostorder;
};

console.log('treePostorderRec: ', treePostorderRec(bodyPostorder.children[0]));

const treePostorderNotRec = (root) => {
  let resultPostorder = [];
  let stack = [...root];

  while (stack.length) {
    const item = stack.pop();

    resultPostorder.push(item.dataset.value);

    for (let i = 0; i < item.children.length; i++) {
      stack.push(item.children[i]);
    }
  }

  return resultPostorder.reverse();
};

console.log(
  'treePostorderNotRec: ',
  treePostorderNotRec(bodyPostorder.children)
);
