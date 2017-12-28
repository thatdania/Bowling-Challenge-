describe('Frame', function(){

var frame

  beforeEach( function(){
    frame = new Frames();
  });

  describe('#Frames', function(){
   it('#frames starts with an empty frame', function(){
     expect(frame.frames).toEqual([])
    });
  });

  describe('#finishRound', function(){
   it('adds a round when round has two elements', function(){
     frame.round.round = [2,2]
     frame.finishRound();
     expect(frame.frames).toEqual([[2,2]])
    });
  });



});
