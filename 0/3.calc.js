const calculate = function calculate(a, o, b) {
    if(o === "+") {
        return a + b;
	}
    if(o === "-") {
        return a - b;
    }
    if(o === "/") {
		if (b === 0) {
			return null
		}
        return a / b;
	}
	if(o === "*") {
		return a * b;
    }

	return null;
}

console.log(calculate(8,"+", 0), 8);
console.log(calculate(2,"+", 4), 6);
console.log(calculate(6,"-", 1.5), 4.5)
console.log(calculate(-4,"*", 8), -32)
console.log(calculate(49,"/", -7), -7)
console.log(calculate(8,"m", 2), null)
console.log(calculate(4,"/",0), null);
console.log(calculate(0,"/",12), 0);