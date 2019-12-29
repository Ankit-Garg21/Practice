const LNRS = (str) => {
    let len = str.length;
    let visited = {}, max = 1, current = 1;

    visited[str.charAt(0)] = 0;
    let index, char, prev;
    for(index = 1; index < len; index++) {
        char = str.charAt(index);
        prev = visited[char];

        if((!prev && prev !== 0) || index - current > prev) {
            current++;
        } else {
            if(current >= max) {
                max = current;
            }
            current = index - prev;
        }

        visited[char] = index;
    }
    if(current > max) {
        max = current;
    }

    return max;
}

export default LNRS;