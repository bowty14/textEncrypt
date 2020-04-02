 function finish(inputText) {
   console.log(inputText);
  var firstSentence = inputText.toLowerCase();
  var ignore = /[,.!?:'";<>@#$%ˆ&*1234567890 ]/g;
  return firstSentence.replace(ignore, "");
  
  
 };







 $(document).ready(function() {
   $('form#crypt').submit(function(event) {
    event.preventDefault();

    var inputText = $("input#inputText").val();
    var result = finish(inputText);

    $('.output').text(result);
   });
  });


//  $(document).ready(function () {
//    $("form#convert").submit(function (event) {
//      event.preventDefault();
//      var number = parseInt($("input#numInput").val());
//      var result = convertToRoman(number);
//      if (result) {
//        $(".result").text(result);
//      }