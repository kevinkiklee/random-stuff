

const getCheapestCost = ({ cost, children }) =>
  children.length === 0
    ? cost
    : Math.min(...children.map(child => getCheapestCost(child))) + cost

class Node {
  constructor(cost) {
   this.cost = cost
   this.children = []
  }
 }

 const rootNode = new Node(0)
 const five1 = new Node(5)
 const three1 = new Node(3)
 const six1 = new Node(6)
 rootNode.children = [five1, three1, six1]

 const four1 = new Node(4)
 five1.children = [four1]

 const two1 = new Node(2)
 const zero1 = new Node(0)
 three1.children = [two1, zero1]

 const one1 = new Node(1)
 const five2 = new Node(5)
 six1.children = [one1, five2]

 const one2 = new Node(1)
 two1.children = [one2]
 const one3 = new Node(1)
 one2.children = [one3]

 const ten1 = new Node(10)
 zero1.children = [ten1]

//  const getMinCost = ({ cost, children }) => {
//    if (children.length === 0) {
//      return cost;
//    } else {
//      const result = cost + Math.min(...children.map(child => getMinCost(child)))
//      console.log(result);
//      return result
//    }
//  };

//  getMinCost(rootNode)

const cheapestCost = getCheapestCost(rootNode)
console.log({ cheapestCost })
