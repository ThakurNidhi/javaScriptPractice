function sayHi(){ //--Function Declaration:
    alert('helloooooooooo');
}

let sayHi = function(){ //----Function Expression.
    alert("HHHHHHHHHHHHIIIIiii")
}

function ask(question, yes , no){
    if(confirm(question)) yes()
    else no();
}
function showOk(){
    alert("you agreed");
}
function showCancle(){
    alert(" U cancled execution");
}
ask("do u agree???", showOk, showCancle)