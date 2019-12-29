class Graph {
    constructor() {
        this.noOfVertices = 0;
        this.graph = {};
    }

    addVertex(value) {
        if(!this.graph[value]) {
            this.noOfVertices++;
            this.graph[value] = {};
        }
    }

    addEdge(source, target, cost) {
        let sourceNode = this.graph[source];
        if(sourceNode) {
            let targetCost = sourceNode[target];
            if(!targetCost) {
                sourceNode[target] = cost;
            }
        }
    }
}

export default Graph;