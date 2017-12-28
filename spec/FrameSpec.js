describe('Frame', function(){

  beforeEach( function(){
    frame = new Frames();
  });

  describe('#Frames', function(){
   it('#frames starts with an empty frame', function(){
     expect(frame.frames).toEqual([])
    });
  });

  describe('#finishRound', function(){
   it('adds a round', function(){
     expect(frame.frames).toEqual([])
    });
  });

});
