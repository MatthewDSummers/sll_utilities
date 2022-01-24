class Node {
    constructor(data){
        this.data=data;
        this.next=null;
    }
}
function noList(sll){
    if(sll.head == null){
        return null
    }
}
class LinkedList {
    constructor(){
        this.head = null;
    }
    front(){
        if(this.head == null){
            return null
        }

        return this.head.data
    }


    removeFront(){
        if (!this.head){
            return null
        }
        let removed = this.head;
        this.head = removed.next;
        removed.next = null;
        return this.head
    }

    addFront(val){
        var new_node = new Node(val);

        if(this.head == null){
            return null
        }
        
        new_node.next = this.head;
        this.head = new_node;

        return this.head
    }

    contains(val){
        var head = this.head
        while (head != null) {
            if (head.data == val){
                return true;
            }
            else{
                return false;
            }
        }
    }
    length(){
        var head = this.head
        var count = 0
        while (head != null) {
            count++;
            head = head.next
            }
        return count;
    }
    display(){
        var neat = "My list is: ";
        var head = this.head

        while (head != null) {
            neat += head.data + " ";
            head = head.next;
            }
        return neat;
    }
}

function minToFront(sll){
    var head = sll.head;
    var min = Number.MAX_VALUE;

    while (head != null) {
        if (head.data < min){
            min = head.data;
        }
        head = head.next;
    }
    var new_node = new Node(min);
    new_node.next = sll.head
    sll.head = new_node;

    return sll
}
function maxToFront(sll){
    var head = sll.head;
    var max = Number.MIN_VALUE;

    while (head != null) {
        if (head.data > max){
            max = head.data;
        }
    head = head.next;
    }
    var new_node = new Node(max);
    new_node.next = sll.head
    sll.next = new_node;

    return sll
}

var node1 = new Node(9)
var sll_one = new LinkedList()
var empty = new LinkedList()

sll_one.head = node1
// -------------------------
console.log("The SLL is:", sll_one)

// LENGTH
console.log("The length is:", sll_one.length())

// CONTAINS VALUE
console.log(sll_one.contains(9))
console.log(sll_one.contains(49))

// DISPLAY
console.log(sll_one.addFront(7))
console.log(sll_one.display())
console.log("The length is:", sll_one.length())

// MAX TO FRONT 
console.log(maxToFront(sll_one))
// MIN TO FRONT 
console.log(minToFront(sll_one))
