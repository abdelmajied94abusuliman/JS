let operator = prompt("Enter Ther Operator please :");
    x = prompt("Enter X number please :");
    y = prompt("Enter Y number please :");
    numX = Number(x);
    numY = Number(y);

if ( operator === "+" ) {
    console.log ( numX + "+" + numY + "=" + ( numX + numY));
    document.write ( numX + "+" + numY + "=" + ( numX + numY));
}  
else if ( operator === "-" ) {
    console.log ( numX + "-" + numY + "=" + ( numX - numY));
    document.write ( numX + "-" + numY + "=" + ( numX - numY));
}  
else if ( operator === "*" ) {
    console.log ( numX + "*" + numY + "=" + ( numX * numY));
    document.write ( numX + "*" + numY + "=" + ( numX * numY));
}  
else if ( operator === "/" ) {
    console.log ( numX + "/" + numY + "=" + ( numX / numY));
    document.write ( numX + "/" + numY + "=" + ( numX / numY));
}  
else {
    document.write("You enter a wrong operation");
}