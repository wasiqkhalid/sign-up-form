var check = function() {
    if(document.getElementById('password1').value != document.getElementById('cpassword1').value) {
        
        const doesMatch = document.getElementById('match');
        doesMatch.textContent = "Password does not match"
        
    }
    else {
        const doesMatch = document.getElementById('match');
        doesMatch.textContent= "";
    }
}