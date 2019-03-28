$(function() {
  $('button').click(function () {
    var age = parseInt($("input#ageInput").val());
    if (age <= 2) {
      $('.over2').hide();
      $('.under2').show();
    } else if (age > 2) {
      $('.under2').hide();
      $('.over2').show();
    } else {
      console.log('Error with ageInput');
    }

    $('.hidden-question').show();

  });

    $("form").submit(function(event) {
      var animal = $("input:radio[name=pet]:checked").val();
      console.log(animal)
      if (animal === "mouse") {
        $(".animal:not(#mouse)").hide();
        $("#mouse").show();
      } else if (animal === "fish") {
        $(".animal:not(#fish)").hide();
        $("#fish").show();
      } else if (animal === "snake") {
        $(".animal:not(#snake)").hide();
        $("#snake").show();
      } else if (animal === "tarantula") {
        $(".animal:not(#tarantula)").hide();
        $("#tarantula").show();
      } else {
        console.log("Error with animal");
      }

      $('#animal-container').show();


      event.preventDefault();
  });

});
