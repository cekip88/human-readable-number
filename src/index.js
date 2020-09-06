module.exports = function toReadable (number) {
    let answer = '',
        numberStr = '' + number;
    if(numberStr.length > 2){
        let hundreds = numberStr[0];
        if(hundreds === '1'){
            answer = 'one hundred ';
        } else if(hundreds === '2'){
            answer = 'two hundred ';
        }else if(hundreds === '3'){
            answer = 'three hundred ';
        }else if(hundreds === '4'){
            answer = 'four hundred ';
        }else if(hundreds === '5'){
            answer = 'five hundred ';
        }else if(hundreds === '6'){
            answer = 'six hundred ';
        }else if(hundreds === '7'){
            answer = 'seven hundred ';
        }else if(hundreds === '8'){
            answer = 'eight hundred ';
        }else if(hundreds === '9'){
            answer = 'nine hundred ';
        }
    }
    if(numberStr.length > 1){
        let dozens = numberStr[numberStr.length - 2];
        let unit = numberStr[numberStr.length - 1];
        if(dozens === '1'){
            if(unit === '1'){
                answer += 'eleven'
            } else if (unit === '2'){
                answer += 'twelve'
            }else if (unit === '3'){
                answer += 'thirteen'
            }else if (unit === '4'){
                answer += 'fourteen'
            }else if (unit === '5'){
                answer += 'fifteen'
            }else if (unit === '6'){
                answer += 'sixteen'
            }else if (unit === '7'){
                answer += 'seventeen'
            }else if (unit === '8'){
                answer += 'eighteen'
            }else if (unit === '9'){
                answer += 'nineteen'
            }else if (unit === '0'){
                answer += 'ten'
            }
        } else if (dozens === '2') {
            answer += 'twenty '
        }else if (dozens === '3') {
            answer += 'thirty '
        }else if (dozens === '4') {
            answer += 'forty '
        }else if (dozens === '5') {
            answer += 'fifty '
        }else if (dozens === '6') {
            answer += 'sixty '
        }else if (dozens === '7') {
            answer += 'seventy '
        }else if (dozens === '8') {
            answer += 'eighty '
        }else if (dozens === '9') {
            answer += 'ninety '
        }
    }
    if ((numberStr.length < 2) || ((numberStr.length > 1) && ((numberStr[numberStr.length - 2] * 1 >= 2) || (numberStr[numberStr.length - 2] * 1 < 1)))){
        let units = numberStr[numberStr.length - 1];
        if(units === '1') answer += 'one';
        else if (units === '2') answer += 'two';
        else if (units === '3') answer += 'three';
        else if (units === '4') answer += 'four';
        else if (units === '5') answer += 'five';
        else if (units === '6') answer += 'six';
        else if (units === '7') answer += 'seven';
        else if (units === '8') answer += 'eight';
        else if (units === '9') answer += 'nine';
    }
    if(numberStr.length > 1 && numberStr[numberStr.length - 1] === '0' && (numberStr[numberStr.length - 2] > 1 || numberStr[numberStr.length - 2] < 1)){
        answer = answer.substring(0, answer.length - 1)
    }
    if(number === 0) answer = 'zero';
    return answer;
};
