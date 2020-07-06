class Wall {
    constructor(x,y,width,height) {
      

      var options1 = {
        isStatic: true
        }

      var options2 = {
     isStatic: true
       }
       function preload(){
         
       }
          
      
      this.w21 = Bodies.rectangle(x,y,width,height,options1);
      this.w3 = Bodies.rectangle(x,y,width,height,options2);
      
      
      this.width = width;
      this.width = width;
      
      
      this.height = height;
      this.height = height;
      
     
      World.add(world, this.w21);
      World.add(world, this.w3);   
    }   

    display(){
     
      var w21 =this.w21.position;
      var w3 =this.w3.position;

     
      rectMode(CENTER);
      fill("white");
      rect(w21.x, w21.y, this.width, this.height);
      rectMode(CENTER);
      fill("white");
      
      rect(w3.x, w3.y, this.width, this.height);
  
      
     
    }
  }
  