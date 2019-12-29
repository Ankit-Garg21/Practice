const BiggestNumber = (arr) => {
    if(!arr || !arr.length) {
        return;
    }

    arr.sort((a, b) => {
        a = a.toString(); b = b.toString();
        return (a+b) > (b+a) ? -1 : 1;
    })
    
    return arr.join("");
};

export default BiggestNumber;