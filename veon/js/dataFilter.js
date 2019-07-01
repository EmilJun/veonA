$(function() {
  $('input[name="birthday"]').daterangepicker({
    singleDatePicker: true,
    minYear: 1901,
    timePicker: true,
    maxYear: parseInt(moment().format('YYYY'),10)
  }, function(start, end, label) {
  	 var years = moment().diff(start, 'years');

  });
});