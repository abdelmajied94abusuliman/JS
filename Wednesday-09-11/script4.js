function showingTxt (shwoTxt, hideShow, showHide) {
    document.getElementById(shwoTxt).style.display = 'block';
    document.getElementById(hideShow).style.display = 'none';
    document.getElementById(showHide).style.display = 'block';
}

function hideTxt (shwoTxt, hideShow, showHide) {
    document.getElementById(shwoTxt).style.display = 'none';
    document.getElementById(hideShow).style.display = 'block';
    document.getElementById(showHide).style.display = 'none';
}