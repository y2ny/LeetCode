function romanToInt(s: string): number { 
    const splittedS = s.split("").map(character => {
        if (character === "I") return 1;
        else if (character === "V") return 5;
        else if (character === "X") return 10;
        else if (character === "L") return 50;
        else if (character === "C") return 100;
        else if (character === "D") return 500;
        else if (character === "M") return 1000;
        else throw new Error("unexpected error, not defined roman symbol");
    });
    
    let index = 0;
    let total = 0;
    
    while (index < splittedS.length) {      
        if (index === splittedS.length-1) {
            total += splittedS[index];
            
            break;
        }
        
        if (splittedS[index] >= splittedS[index+1]) {
            total += splittedS[index];
            index += 1;
        } else {
            total += splittedS[index+1] - splittedS[index];
            index += 2;
        }
    }
    
    return total;
};