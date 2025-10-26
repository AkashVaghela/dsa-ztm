/** Graph Data Structure is a non-linear data structure consisting of vertices and edges. It is useful in fields such as social network analysis, recommendation systems, and computer networks */

/** Graph Types
 * Null graph: A graph is known as a null graph if there are no edges in the graph.
 * Trivial Graph: Graph having only a single vertex, it is also the smallest graph possible.
 * Undirected Graph: A graph in which edges do not have any direction. That is the nodes are unordered pairs in the definition of every edge.
 * Directed Graph: A graph in which edge has direction. That is the nodes are ordered pairs in the definition of every edge.
 * Connected Graph: The graph in which from one node we can visit any other node in the graph is known as a connected graph.
 * Disconnected Graph: The graph in which at least one node is not reachable from a node is known as a disconnected graph.
 * Cyclic Graph: A graph containing at least one cycle is known as a Cyclic graph.
 * Acyclic Graph: A Directed Graph that does not contain any cycle.
 */

/**
 * Graph Representation
 * Adjacency Matrix: In this method, the graph is stored in the form of the 2D matrix where rows and columns denote vertices. Each entry in the matrix represents the weight of the edge between those vertices.
 * Adjacency List: This graph is represented as a collection of linked lists. There is an array of pointer which points to the edges connected to that vertex.
 */

/**
 * Advantages
 * Better for relationships
 * Good for algorithms
 */

/**
 * Disadvantages
 * Scaling is hard
 */

class Graph {
  constructor() {
    this.numberOfNodes = 0;
    this.adjacentList = {};
  }
  addVertex(node) {
    this.adjacentList[node] = [];
    this.numberOfNodes++;
  }

  addEdge(node1, node2) {
    //undirected Graph
    if (!this.adjacentList[node1].includes(node2)) {
      this.adjacentList[node1].push(node2);
    }
    if (!this.adjacentList[node2].includes(node1)) {
      this.adjacentList[node2].push(node1);
    }
  }
  showConnections() {
    const allNodes = Object.keys(this.adjacentList);
    for (let node of allNodes) {
      let nodeConnections = this.adjacentList[node];
      let connections = "";
      let vertex;
      for (vertex of nodeConnections) {
        connections += vertex + " ";
      }
      console.log(node + "-->" + connections);
    }
  }
}

const myGraph = new Graph();
myGraph.addVertex("0");
myGraph.addVertex("1");
myGraph.addVertex("2");
myGraph.addVertex("3");
myGraph.addVertex("4");
myGraph.addVertex("5");
myGraph.addVertex("6");
myGraph.addEdge("3", "1");
myGraph.addEdge("3", "4");
myGraph.addEdge("4", "2");
myGraph.addEdge("4", "5");
myGraph.addEdge("1", "2");
myGraph.addEdge("1", "0");
myGraph.addEdge("0", "2");
myGraph.addEdge("6", "5");

myGraph.showConnections();
//Answer:
// 0-->1 2
// 1-->3 2 0
// 2-->4 1 0
// 3-->1 4
// 4-->3 2 5
// 5-->4 6
// 6-->5
