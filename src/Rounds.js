function Rounds(){
  this.round = []
};

Rounds.prototype.roll = function(score){
  if(score > 10){
    return 'A bowling game only has ten pins'
  }

  else {
    this.round.push(score)
    return this.round
  }
};

Rounds.prototype.writeScore = function(){
  if(this.round.length > 2){
    this.round.pop()
    return this.round
  }
};

Rounds.prototype.resets = function(){
  this.round = []
};
