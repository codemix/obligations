var LIB = require('../lib'),
    should = require('should');

describe('Obligations.precondition()', function () {
  it('should silently accept a precondition', function () {
    LIB.precondition(true);
  });
  it('should loudly fail when a precondition fails', function () {
    var ok = false;
    try {
      LIB.precondition(false);
    }
    catch (e) {
      e.should.be.an.instanceOf(LIB.PreconditionError);
      e.should.be.an.instanceOf(Error);
      ok = true;
    }
    ok.should.be.true;
  });
  it('should loudly fail when a precondition fails, with a custom message', function () {
    var ok = false;
    try {
      LIB.precondition(false, 'foo');
    }
    catch (e) {
      e.should.be.an.instanceOf(LIB.PreconditionError);
      e.should.be.an.instanceOf(Error);
      e.message.should.equal('foo');
      ok = true;
    }
    ok.should.be.true;
  });
});

describe('Obligations.invariant()', function () {
  it('should silently accept a invariant', function () {
    LIB.invariant(true);
  });
  it('should loudly fail when a invariant fails', function () {
    var ok = false;
    try {
      LIB.invariant(false);
    }
    catch (e) {
      e.should.be.an.instanceOf(LIB.InvariantError);
      e.should.be.an.instanceOf(Error);
      ok = true;
    }
    ok.should.be.true;
  });
  it('should loudly fail when a invariant fails, with a custom message', function () {
    var ok = false;
    try {
      LIB.invariant(false, 'foo');
    }
    catch (e) {
      e.should.be.an.instanceOf(LIB.InvariantError);
      e.should.be.an.instanceOf(Error);
      e.message.should.equal('foo');
      ok = true;
    }
    ok.should.be.true;
  });
});

describe('Obligations.postcondition()', function () {
  it('should silently accept a postcondition', function () {
    LIB.postcondition(true);
  });
  it('should loudly fail when a postcondition fails', function () {
    var ok = false;
    try {
      LIB.postcondition(false);
    }
    catch (e) {
      e.should.be.an.instanceOf(LIB.PostconditionError);
      e.should.be.an.instanceOf(Error);
      ok = true;
    }
    ok.should.be.true;
  });
  it('should loudly fail when a postcondition fails, with a custom message', function () {
    var ok = false;
    try {
      LIB.postcondition(false, 'foo');
    }
    catch (e) {
      e.should.be.an.instanceOf(LIB.PostconditionError);
      e.should.be.an.instanceOf(Error);
      e.message.should.equal('foo');
      ok = true;
    }
    ok.should.be.true;
  });
});