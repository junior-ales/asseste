var activeLink = {
  init: function() {
    var uri = window.location.pathname.slice(1);
    $('[data-nav-link]').each(function(i, elem) {
      if($(elem).data('nav-link') === uri) { $(elem).addClass('active'); }
    });
  }
};

$(document).ready(function() {
  activeLink.init();
});
