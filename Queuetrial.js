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
    var text="",utility=this.front;
    for(var i=0;i<this.size;i++){
      text+=utility.value+" ";
      utility=utility.next;
    }
    $("#print").html("The queue is: "+text);
  }
  Dequeue(){
    if(this.front!==null){
      var removedelement= this.front.value;
      this.front=this.front.next;
      $("#removed").html("removed element is: "+removedelement);
      this.size--;
    }
    else{
      $("#removed").html("cannot dequeue from empty queue");
    }
  }
  Printqueue2(){
    var text2="",utility2=this.front;
    for(var i=0;i<this.size;i++){
      text2+=utility2.value+" ";
      utility2=utility2.next;
    }
    $("#print2").html("The queue after dequeue is: "+text2);
  }
}
class Node{
  constructor(data){
    this.value=data;
    this.next=null;
  }
}
