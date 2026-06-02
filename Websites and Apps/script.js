function welcome() {
    alert("Welcome to EduBridge Tutors!");
}
function callSatish() {
    window.location.href = "tel:+919937388562";
}
function callMund() {
    window.location.href = "tel:+919178890390";
}
function goToTutors() {
    let section =
document.getElementById("tutors");
  
console.log(section);
    
        section.scrollIntoView({ 
        behavior: "smooth" 
    });
}