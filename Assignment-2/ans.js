/*
*   VERY EASY
*   Q-1
*/

function convert(m) {
    return m * 60;
}

/*
*      Very Easy
*       Q-2
*/

function dividesEvenly(a, b) {
    if (a % b === 0) {
        return true;
    } else {
        return false;
    }
}

/*
*   Easy
*   Q-1
*/

function charCount(str1, str2) {
    let l = str2.length;
    let count = 0;
    for (var i = 0; i < l; i++) {
        if (str2.charAt(i) === str1) {
            count++;
        }
    }
    return count;
}


/*
*   Easy
*   Q-2
*/

function addUp(x) {
    var y = 0;
    for (var i = x; i > 0; i--) {
        y += i;
    }
    return y;
}

/*
*   Easy
*   Q-3
*/

function replaceVowel(str) {
    let l = str.length;
    var srt = str.split("");
    for (var i = 0; i < l; i++) {
        if (srt[i] === 'a') {
            srt.splice(i, 1, 1);
        } else if (srt[i] === 'e') {
            srt.splice(i, 1, 2);
        } else if (srt[i] === 'i') {
            srt.splice(i, 1, 3);
        } else if (srt[i] === 'o') {
            srt.splice(i, 1, 4);
        } else if (srt[i] === 'u') {
            srt.splice(i, 1, 5);
        }
    }
    var joinStr = srt.join("");
    return joinStr;
}

/*
*   Medium
*   Q-1
*/

function specialReverse(str1, str2) {
    let arrW = str1.split(' ');
    for (var i = 0; i < arrW.length; i++) {
        var arrL = arrW[i].split('');
        if (arrL[0] === str2) {
            let temp = arrW[i].split('').reverse().join('');
            let idx = arrW.indexOf(arrW[i]);
            arrW.splice(idx, 1, temp);
        }
        arrW.join('');
    }
    return arrW.join(' ');
}



/*
*      Medium
*       Q-2
*/

const testJackpot = arr => arr.every(i => i === arr[0]);


/*
*      Medium
*       Q-3
*/

function removeDups(arr) {
    var Arr = [];
    for (var i = 0; i < arr.length; i++) {
        if (Arr.includes(arr[i])) {
            continue;
        } else {
            Arr.push(arr[i]);
        }
    }
    return Arr;
}

/*
*       Hard
*       Q-1(D)
*/


/*
*       Hard
*       Q-2(D)
*/

function numInStr(arr) {
    let Arr = [];
    for (var i = 0; i < arr.length; i++) {
        if(checkStringForNumbers(arr[i])){
            Arr.push(arr[i]);
        }
    }
    return Arr;
}


function checkStringForNumbers(str) {
    for (var i = 0; i < str.length; i++) {
        if (!isNaN(str.charAt(i))) {
            return true;
        }
    }
    return false;
}