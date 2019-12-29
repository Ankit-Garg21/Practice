import Graph from '../graph/graph';

const MinNumberOfMoves = (arr) => {
    let res = 0;
    if (!arr || !arr.length) {
        return res;
    }

    res = 1;
    if (arr.length === 1) {
        return res;
    }

    let i;
    if(arr[0] === arr[arr.length - 1]) {
        return res;
    } else {
        minMoves(arr);
    }

    return res;
};

const minMoves = (arr) => {
    let graph = new Graph();
    let arrMap = {}, len = arr.length;
    arr.forEach((item, index) => {
        if(arrMap[item]) {
            addEdgesForValue(graph, index, arrMap[item]);
            arrMap[item].push(index);
        } else {
            arrMap[item] = [index];
        }

        graph.addVertex(index);
        if(index === 0) {
            graph.addEdge(0, 1, 1);
        } else if(index === len -1) {
            graph.addEdge(index, index-1, 1);
        } else {
            graph.addEdge(index, index + 1, 1);
            graph.addEdge(index, index-1, 1);
        }
    });
    console.log(graph);
};

const addEdgesForValue = (graph, target, arr) => {
    arr.forEach((item, index) => {
        graph.addEdge(item, target, 1);
    });
};

export default MinNumberOfMoves;