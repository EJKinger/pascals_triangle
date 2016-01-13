describe("Pascal's Triangle", function() {
  it("should return undefined for bad inputs", function(){
    expect(pascal([])).to.be.undefined;
    expect(pascal({})).to.be.undefined;
    expect(pascal('yo')).to.be.undefined;
    expect(pascal(7.343)).to.be.undefined;
    expect(pascal(-1)).to.be.undefined;
    expect(pascal(0)).to.be.undefined;
  });
  it("should return an array of arrays representing pascal's triangle of n length", function(){
    expect(pascal(1)).to.deep.equal([[1]]);
    expect(pascal(6)).to.deep.equal(
      [[1],[1, 1], [1, 2, 1], [1, 3, 3, 1], [1, 4, 6, 4, 1], [1, 5, 10, 10, 5, 1]]
    );
    expect(pascal(20).length).to.equal(20);
  });
});
