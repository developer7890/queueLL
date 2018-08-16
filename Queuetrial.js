class Queue{
  constructor(){
    this.front=null;
    this.rear=null;
    this.size=0;
  }
  Enqueue(element){                    //O(1) addition.
    var nodetobeinserted= new Node(element);
    if(this.front===null&&this.rear===null){
      this.front=nodetobeinserted;
      this.rear=nodetobeinserted;
      $("#first").html("first element is "+nodetobeinserted.value);
      this.size++;
    }
    else{
      this.rear.next=nodetobeinserted;
      this.rear=this.rear.next;
      $("#last").html("last element is: "+nodetobeinserted.value);
      this.size++;
    }
  }
  Printqueue(){
    var text="";
    for(var i=0;i<this.size;i++){
      text+=this.front.value+" ";
      this.front=this.front.next;
    }
    $("#print").html("The queue is: "+text);
  }
  Dequeue(){
    if(this.front!==null){
      var removedelement= this.front;
      this.front=this.front.next;
      $("#removed").html("removed element is: "+removedelement.value);
      this.size--;
    }
    else{
      $("#removed").html("cannot dequeue from empty queue");
    }
  }
}
class Node{
  constructor(data){
    this.value=data;
    this.next=null;
  }
}
