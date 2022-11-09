function makeBold() {
    let boxBold = document.getElementById("bld");
    if (boxBold.checked == true ) {
        document.getElementById("text").style.fontWeight = 'bold';   
    }
    else {
        document.getElementById("text").style.fontWeight = 'normal';
    }
}

function putUnderLine () {
    let boxLine = document.getElementById("udl");
    if (boxLine.checked == true){
        document.getElementById("text").style.textDecoration = 'underline';
    }
    else {
        document.getElementById("text").style.textDecoration = 'none';
    }
}

function sizeTxt (textSize) {
    var size = document.getElementById(textSize).value;
    document.getElementById("text").style.fontSize = size;
}

function textFamily(textFam) {
    var family = document.getElementById(textFam).value;
    document.getElementById("text").style.fontFamily = family;
}
