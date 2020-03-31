$(document).ready(function() {
  $("#master").submit(function() {

    event.preventDefault();

    var userCountTo = parseInt($("input#countTo").val());
    var userCountBy = parseInt($("input#countBy").val());
    //var userCountToArray = userCountTo.split(' ');
    //var userCountByArray = userCountBy.split(' ');
    var resultArray = [];


    

    
    for (var index = 0; index <= userCountTo; index += userCountBy) {

      //resultArray.push(index);
      $("#output").append(index);
      console.log(index);
      console.log("this is working")
    }
    
  })
}); 