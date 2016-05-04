$(document).ready(function() {

  $.get('http://www.omdbapi.com/?t=titanic', function(data) {
    console.log(data);
  });

});
