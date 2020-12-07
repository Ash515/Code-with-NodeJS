
function SolveRect(l,b){
      console.log("solving rectangle with length="+l+"and breadth="+b);
      rect(l,b,(err,rectangle)=>{
          if(err){
              console.log("Error:",err.message);
          }else{
              console.log("The area of the rectangle of dimensions l = "
              + l + " and b = " + b + " is " + rectangle.area())
              console.log("The perimeter of the rectangle of dimensions l = "
              + l + " and b = " + b + " is " + rectangle.perimeter());
          }
      });
    console.log("This stmt")
    
    
    }
      
SolveRect(2,4);
SolveRect(0,-1);
