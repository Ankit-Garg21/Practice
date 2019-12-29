const CountWaysForStairs = (noOfStairs, maxSteps) => {
    let cache = {};
    return CountWays(noOfStairs, maxSteps, cache);
};

const CountWays = (noOfStairs, maxSteps, cache) => {
    if(noOfStairs < 0) {
        return 0;
    }

    if(noOfStairs <= 1) {
        return 1;
    }

    if(cache[noOfStairs]) {
        return cache[noOfStairs];
    }

    let res = 0, index;
    for(index = 1; index <= maxSteps; index++) {
        res += CountWays(noOfStairs - index, maxSteps, cache);
    }

    cache[noOfStairs] = res;
    return res;
};

export default CountWaysForStairs;