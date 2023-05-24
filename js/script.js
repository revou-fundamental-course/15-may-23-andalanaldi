function calculateArea() {
    var sidearea = document.getElementById("Side-Area").value;
    // console.log(sidearea)

    var formula = "A = S x S"

    document.getElementById("Formula-Area").innerHTML = formula;

    var process = `A = ${sidearea} x ${sidearea}`

    document.getElementById("Calculation-Area").innerHTML = process;

    var area = sidearea * sidearea;
    // console.log(area)

    var result = "A = " + area 

    document.getElementById("Output-Area").innerHTML = result;
}
// function of calculateArea() is useful not only for giving Area of Square calculation result, 
// but also describing the process of calculation too. This is used for calculation button.  
function myReset() {
    document.getElementById("Side-Area").value = ''
    document.getElementById("Formula-Area").innerHTML = '';
    document.getElementById("Calculation-Area").innerHTML = '';
    document.getElementById("Output-Area").innerHTML = '';
}
// myReset() function is used to delete side area number input, its calculation process and result.
// Next part is for perimerter but basically just the same with how Area function is used.
function calculatePerimeter() {
    var sideperimeter = document.getElementById("Side-Perimeter").value;
    // console.log(sideperimeter)

    var formula = "P = 4 x S"

    document.getElementById("Formula-Perimeter").innerHTML = formula;

    var process = `P = ${4} x ${sideperimeter}`

    document.getElementById("Calculation-Perimeter").innerHTML = process;

    var perimeter = 4 * sideperimeter;
    // console.log(perimeter)

    var result = "P = " + perimeter 

    document.getElementById("Output-Perimeter").innerHTML = result;
}
function myReset2() {
    document.getElementById("Side-Perimeter").value = ''
    document.getElementById("Formula-Perimeter").innerHTML = '';
    document.getElementById("Calculation-Perimeter").innerHTML = '';
    document.getElementById("Output-Perimeter").innerHTML = '';
}