module.exports = function toReadable (num) {
	let numb = Array.from(num.toString());
	let result;

	let units;
	let dozen = null;
	let hundred = null;

	let one = 'one';
	let two = 'two';
	let three = 'three';
	let four = 'four';
	let five = 'five';
	let six = 'six';
	let seven = 'seven';
    let eight = 'eight'
	let nine = 'nine'

	if (numb.length == 3) {
		if (numb.indexOf('1') == numb.length - 3) {
			hundred = one;
		}
		if (numb.indexOf('2') == numb.length - 3) {
			hundred = two;
		}
		if (numb.indexOf('3') == numb.length - 3) {
			hundred = three;
		}
		if (numb.indexOf('4') == numb.length - 3) {
			hundred = four;
		}
		if (numb.indexOf('5') == numb.length - 3) {
			hundred = five;
		}
		if (numb.indexOf('6') == numb.length - 3) {
			hundred = six;
		}
		if (numb.indexOf('7') == numb.length - 3) {
			hundred = seven;
		}
		if (numb.indexOf('8') == numb.length - 3) {
			hundred = eight;
		}
		if (numb.indexOf('9') == numb.length - 3) {
			hundred = nine;
		}

		findedTw = numb.indexOf('1', 1);
		if (findedTw == numb.length - 2) {
			num = +numb.slice(1, 3).join("");
		}
	}

		if (numb[numb.length - 1] == 1) {
			units = 'one'
		}
		if (numb[numb.length - 1] == 2) {
			units = 'two'
		}
		if (numb[numb.length - 1] == 3) {
			units = 'three'
		}
		if (numb[numb.length - 1] == 4) {
			units = 'four'
		}
		if (numb[numb.length - 1] == 5) {
			units = 'five'
		}
		if (numb[numb.length - 1] == 6) {
			units = 'six'
		}
		if (numb[numb.length - 1] == 7) {
			units = 'seven'
		}
		if (numb[numb.length - 1] == 8) {
			units = 'eight'
		}
		if (numb[numb.length - 1] == 9) {
			units = 'nine'
		}
		if (numb[numb.length - 1] == 0) {
			units = null;
		}

        if (num == 10) {
            units = 'ten'
        }
        if (num == 0) {
            units = 'zero'
        }
			if (num == 11) {
				units = 'eleven'
			}
			if (num == 12) {
				units = 'twelve'
			}
			if (num == 13) {
				units = 'thirteen'
			}
			if (num == 14) {
				units = 'fourteen'
			}
			if (num == 15) {
				units = 'fifteen'
			}
			if (num == 16) {
				units = 'sixteen'
			}
			if (num == 17) {
				units = 'seventeen'
			}
			if (num == 18) {
				units = 'eighteen'
			}
			if (num == 19) {
				units = 'nineteen'
	}

			if (numb[numb.length - 2] == 2) {
				dozen = 'twenty'
			}
			if (numb[numb.length - 2] == 3) {
				dozen = 'thirty'
			}
			if (numb[numb.length - 2] == 4) {
				dozen = 'forty'
			}
			if (numb[numb.length - 2] == 5) {
				dozen = 'fifty'
			}
			if (numb[numb.length - 2] == 6) {
				dozen = 'sixty'
			}
			if (numb[numb.length - 2] == 7) {
				dozen = 'seventy'
			}
			if (numb[numb.length - 2] == 8) {
				dozen = 'eighty'
			}
			if (numb[numb.length - 2] == 9) {
				dozen = 'ninety'
	}

	if (hundred) {
		result = `${hundred} hundred`;
		if (dozen) {
			result = result + ` ${dozen}`;
			if (units) {
				result = result + ` ${units}`;
			}
		} if (!dozen) {
			if (units) {
				result = result + ` ${units}`;
			}
		}
	} else if (dozen) {
		result = `${dozen}`;
		if (units) {
			result = result + ` ${units}`;
		}
	} else result = units;

	return result;
}
