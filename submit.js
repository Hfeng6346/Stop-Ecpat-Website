function contact() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var msg = document.getElementById("msg").value;
    var request = new XMLHttpRequest();
    request.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById("contact").style.display = "none";
        document.getElementById("submit").innerHTML = "Your message has been sent. For more information, please visit Ecpat-USA by clicking on the links down below.";
      }
    };
    request.open("POST", "submit.php?q1="+name+"&q2="+email+"&q3="+msg, true);
    request.send();
}
