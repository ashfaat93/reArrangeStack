let integerStack=[-1,-20,5,29,5,-6,0,-33];
let temp=[];


printStack(splitStack(integerStack));

function printStack(stack){
  if(stack.length==0) return; 
         let top=stack.length;
        while(top!==0){
        console.log(stack[top-1]);
        top=top-1; 
        }
}

function splitStack(stack){
  let reArrangedStack=[];
  let tempPositiveNoStack=[];

  stack.map(i =>
      i<0 ? reArrangedStack.push(i):tempPositiveNoStack.push(i));

  tempPositiveNoStack.length>0 &&  
   tempPositiveNoStack.map(i => reArrangedStack.push(i));
   
  return reArrangedStack;
  }
