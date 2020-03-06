import { LightningElement, track } from 'lwc';

/**
 *
 */
export default class DynamicElementTestApp extends LightningElement {
  @track
  rootNode = {
    tag: 'lightning-card',
    attrs: {
      title: 'Dynamic Element Test',
      iconName: 'custom:custom14',
    },
    children: [],
  };

  activeContainerKey = null;

  getActiveContainer() {
    console.log('container=>', this.activeContainerKey);
    if (!this.activeContainerKey) {
      return this.rootNode;
    }
    const container = this.findByKey(this.activeContainerKey) || this.rootNode;
    console.log(
      'container',
      container.tag,
      container.key,
      container.attrs.style,
    );
    return container;
  }

  createNode(tag, attrs = {}, children = []) {
    const key = Math.random()
      .toString(16)
      .substring(2);
    return { key, tag, attrs, children };
  }

  query(filterFn, node = this.rootNode) {
    const nodes = [];
    if (filterFn(node)) {
      nodes.push(node);
    }
    for (const cn of node.children) {
      const ns = this.query(filterFn, cn);
      nodes.push(...ns);
    }
    return nodes;
  }

  find(filterFn, node = this.rootNode) {
    if (filterFn(node)) {
      return node;
    }
    for (const cn of node.children) {
      const n = this.find(filterFn, cn);
      if (n) {
        return n;
      }
    }
    return undefined;
  }

  findByKey(key, node = this.rootNode) {
    return this.find(n => n.key === key, node);
  }

  findByTag(tag, node = this.rootNode) {
    return this.find(n => n.tag === tag, node);
  }

  remove(rejectFn, node = this.rootNode) {
    const children = node.children.filter(n => !rejectFn(n));
    if (children.length !== node.children.length) {
      node.children = children;
    }
    for (const cn of node.children) {
      this.remove(rejectFn, cn);
    }
  }

  focusContainer(key, e) {
    console.log('focus container', key);
    if (e) {
      e.stopPropagation();
    }
    this.activeContainerKey = key;
    const containers = this.query(n => n.tag === 'div');
    for (const ct of containers) {
      ct.attrs.style = undefined;
    }
    const focusContainer = this.getActiveContainer();
    focusContainer.attrs.style = 'border: 1px solid blue';
  }

  addIcon() {
    console.log('add icon');
    console.log(this.rootNode);
    const node = this.createNode('lightning-icon', {
      iconName: 'utility:success',
      style: 'cursor: pointer',
    });
    node.attrs.onclick = this.toggleIcon.bind(this, node.key);
    const container = this.getActiveContainer();
    container.children.push(node);
  }

  addContainer() {
    const currentContainer = this.getActiveContainer();
    const newContainer = this.createNode('div', {
      class: 'slds-m-left_large slds-p-around_small',
      style: 'min-height: 10px',
    });
    newContainer.attrs.onclick = this.focusContainer.bind(
      this,
      newContainer.key,
    );
    currentContainer.children.push(newContainer);
    this.focusContainer(newContainer.key);
  }

  toggleIcon(key) {
    console.log('toggle icon', key);
    const icon = this.findByKey(key);
    if (icon) {
      icon.attrs.variant =
        icon.attrs.variant === 'success' ? undefined : 'success';
    }
  }

  removeSelectedIcons() {
    this.remove(
      n => n.tag === 'lightning-icon' && n.attrs.variant === 'success',
    );
  }

  removeContainer() {
    this.remove(n => n.key === this.activeContainerKey);
  }
}
