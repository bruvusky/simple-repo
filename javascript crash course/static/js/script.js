//challenge one ypur age in days
function yob() {
    var birthyear = prompt('what year were you born?');
    var ageindays = ((2020 - birthyear) * 365);
    var h1 = document.createElement('h1');
    var textanswer = document.createTextNode('you are ' + ageindays + 'days old.');
    h1.setAttribute("id", "age");
    h1.appendChild(textanswer);
    document.getElementById('flex-box-result').appendChild(h1);
}

function yob1() {

    document.getElementById("age").remove;
}