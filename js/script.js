

$('.flag').click(function(e) {
  $(e.target).toggleClass('selected');

  var flagnames = [];
  var flags = [];

  $('.selected').each(function(index) {
    flagnames.push(this.id);
    flags.push("url(img/" + this.id + ".png)");
  });

  $('#flagname').text(flagnames.join(" + "));
  $('#result').css('background-image', flags.join(","));
});

$('#blendmode').change(function(e) {
  $('#result').css('background-blend-mode', this.value);
});


$('.blendmode').change(function(e) {
  $('#result').css('background-blend-mode', this.value);
});
