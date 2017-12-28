function Frames(rounds = Rounds){
  this.frames = []
  this.round = new Rounds();
};

Frames.prototype.finishRound = function(){
  if(this.round.round.length === 2){
    this.frames.push(this.round.round)
  }
  return this.frames
};
