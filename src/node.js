class Node {
	constructor(data, priority) {
		this.data = data;
		this.priority = priority;
		this.parent = null;
		this.left = null;
		this.right = null;
	}

	appendChild(node) {
		if (!this.left) {
			this.left = node;
			node.parent = this;
		} else if (!this.right) {
			this.right = node;
			node.parent = this;
		} else return false;
	}

	removeChild(node) {
		if (this.left === node) {
			node.parent = null;
			this.left = null;
		} else if (this.right === node) {
			node.parent = null;
			this.right = null;
		} else throw new Error();
	}

	remove() {

	}

	swapWithParent() {
		
	}
}

module.exports = Node;
