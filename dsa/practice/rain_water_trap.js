const RainWaterTrap = (arr) => {
    if(!arr || !arr.length) {
        return;
    }
    let index = 0, len = arr.length;
    let left = [], right = [], res = 0;

    left[0] = arr[0];
    for(index=1; index < len; index++) {
        left[index] = Math.max(left[index - 1], arr[index]);
    }

    right[len - 1] = arr[len - 1];
    for(index = len-2; index >= 0; index--) {
        right[index] = Math.max(right[index + 1], arr[index]);
    }

    for(index = 0; index < len; index++) {
        res += Math.min(left[index], right[index]) - arr[index];
    }

    return res;
}

export default RainWaterTrap;