// Linked List Data structure
// holds reference the first Node
const LinkedList = function () {
  let sizeCount = 0;
  let headOfList = new Node(Infinity, null);

  // Adds a new node containing value to the end
  // of the list
  function append(value) {
    if (size() === 0) headOfList.next = new Node(value, null);
    else {
      const tailNode = tail();
      tailNode.next = new Node(value, null);
    }
    changeSize("+");
  }

  // Adds a new node containing value to the
  // start of the list
  function prepend(value) {
    const temp = headOfList.next;
    headOfList.next = new Node(value, temp);
    changeSize("+");
  }

  function size() {
    return sizeCount;
  }

  // returns first node in the list
  function head() {
    return headOfList.next;
  }

  // returns last node in the list
  function tail() {
    function helper(node) {
      if (node.next === null) return node;
      return helper(node.next);
    }
    return helper(headOfList.next);
  }

  // Returns the node at given index
  // indices are 0 based
  function at(index) {
    function helper(node, idx) {
      if (idx == 0) return node;
      return helper(node.next, --idx);
    }
    return helper(headOfList.next, index);
  }

  // removes the last element from the list
  function pop() {
    const notLast = at(size() - 2);
    notLast.next = null;
    changeSize("-");
  }

  // returns true if the passed invalue is
  // in the list and otherwise returns false
  function contains(value) {
    function helper(node) {
      if (node === null) return false;
      if (node.value === value) return true;
      return helper(node.next);
    }

    return helper(headOfList.next);
  }

  // return the index of the node containing value,
  // or null if not found
  function find(value) {
    if (!contains(value)) return null;
    function helper(node, pos) {
      if (node.value === value) return pos;
      return helper(node.next, ++pos);
    }

    return helper(headOfList.next, 0);
  }

  // represents LinkedList objects as string
  // values can be pretty print in the console.
  function toString() {
    function helper(node) {
      if (node === null) return null;
      return `( ${node.value} ) -> ` + helper(node.next);
    }
    return helper(headOfList.next);
  }

  // inserts a new node with the provided value at given index
  function insertAt(value, index) {
    const prevNode = at(index - 1);
    const nextNode = at(index);
    prevNode.next = new Node(value, nextNode);
    changeSize("+");
  }

  // remove the node at the given index
  function removeAt(index) {
    const prevNode = at(index - 1);
    const nextNode = at(index + 1);
    prevNode.next = nextNode;
    changeSize("-");
  }

  // Node of Linked List holds value
  // and rest of the list
  function Node(value, next) {
    return { value, next };
  }

  function changeSize(sign) {
    switch (sign) {
      case "+":
        sizeCount += 1;
        return;
      case "-":
        sizeCount -= 1;
        return;
      default:
        return;
    }
  }

  return {
    append,
    prepend,
    size,
    head,
    tail,
    at,
    pop,
    contains,
    find,
    toString,
    insertAt,
    removeAt,
  };
};

export default LinkedList;
