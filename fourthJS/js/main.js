//Task1
function MinValue(mass) {
    var min = mass[0];
    if (Array.isArray(mass)) {

        for (i = 0; i <= mass.length; i++) {

            if (mass[i] < min) {
                min = i;
            }
            console.log(min);
        }
    }
    else {
        alert('Array deyil!')
        console.log("Daxil etdiyiniz array deyil!");
    }
}
MinValue([224, 223, 312, 324, 345, 3145, 322, 433, 4312]);


//Task2

var FindSameLetters = function(text) {

    for(var i = 0; i <= text.length; i++) {

        for(var j = i+1; j <= text.length; j++) {

            if(text[j] == text[i]) {
                console.log(text[i]);
            }
        }
    }
}

FindSameLetters('salam')


//Task3

function Palindrome(text) {

    if (typeof (text) === "string") {
        for (i = 0; i <= text.length; i++) {

            if (text[i] === text[text.length - 1 - i]) {

                if (text.length - 1 - i === 0) {

                    console.log('Text is Palindrome');
                    break;
                }
            }

            else {
                console.log("Text is not Palindrome");
            }
        }
    }

}
Palindrome('level')
Palindrome('apple')
