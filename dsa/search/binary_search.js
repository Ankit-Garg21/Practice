import Comparator from '../comparator';

const binarySearch = (array, item, compare) => {
    if(!array || !array.length) {
        return;
    }
    const comparator = new Comparator(compare);
    let start = 0, end = array.length - 1;
    let index = -1;
    while(start <= end) {
        let middle = Math.floor((end+start)/2);
        if(comparator.equal(array[middle], item)) {
            index = middle;
            break;
        } else if(comparator.lessThan(array[middle], item)) {
            start = middle + 1;
        } else {
            end = middle - 1;
        }
    }

    return index;
};

export default binarySearch;