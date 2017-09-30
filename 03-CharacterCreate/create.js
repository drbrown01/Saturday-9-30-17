function character(name,profession, gender, age, strength, hitpoints, level ) {
  this.name = name;
  this.profession = professsion;
  this.gender = gender;
  this.age = age;
  this.strength = strength;
  this.hitpoints = hitpoint;
  this.level = "";
  this.PrintStats = function(name,profession, gender, age, strength, hitpoints, level) {
      var stats("Name: " + this.name;
      stats += "\nProfession" + this.professsion;
       stats += "\nAge" + this.age,
       stats += "\nStrength" + this.strength,
       stats += "\nHitpoints" + this.hitpoints,
       stats += "\nLevel" + this.level);}
       console.log(stats);

      this.IsAlive = function(hitpoints) {
        if (this.hitpoints === 0) {
          console.log(this.name + "is alive");
          return true;
        }
        console.log(this.name +  "is dead");
        return false;

      // this.Attack = function(opponent) {
      //   if (this.strenght > opponent.strength) {
      //     opponent.hitpoints - this.strenght;
      //     else {
      //       this.hitpoints - opponent.strenght;
      //     }
      this.Attack = function(opponent){
        opponent.hitpoints -= this.strength;
      }

      this.LevelUp = function() {
        this.age += 1;
        this.strength += 5;
        this.hitpoints += 25;

      }

    }
  };
}
var player1 = new character(jim, fighter, male, 21, 100, 50, 5);
var player2 = new character(bob, fighter, male, 21, 100,50, 6);

player1.PrintStats();
player2.PrintStats();

player2.LevelUp();
player1.IsAlive();

while(player1.IsAlive() && player2.IsAlive()){
  player1.attack(player2);
  player2.attack(player1);

  player1.PrintStats();
  player2.PrintStats();

}
if (player1.IsAlive{
  console.log("player1 is alive");
} else {
  console.log(player1.name + "is alive");
}
