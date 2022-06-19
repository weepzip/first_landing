window.onload = () => {
  let heights = [];
  let blockCount = 20;
  for(let i = 0; i < blockCount; i++) {
    heights[i] = Math.floor(Math.random() * 400) + 10;
  }
  let layout = document.getElementById('layout');
  heights.forEach((height, index) => {
    let block = document.createElement('div');
    block.className = 'el';
    block.style.setProperty('width', '100px');
    block.style.setProperty('height', `${height}px`);
    block.style.setProperty('background-color', '#839');
    block.innerHTML = index;
    layout.append(block);
  })
  renderWaterfall(layout, 5, 10);
}


const renderWaterfall = (rootNode, columnCount=3, elementGap=10) => {
  rootNode.style.setProperty('display', 'grid');
  rootNode.style.setProperty('grid-template-columns', `repeat(${columnCount}, 1fr)`);
  rootNode.style.setProperty('gap', `${elementGap}px`);
  for (let i=0; i<columnCount; i++) {
    let flex = document.createElement('div');
    flex.className = 'column';
    flex.style.setProperty('dipslay', 'flex');
    flex.style.setProperty('flex-direction', 'column');
    flex.style.setProperty('height', 'min-content');
    //flex.style.setProperty('gap', `${elementGap}px`);
    rootNode.append(flex);
  };
  while (rootNode.childNodes.length > columnCount) {
    let flexes = rootNode.getElementsByClassName('column');
    let min = {index: 0, value: flexes[0].offsetHeight};
    for(let i=1; i<flexes.length; i++) {
      if(flexes[i].offsetHeight < min.value) min = {index: i, value: flexes[i].offsetHeight};
    };
    let node = rootNode.getElementsByClassName('el')[0];
    node.style.setProperty('width', '100%');
    node.style.setProperty('margin-bottom', `${elementGap}px`);
    flexes[min.index].append(node);
  };
};