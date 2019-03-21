
class test {
  data(a,b){
    a = Number(a);b = Number(b); 
    if (Number.isNaN(a) || Number.isNaN(b)){
      console.log ("can nhap vao la so");
      return false;
    }
      return true;
  }
}
class casio extends test{
  sum(a,b){
    a = Number(a);b = Number(b);
    if (this.data(a,b)){
      console.log(a + b);
    }
  }
  sub(a,b){
      if (this.data(a,b)){
          console.log(a - b);
      }
  }
  mul(a,b){
      if (this.data(a,b)){
          console.log(a * b);
      }
  }
  div(a,b){
      if(b==0){
          console.log("so phai khac khong");
       }
       else{
           console.log(a / b);
       }
  }
  run(a,b){
    a = Number (a);b = Number (b);
    if (this.data(a,b)){
       console.log(a + b);
       console.log(a - b);
       console.log(a * b);
       if(b == 0){
         console.log("so bi chia phai khac 0");
       }
       else{
         console.log(a / b);
       }
    }

  }
}
var calculate = new casio();
 calculate.sum("","");
 calculate.sub("","");
 calculate.mul("","");
 calculate.div("","");
 calculate.run("","");
