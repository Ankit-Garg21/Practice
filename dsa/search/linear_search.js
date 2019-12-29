import Comparator from '../comparator';

const linearSearch = (array, item, compare) => {
    if(!array || !array.length) {
        return;
    }
    const comparator = new Comparator(compare);
    let indices = [];
    array.forEach((element, index) => {
        if(comparator.equal(element, item)) {
            indices.push(index);
        }
    });

    return indices;
};

export default linearSearch;