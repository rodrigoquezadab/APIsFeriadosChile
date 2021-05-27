jQuery.fn.parpadea = function () {
  this.each(function () {
    elem = $(this);
    elem.fadeIn(2500, function () {
      $(this).fadeOut(2500, function () {
        $(this).fadeIn(2500);
      });
    });
  });
  return this;
};
