const quickSort = (arr) => {
    if (arr.length < 2) return arr;

    const pivot = arr[0], left = [], right = [];
    const restArray = arr.slice(1);
    restArray.filter(value => {
        if (value < pivot) {
            left.push(value);
        } else {
            right.push(value);
        }
    });

    return quickSort(left).concat(pivot, right);
}

export default quickSort;