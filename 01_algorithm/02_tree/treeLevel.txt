const resultLevel = [];
const bodyLevel = document.body.children;

const treeLevelRec = (roots) => {
  let children = [];
  for (let i = 0; i < roots.length; i++) {
    let root = roots[i];
    if (root.children.length) children.push(...root.children);
    resultLevel.push(root.dataset.value);
  }

  if (children.length) treeLevelRec(children);

  return resultLevel;
};

console.log('treeLevelRec:', treeLevelRec(bodyLevel));

const treeLevelNotRec = (data) => {
  const resultLevel = [];
  let roots = [...data];
  for (let i = 0; i < roots.length; i++) {
    let root = roots[i];

    if (root.children.length) roots.push(...root.children);
    resultLevel.push(root.dataset.value);
  }
  return resultLevel;
};

console.log('treeLevelNotRec: ', treeLevelNotRec(bodyLevel));
