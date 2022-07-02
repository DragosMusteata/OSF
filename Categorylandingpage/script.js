$('.favorite').click(function() {
    $('#favorite-o').html(function(i, val) { return val*1+1 });
  });
  
  $('.cart').click(function() {
    $('#shoping-o').html(function(i, val) { return val*1+1 });
  });