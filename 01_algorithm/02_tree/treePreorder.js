const resultPreopder = [];
const bodyPreorder = document.body;

const treePreorderRec = (root) => {
  for (let i = 0; i < root.children.length; i++) {
    let node = root.children[i];

    resultPreopder.push(node.dataset.value);
    if (node) {
      treePreorderRec(node);
    }
  }

  return resultPreopder;
};

console.log('treePreorderRec: ', treePreorderRec(bodyPreorder));

const treePreorderNotRec = (root) => {
  let resultPreorder = [];
  let stack = [...root];

  while (stack.length) {
    const item = stack.pop();
    resultPreorder.push(item.dataset.value);

    if (item.children.length) {
      for (let i = item.children.length - 1; i >= 0; i--) {
        stack.push(item.children[i]);
      }
    }
  }

  return resultPreorder;
};

console.log('treePreorderNotRec: ', treePreorderNotRec(bodyPreorder.children));
