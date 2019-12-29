const MaxConsecutiveRepeatingChar = (str) => {
    if(!str || !str.length) {
        return;
    }

    let index, len = str.length;
    let prev = str.charAt(0), count = 1, max = 1;
    let res = prev;
    for(index = 1; index < len; index++) {
        let curr = str.charAt(index);
        if(curr === prev) {
            count++;
        } else {
            if(count > max) {
                res = prev;
                max = count;
            }
            count = 1;
            prev = curr;
        }
    }
    return res;
};

export default MaxConsecutiveRepeatingChar;