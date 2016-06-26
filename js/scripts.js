function phoneFormat(numbers) {
  var numArray = numbers;
  numArray.splice(0,0,"(");
  numArray.splice(4,0,")");
  numArray.splice(5,0," ");
  numArray.splice(9,0,"-");
  var result = numArray.join('');
  return result;
}

$(document).ready(function(){
  $('.myForm').submit(function(event){
    event.preventDefault();
    $('#result').empty();
    var inputLength = 0;
    var input = $('#input').val();
    inputLength = input.split("");
    console.log("inputsplitlength:" + inputLength.length)
    if (inputLength.length != 10) {
      alert("please type 10 numbers");
      input = '';
    } else {
      var myArray = input.split("");
      console.log("myArray: " + myArray)
      for (var i = 0; i < myArray.length; i++) {
        myArray[i] = +myArray[i];
      }
      var param = myArray;
      var result = phoneFormat(param);
      $('#result').append(result);
    }
  });
});
