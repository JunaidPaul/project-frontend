$(document).ready(function(){
  var control = document.getElementById("fileUpload");
  var fileDisplayArea = document.getElementById('fileDisplayArea');
  control.addEventListener("change", function(event) {
    var files = event.target.files[0];
    var reader = new FileReader();
    reader.onload = function(event) {
      fileDisplayArea.innerText = reader.result;
      var data = $('#fileDisplayArea').text();
      console.log(typeof data);
      console.log(data.split(','));
    }
    reader.readAsText(files);
});
});
