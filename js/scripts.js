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
        $(".tarantula", ".snake", ".fish").hide();
        $(".mouse").show();
      } else if (animal === "fish") {
        $(".tarantula", ".snake", ".mouse").hide();
        $(".fish").show();
      } else if (animal === "snake") {
        $(".tarantula", ".fish", ".mouse").hide();
        $(".snake").show();
      } else if (animal === "tarantula") {
        $(".fish", ".snake", ".mouse").hide();
        $(".tarantula").show();
      } else {
        console.log("Error with animal");
      }

      $('#animal-container').show();


      event.preventDefault();
  });

});
