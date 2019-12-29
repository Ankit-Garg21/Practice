const MaxWaterBottles = (money, plastic, glass, refund) => {
    let res = 0;

    if(!money || (money < plastic && money < glass)) {
        return res;
    }

    if(glass <= refund || plastic === 0 || glass === 0) {
        return "Infinite";
    }

    if(plastic <= (glass - refund)) {
        res = Math.floor(money / plastic);
    } else {
        while(money >= glass) {
            let numberOfGlass = Math.floor(money / glass);
            res = res + numberOfGlass;

            money = money - (numberOfGlass * glass) + (numberOfGlass * refund); 
        }

        res = res + Math.floor(money / plastic);
    }
    return res;
};

export default MaxWaterBottles;