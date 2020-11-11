function getparagraph1() {
var inputs=[];

for(var i=1; i<=6; i++) {
    
    inputs.push(document.getElementById("para1_input_box_"+i).value);
}
document.getElementById("showparagraph1").innerHTML=inputs.join(". ");
}
function getparagraph2() {
    var inputs2=[];
    
    for(var i=1; i<=6; i++) {
        
        inputs2.push(document.getElementById("para2_input_box_"+i).value);
    }
    document.getElementById("showparagraph2").innerHTML=inputs2.join(". ");
    }