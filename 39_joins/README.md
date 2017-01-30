# Joins

## Description

Relational Databases are awesome at doing joins given SQL.
But, how good are you and your understanding of joins?

**Create a function that takes in
2 arrays, 2 keys, and a new key,
and returns a joined dataset.**

The function should also remove the foreign key from
the left object and put the right object in the new
key specified.

## Example

```js
var cities = [
  {id: 1, name: "Denver", state_id: 1},
  {id: 2, name: "Milwaukee", state_id: 3},
  {id: 9, name: "Pella", state_id: 9},
  {id: 4, name: "Jasper", state_id: 7},
  {id: 11, name: "Greenville", state_id: 10},
  {id: 8, name: "West Lafayette", state_id: 7},
  {id: 45, name: "Chicago", state_id: 22}
]

var states = [
  {id: 1, name: "Colorado"},
  {id: 3, name: "Wisconsin"},
  {id: 9, name: "Iowa"},
  {id: 7, name: "Indiana"},
  {id: 22, name: "Illinois"},
  {id: 10, name: "South Carolina"}
]

function join (left, right, foreignKey, primaryKey, newKey) {
  left.forEach(function(item) {
    for (var i = 0; i < right.length; i++) {
      if (right[i][primaryKey] === item[foreignKey]) {
        item[newKey] = right[i];
        delete item[foreignKey];
      }
    }
  })
  return left;
}

var result = join(cities, states, "state_id", "id", "state")
console.log(result) /* ->
[  
  {  
    "id":2,
    "name":"Milwaukee",
    "state":{  
      "id":3,
      "name":"Wisconsin"
    }
  },
  {  
    "id":9,
    "name":"Pella",
    "state":{  
      "id":9,
      "name":"Iowa"
    }
  },
  {  
    "id":4,
    "name":"Jasper",
    "state":{  
      "id":7,
      "name":"Indiana"
    }
  },
  {  
    "id":11,
    "name":"Greenville",
    "state":{  
      "id":10,
      "name":"South Carolina"
    }
  },
  {  
    "id":8,
    "name":"West Lafayette",
    "state":{  
      "id":7,
      "name":"Indiana"
    }
  },
  {  
    "id":45,
    "name":"Chicago",
    "state":{  
      "id":22,
      "name":"Illinois"
    }
  },
  {  
    "id":1,
    "name":"Denver",
    "state":{  
      "id":1,
      "name":"Colorado"
    }
  }
]
*/
```

## Starter

```js
function join (left, right, foreignKey, primaryKey, newKey) {
  //Your code here
  return []
}
```

## Stretches

*   Do a join on more than 2 tables.
*   Write tests to ensure your function covers all of the bases.
*   Write a different type of join: Inner, Outer, Left, Right, Full

function join (left, right, foreignKey, primaryKey, newKey) {
  result = [];

}
