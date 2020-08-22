class Form {

  constructor() {
    this.input = createInput("Name");
 this.button = createButton('Play');
    this.greeting = createElement('h2');
    this.wait = createElement('h2');
    this.reset = createButton("Reset");
    
  }
  hide(){
    this.greeting.hide();
   this.button.hide();
    this.input.hide();
 this.wait.hide();
  }

  display(){

    image(back,0,0,1500,800)
    
   
  
    this.input.position(displayWidth/2 - 40 , displayHeight/2 - 80);
    this.button.position(displayWidth/2 + 30, displayHeight/2);
  
    this.reset.position(displayWidth-100,20);
   
    this.button.mousePressed(()=>{
      this.input.hide();
     this.button.hide();
      player.name = this.input.value();
      playerCount+=1;
      player.index = playerCount;
      player.update();
      player.updateCount(playerCount);
      this.greeting.html("Hello " + player.name +" !!");
      this.wait.html("Waiting For Others To Join............");
      this.greeting.position(displayWidth/2 - 70, displayHeight/3+20);
      this.wait.position(displayWidth/2 - 150, displayHeight/3+60);

    });
    this.reset.mousePressed(() =>{
     player.updateCount(0);
     game.update(0);
    Player.updateCarsAtEnd(0);
    })
    
  }
}
