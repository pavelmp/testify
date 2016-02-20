var assert = chai.assert;
var should = chai.should();
var expect = chai.expect;

describe('the todo.App', function() {
  describe('the todo object', function(){
    //test if the function exists
    it('should have all the necessary methods', function(){
      expect(todo.util.trimTodoName).to.be.ok;
      expect(todo.util.isValidTodoName).to.be.ok;
      expect(todo.util.getUniqueId).to.be.ok;
    });
  });
});


describe('the todo.util methods', function() {
  var testString = '   Li  nda  ';
  
  it('should remove leading and trailing spaces', function(){
    var result = todo.util.trimTodoName(testString);
    result.should.equal('Li  nda');
  });
  
  it('should return true for string with 2+ characters', function(){
    expect(todo.util.isValidTodoName(testString)).to.equal(true);
  });

  it('should return false for string with 1 character', function(){
    expect(todo.util.isValidTodoName('a')).to.not.equal(true);
  });  

  it('should remove leading and trailing spaces', function(){
    assert.equal(todo.util.getUniqueId(), 1, 'returns value of 1')
  });

  it('should produce a string of length 7', function(){
    expect(todo.util.trimTodoName(testString)).to.have.length(7);
  });

  it('should have trimTodoName method', function(){
    expect(todo.util).to.have.property('trimTodoName');
  });

  it('trimTodoName method should have typeof "function"', function(){
    assert.typeOf(todo.util.trimTodoName,'function');
  });

});
