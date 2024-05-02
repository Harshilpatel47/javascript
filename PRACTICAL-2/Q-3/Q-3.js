function findMax(num1, num2, num3, num4) {
    let max;

    if (num1 >= num2) {
        if (num1 >= num3) {
            if (num1 >= num4) {
                max = num1;
            } else {
                max = num4;
            }
        } else {
            if (num3 >= num4) {
                max = num3;
            } else {
                max = num4;
            }
        }
    } else {
        if (num2 >= num3) {
            if (num2 >= num4) {
                max = num2;
            } else {
                max = num4;
            }
        } else {
            if (num3 >= num4) {
                max = num3;
            } else {
                max = num4;
            }
        }
    }

    return max;
}

// Example usage:
let num1 = 50, num2 = 125, num3 = 130, num4 = 150;
let max = findMax(num1, num2, num3, num4);
console.log("The maximum of", num1 + ",", num2 + ",", num3 + ", and", num4 + " is:", max);