//508 tabbing

$("a, button, input, [tabIndex='0'], #one, .closeRadio, #close, .form-control, #closeThisPlease, #sendMessage, textarea").on("keyup", function (e) {
  var code = (e.keyCode ? e.keyCode : e.which);
  if (code == 9) {
    $(this).css('outline', 'dashed 3px #4599ff')
  }

})
$("a, button, input, [tabIndex='0'], #one, .closeRadio, #close, .form-control, #closeThisPlease, #sendMessage, textarea").on('focusout', function() {
  $(this).css('outline', 'none')
})

//contact form

var contactChildren = $("#slideOut .modal-header [tabIndex], #slideOut .modal-body [tabIndex], #slideOut").each(function() {
  $(this).attr('tabindex', '-1')
})


var contactTabs = $("#slideOut a").each(function() {
  $(this).attr('tabindex', '-1')

})



var open = function() {

  $('.contactUsOverlay').show();
  $(contactChildren, contactTabs).attr('tabindex', '0')


  $('#theform input').each(function () {
    $(this).attr('tabindex', '0');
  });

  $('.modal-content').addClass('opened')
  $("#slideOut").addClass('showSlideOut');
  setTimeout(function() {
    $('body').addClass('showContact')
  }, 300)

}
$('#one').keypress(
  open

).click(
  open
);



$('.contactUsOverlay').on('click', function(e) {

  if($('body').hasClass('showContact')) {

    $('.contactUsOverlay').hide()

    $(contactChildren, contactTabs).attr('tabindex', '-1')
    $('#theform input').each(function () {
      $(this).attr('tabindex', '-1');
    });

    $("#slideOut").removeClass('showSlideOut');

    setTimeout(function() {
      $('body').removeClass('showContact')
    }, 300)

  }
})

var close = function() {

  $('.contactUsOverlay').hide();
  $(contactChildren, contactTabs).attr('tabindex', '-1')
  $('#theform input').each(function () {
    $(this).attr('tabindex', '-1');
  });

  $("#slideOut").removeClass('showSlideOut');


}

$('#close').keypress(
  close

).click(
  close
);







//validate and send message on contact form and toast message


$("#theform").validate(
  {
    rules:
    {
      email:
      {
        required: true,
        email: true

      }

    }
  });


  $('#theform input').keydown(function (event) {
    if(!$('#formControl1').val() == '' && !$('#formControl2').val() == '' )  {

      $('#sendMessage').addClass('activated').removeClass('inactive')


    }

  })

  $("#slideOut .form-check").on("keyup", function (e) {

    var code = (e.keyCode ? e.keyCode : e.which);
    if (code == 9) {
      $('.form-check').each(function() {
        $(this).addClass('focusClass')
      });

    }

  })


  $(".survey-container .form-check").on("keyup", function (e) {

    var code = (e.keyCode ? e.keyCode : e.which);
    if (code == 9) {
      $('.form-check').each(function() {
        $(this).addClass('focusClass')
      });

    }

  })

  //end contact form


  function show() {
    var p = $('#AccessCode');
    p.attr('type', 'text');
  }

  function hide() {
    var p = $('#AccessCode');
    p.attr('type', 'password');
  }


  var pwShown = 0;

  var togglepwd = function() {

    if (pwShown == 0) {
      pwShown = 1;
      show();

      $("#eye").replaceWith('<i id="eye" class="fas fa-eye-slash"></i>');


      $('#access').html('Hide PIN')

    } else {
      pwShown = 0;
      hide();

      $("#eye").replaceWith('<i id="eye" class="far fa-eye"></i>');
      $('#access').html('Show PIN')
    }

  }

  $('#togglepwd, .togglePassword').keypress(
    togglepwd

  ).click(
    togglepwd
  );



  $('.form-signin-input input').keydown(function(event) {
    $('.btnBegin').removeClass('inactive')

  });






  function scrollfn(e) {
    let $target = $(e),
    offSet = e === "#Home" ? 0 : $target.offset().top;
    $('html, body').stop().animate({
      'scrollTop': offSet
    }, 1200, 'swing');

  }

  $('.menu-buttons-list li, .menu-buttons-floating-list li, .menu-buttons-768-list li').on('click', function (e) {

    e.preventDefault();
    scrollfn($(this).attr('data-target'));
  });

  $('.menu-buttons-list li, .menu-buttons-floating-list li, .menu-buttons-768-list li').on('keypress', function (e) {

    e.preventDefault();
    scrollfn($(this).attr('data-target'));
  });


  $('.collapse').on('show.bs.collapse', function () {
    $('a[href="#' + this.id + '"] .caret-down').css({
      transform: "rotate(180deg)"
    });
    $('a[href="#' + this.id + '"] .iques').css({
      opacity: "1"
    });
  });
  $('.collapse').on('hide.bs.collapse', function () {
    $('a[href="#' + this.id + '"] .caret-down').css({
      transform: "rotate(0deg)"
    });
    $('a[href="#' + this.id + '"] .iques').css({
      opacity: "0.4"
    });
  });




  $(window).scroll(function () {
    var distanceY = window.pageYOffset || document.documentElement.scrollTop;
    if (distanceY > 150) {
      $('.btnContact').css({
        top: "92px"
      })
      $('.menu-buttons-floating').css({
        opacity: '1',
        visibility: 'visible'
      })
    } else {
      $('.btnContact').css({
        top: "192px"
      })
      $('.menu-buttons-floating').css({
        opacity: '0',
        visibility: 'hidden'
      })
    }
  });




  $('.radio-inline input').on('keyup', function(e) {

    var code = (e.keyCode ? e.keyCode : e.which);
    if (code == 9 ) {

      $('.radio-inline input').change(function (e) {

        setReasonActive();

      })

      function setReasonActive() {
        $('.radio-inline input').each(function () {
          if ($(this).prop('checked')) {
            $(this).parents('.vertical').css('background' ,'#0a5799');

          } else {
            $(this).parents('.vertical').css( 'background' ,'transparent')
          }
        })
      }

      setReasonActive()


    }
  })





  $('.radio-inline input').change(function (e) {

    setReasonActive();

  })

  function setReasonActive() {
    $('.radio-inline input').each(function () {
      if ($(this).prop('checked')) {
        $(this).closest('.vertical').find('i').css('color', '#BEF381')
        $(this).parents('.vertical').css('background' ,'#0a5799');

      } else {
        $(this).parents('.vertical').css( 'background' ,'transparent')
        $(this).closest('.vertical').find('i').css('color', 'white')
      }
    })
  }

  setReasonActive()



  if ($(document).innerWidth() <= 767) {

    $('.openTab').html('<i class="fas fa-envelope"></i>')
    $('#one').css('right', '-10px')

  }
