const FNRC = (str) => {
    if(!str || !str.length) {
        return -1;
    }

    const len = str.length;
    let index = 0;
    let charMap = {};
    for(index = 0; index < len; index++) {
        let char = str.charAt(index);
        if(charMap[char] >= 0) {
            charMap[char] = -1;
        } else if(charMap[char] !== -1) {
            charMap[char] = index;
        }
    }
    
    let min;
    Object.keys(charMap).forEach((char) => {
        let value = charMap[char];
        if(value !== -1) {
            if(!min && min !== 0) {
                min = value;
            } else if(min > value) {
                min = value;
            }
        }
    })

    if(min || min === 0) {
        return str.charAt(min);
    }
    return -1;
}

export default FNRC;