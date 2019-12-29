const RunLengthEncoding = (str) => {
    if(!str || !str.length) {
        return;
    }

    let index, len = str.length;
    let prev = str.charAt(0), count = 1, res = "";
    for(index = 1; index < len; index++) {
        let curr = str.charAt(index);
        if(curr === prev) {
            count++;
        } else {
            res = res + prev + count;
            count = 1;
            prev = curr;
        }
    }
    
    res = res + prev + count;
    return res;
};

export default RunLengthEncoding;