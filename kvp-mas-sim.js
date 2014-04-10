$(function() {
  $('#ma-dropdown').change(function() {
    if ($(this).val() === '375') {
	  if (($('#time-dropdown').val() === '0.5') || ($('#time-dropdown').val() === '1')) {
	    $('#time-dropdown').val('0.02');
	  }
	  $('#time-dropdown option[value="0.5"]').remove();
	  $('#time-dropdown option[value="1"]').remove();
    }
    else if ($(this).val() === '200') {
      if ($('#time-dropdown').val() === '1') {
	    $('#time-dropdown').val('0.02');
	  }

	  if ($('#time-dropdown option[value="0.5"]').length === 0) {
	    $('#time-dropdown').append('<option value="0.5">0.5</option>')
	  }

	  $('#time-dropdown option[value="1"]').remove();
    }
    else {
      if ($('#time-dropdown option[value="0.5"]').length === 0) {
        $('#time-dropdown').append('<option value="0.5">0.5</option>');
      }

      if ($('#time-dropdown option[value="1"]').length === 0) {
        $('#time-dropdown').append('<option value="1">1</option>');
      }
    }

    changeTaperImage();
  });

  $('#kvp-dropdown').change(function() {
	changeTaperImage();
  });

  $('#time-dropdown').change(function() {
	changeTaperImage();
	$('#time-3d').text('Time = ' + $(this).val() + ' s');
  });

  function changeTaperImage() {
    var xShiftMult = parseInt($('#kvp-dropdown').val());
    var yShiftPre = parseInt($('#ma-dropdown').val()) * parseFloat($('#time-dropdown').val());
    var yShiftSide = parseInt($('#ma-dropdown').val());
    var yShiftMult = 0;

    switch (yShiftPre) {
	  case 2:
	    yShiftMult = 0;
	    break;
	  case 4:
	    yShiftMult = 1;
	    break;
	  case 7.5:
	    yShiftMult = 2;
	    break;
	  case 10:
	    yShiftMult = 3;
	    break;
	  case 20:
	    yShiftMult = 4;
	    break;
	  case 37.5:
	    yShiftMult = 5;
	    break;
	  case 50:
	    yShiftMult = 6;
	    break;
	  case 100:
	    yShiftMult = 7;
	    break;
	  default:
	    console.log('Unexpected mAs value!');
	}

    $('#stepped-taper').css('background-position', (-1 * xShiftMult * 240) + ' ' + (-1 * yShiftMult * 160) + 'px');

    yShiftMult = 0;

    switch (yShiftSide) {
	  case 100:
	    yShiftMult = 0;
	    break;
	  case 200:
	    yShiftMult = 1;
	    break;
	  case 375:
	    yShiftMult = 2;
	    break;
	  default:
	    console.log('Unexpected mA value!');
	}
	
	$('#stepped-taper-3d').css('background-position', (-1 * xShiftMult * 360) + ' ' + (-1 * yShiftMult * 340) + 'px');
  }
});