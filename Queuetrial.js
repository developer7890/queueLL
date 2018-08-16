class Queue{
  constructor(){
    this.front=null;
    this.rear=null;
  }
  Enqueue(element){                    //O(1) addition.
    var nodetobeinserted= new Node(element);
    if(this.front===null&&this.rear===null){
      this.front=nodetobeinserted;
      this.rear=nodetobeinserted;
      $("#gg").html(nodetobeinserted.value);
    }
    else{
      this.rear.next=nodetobeinserted;
      this.rear=this.rear.next;
      $("#gg").html(nodetobeinserted.value);
    }
  }
  Dequeue(){
    if(this.front!==null){
      var removedelement= this.front;
      this.front=this.front.next;
      $("#ff").html("removed element is "+removedelement.value);
    }
    else{
      $("#ff").html("cannot dequeue from empty queue");
    }
  }
}
class Node{
  constructor(data){
    this.value=data;
    this.next=null;
  }
}
