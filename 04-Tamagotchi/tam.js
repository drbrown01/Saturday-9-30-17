function createDigitalPal(hungry, sleepy, bored, age){
  this.hungry = hungry;
  this.sleepy = sleepy;
  this.bored = bored;
  this.age = age;

  function feed() {
    if(hungry === true){
      console.log("That was yummy!");
      this.hungry = false;
      this.sleepy = true;
    }
    if(hungry === false){
    console.log("No thanks! I'm full.");
    }
  }
  function sleep() {
    if(sleepy === true){
      console.log("Zzzzzzzz");
      this.sleepy = false;
      this.bored = true;
      this.increaseAge();
    }
    else {
      console.log( "No way! I'm not tired.");
    }
  }
  function play() {
    if (this.bored === true){
      console.log("Yay! Let's play!");
      this.bored = false;
    }
    else {
      if (bored === false){
        console.log("Not right now. Later?");
      }
    }
  }
  function increaseAge() {
    this.age ++;
    console.log("Happy Birthday to me! I am "+age+" old!");
  }
};
var dog = new DigitalPal(true, true, true, 55)
  dog.outside = true;
  dog.inside = false;


  dog.bark(){
    console.log("Woof! Woof");
  };

  dog.goOutside(){
    if(this.outside===false){
      console.log("Yay! I love the outdoors!");
    };
  };
  dog.goInside(){
    if (this.inside === false){
      console.log("Do we have to? Fine...");
      this.inside = true;
    }
    else {
      console.log("I'm already inside...");
    }
  }
  var cat = new DigitalPal(true, true, true, 55);
    this.houseCondition = 100;
    cat.meow(){
      console.log("Meow! Meow!");
    };
    cat.destroyFurniture(){
      this.houseCondition -= 10;
      console.log("MUAHAHAHAHA! TAKE THAT FURNITURE!");
      this.bored = false;
      this.sleepy = true;
      if (cat.houseCondition ===0){
        break;
      }
    };
    cat.buyNewFurniture(){
      this.houseCondition += 50;
      console.log("Are you sure about that?");
    };
