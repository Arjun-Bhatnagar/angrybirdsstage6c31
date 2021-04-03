class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.smokeIMG = loadImage("sprites/smoke.png")
    this.tred = []
    

    }

  display() {
    

    super.display();
 if (this.body.position.x > 200 && this.body.velocity.x > 8){
      var posbird = [this.body.position.x, this.body.position.y]
      this.tred.push(posbird)
   }
    
   
    for(var i=0; i < this.tred.length; i++){
      image(this.smokeIMG, this.tred [i][0],this.tred[i][1])
    }
  }
}
