var expect = require('chai').expect;

it('expect style assertions', function () { 

    expect(2).to.be.greaterThan(1);
    expect(null).to.not.exist;
    expect(false).to.be.false;
    expect('foo').to.be.a('string');
    expect(function () { 
        throw new Error();
    }).to.throw;

    expect([1, 2, 3, 4]).to.have.length(4);
    expect({foo:'jags'}).to.have.property('foo').and.equal('jags');



});