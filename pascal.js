var pascal = (function(){
  //mem caches the rows, reducing execution time significantly on subsequent runs
  var mem = {1: [1, 1]};
  return function(n){
    if (n <= 0 || n % 1 !== 0 || typeof n !== 'number'){
      return undefined;
    }
    var tri = [[1]];
    for (var i = 1; i < n; i++){
      if (i in mem){
        tri.push(mem[i]);
      } else {
        tri[i] = [1];
        for (var k = 1; k < i; k++){
          tri[i].push(Math.round(tri[i][k - 1] * ((i + 1 - k) / k)));
        }
        tri[i].push(1);
        mem[i] = tri[i];      
      }
    }
    return tri;
  };
})();
