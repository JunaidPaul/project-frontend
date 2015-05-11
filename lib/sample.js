$(document).ready(function(){
  var control = document.getElementById("fileUpload");
  control.addEventListener("change", function(event) {

    var form = new FormData();
    // form.append("data", control.files[0]);
    var reader = new FileReader();
    reader.onload = function(event) {
      var csvData = event.target.result;
      console.log(csvData);
      console.log(typeof csvData);
      form.append("data", csvData);

      // var xhr = new XMLHttpRequest();
      // xhr.onload = function() {
      //     console.log("Upload complete.");
      // };
      // xhr.open("post", "http://localhost:3000/gitlab/upload/csv", true);
      // xhr.send(form);
    }
    console.log(control.files[0]);


}, false);


});
