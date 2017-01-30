var steps = [
    {from:1, to:4},
    {from:1, to:5},
    {from:2, to:5},
    {from:2, to:7},
    {from:3, to:6},
    {from:5, to:9},
    {from:6, to:8},
    {from:7, to:8},
    {from:8, to:9}
];

function evaluate(start, end) {
  var pathLength = 0;
  shortestPath(start, end)

}

function shortestPath(start, end) {
  for (var i = 0; i < steps.length; i++) {
    // Find the next node to use
    if (steps[i].from === start) {

      //check to see if you've reached the goal
      if (steps[i].to === end) {
        return start + ' > ' + end;
      } else {

        //check to see if there is a potential next step
        var inSteps = false;
        for(var j = 0; j < steps.length; j++) {
          if (steps[j].from === steps[i].to) {
            inSteps = true;
          }

          //if there's a next step, return the function using this node
          if (inSteps) {
            console.log('recursing');
            console.log(steps[i]);
            return steps[i].from + ' > ' + shortestPath(steps[i].to, end);
          }
        }
      }
    }
  }
}

console.log(shortestPath(6, 9));
