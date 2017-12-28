describe('Round', function(){

  var rounds

  beforeEach( function(){
    rounds = new Rounds();
  });

  describe('#Round', function(){
   it('#turn starts with an empty round', function(){
     expect(rounds.round).toEqual([])
    });
  });

 describe('#roll', function(){
   it('#roll put score into the round', function(){
     expect(rounds.roll(2)).toEqual([2])
   });
  });

  describe('#writeScore', function(){
    it('writeScore makes sure there are two scores in one round', function(){
      rounds.roll(2)
      rounds.roll(2)
      rounds.roll(2)
      rounds.writeScore();
      expect(rounds.round).toEqual([2,2])
    });
   });

   describe('#resets', function(){
     it('#reset sets the round when its new', function(){
       rounds.roll(2)
       rounds.resets()
       expect(rounds.round).toEqual([])
     });
    });

});
