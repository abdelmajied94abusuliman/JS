let x = Number(prompt("Please Enter your mark to see your grade in alphabet system :"))

if ( x < 50 ) {
    document.write("FAIL")
}
else if ( ( x => 50 ) && ( x <= 59 )) {
    document.write("D")
}
else if ( (x => 60) && ( x <= 69 ) ) {
    document.write("C")
}
else if ( (x => 70) &&( x <= 79) ) {
    document.write("B")
}
else if ( (x => 80) &&( x <= 89 )) {
    document.write("A")
}
else if ( (x => 90) && (x <= 100 )) {
    document.write("A+")
}
else {
    document.write("Maybe you enter a wrong mark. Please try again.")
}