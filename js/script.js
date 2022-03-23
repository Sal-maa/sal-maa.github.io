const txtElement = ['Golang Developer Based on Sidoarjo, Indonesia.'];
let count=0;
let txtIndex = 0;
let currentTxt = '';
let words = '';

(function type(){
    if (count==txtElement.length){
        count = 0;
    }

    currentTxt = txtElement[count];

    words = currentTxt.slice(0,++txtIndex);
    document.querySelector('.efek-type').textContent = words;

    setTimeout(type,100);

    if (words.length ==currentTxt.length){
        count++;
        txtIndex=0;
    }
})();