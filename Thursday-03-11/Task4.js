const π = Math.PI

let radius = Number(prompt("Please enter the radius for the Circle you want to calculate it's area :"));
    lengthTheCylinder = Number(prompt("Please enter the length of the Cylinder :"))
    areaOfCircle = π * radius * radius;
    surfaceAreaForCylinder = π * radius * lengthTheCylinder;
    vloumeBall = (4/3) * π * Math.pow(radius , 3);

document.write("The area of the Circle = " + areaOfCircle );
document.write("<br>");
document.write("The surface area of the Cylinder = " + surfaceAreaForCylinder );
document.write("<br>");
document.write("The volume of the Ball = " + vloumeBall);