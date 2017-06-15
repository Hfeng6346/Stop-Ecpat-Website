function search(str) {
  if (str.length == 0) {
    document.getElementById("searchDisplay").innerHTML = "";
    return;
  }
  else {
    var request = new XMLHttpRequest();
    request.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById("searchDisplay").innerHTML = this.responseText;
      }
    };
    request.open("POST", "search.php?search="+str, true);
    request.send();
  }
}
