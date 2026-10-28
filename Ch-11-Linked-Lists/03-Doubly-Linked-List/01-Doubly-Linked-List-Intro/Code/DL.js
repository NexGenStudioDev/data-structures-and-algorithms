class Node {
  constructor(name) {
    this.prev = null;
    this.val = name;
    this.next = null;
  }
}

class DLL {
  constructor() {
    this.head = null;
    this.len = 0;
  }

  // Add at beginning
  addAtFirst(name) {
    const newNode = new Node(name);

    if (this.head !== null) {
      newNode.next = this.head;
      this.head.prev = newNode;
    }

    this.head = newNode;
    this.len++;
  }

  // Add at end
  addAtLast(name) {
    const newNode = new Node(name);

    if (this.head === null) {
      this.head = newNode;
      this.len++;
      return;
    }

    let current = this.head;

    while (current.next !== null) {
      current = current.next;
    }

    current.next = newNode;
    newNode.prev = current;

    this.len++;
  }

  // Add at any index
  addAtIndex(index, name) {
    if (index < 0 || index > this.len) {
      console.log("Invalid Index");
      return;
    }

    if (index === 0) {
      this.addAtFirst(name);
      return;
    }

    if (index === this.len) {
      this.addAtLast(name);
      return;
    }

    const newNode = new Node(name);

    let current = this.head;

    for (let i = 0; i < index - 1; i++) {
      current = current.next;
    }

    newNode.next = current.next;
    newNode.prev = current;

    current.next.prev = newNode;
    current.next = newNode;

    this.len++;
  }

  removeHead(){

    let head = this.head
    
    this.head = head.next
    head.prev = null
    this.len--
   
    return this.head
  }

  removeTail(){
   let Current = this.head

 

   while(Current.next.next !== null){
    Current = Current.next
   }



   Current.next.prev = null
   Current.next = null

   this.len--

    return this.head



   
  //  Current.next = null

    // this.len--




  }

removeAtIndex(index) {
  if (index < 0 || index >= this.len) {
    console.log("Invalid Index");
    return;
  }

  // Remove first node
  if (index === 0) {
    this.removeHead();
    return;
  }

  // Remove last node
  if (index === this.len - 1) {
    this.removeTail();
    return;
  }

  let current = this.head;

  for (let i = 0; i < index; i++) {
    current = current.next;
  }

  current.prev.next = current.next;
  current.next.prev = current.prev;

  current.next = null;
  current.prev = null;

  this.len--;
}

  // Print List
  print() {
    let current = this.head;

    while (current !== null) {
      console.log(current.val);
      current = current.next;
    }
  }
}

// ----------------------
// Example
// ----------------------

const students = new DLL();



students.addAtFirst("Rahul");
students.addAtFirst("Priya");
students.addAtFirst("Amit");
// students.addAtLast("Neha");

students.addAtIndex(0, "Abhishek");


students.addAtIndex(3, "Sneha");



students.removeHead()
students.removeTail()
students.print();

console.log("Length:", students.len);

