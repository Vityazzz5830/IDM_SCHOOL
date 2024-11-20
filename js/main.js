var emailInputs = document.querySelectorAll('input[data-email-input]');

$(emailInputs).on('keypress', function() {
    var that = this;

    setTimeout(function() {
        var res = /[^aA-zZ1234567890@.?!%&()><*-_]/g.exec(that.value);
        console.log(res);
        that.value = that.value.replace(res, '');
    }, 0);
});



var nameInputs = document.querySelectorAll('input[data-name-input]');

$(nameInputs).on('keypress', function() {
    var that = this;

    setTimeout(function() {
        var res = /[^аА-яЯ]/g.exec(that.value);
        console.log(res);
        that.value = that.value.replace(res, '');
    }, 0);
});


window.addEventListener("DOMContentLoaded", function() {
  [].forEach.call( document.querySelectorAll('input[data-tel-input]'), function(input) {
    var keyCode;
    function mask(event) {
      event.keyCode && (keyCode = event.keyCode);
      var pos = this.selectionStart;
      if (pos < 3) event.preventDefault();
      var matrix = "+7 (___) ___ ____",
          i = 0,
          def = matrix.replace(/\D/g, ""),
          val = this.value.replace(/\D/g, ""),
          new_value = matrix.replace(/[_\d]/g, function(a) {
              return i < val.length ? val.charAt(i++) : a
          });
      i = new_value.indexOf("_");
      if (i != -1) {
          i < 5 && (i = 3);
          new_value = new_value.slice(0, i)
      }
      var reg = matrix.substr(0, this.value.length).replace(/_+/g,
          function(a) {
              return "\\d{1," + a.length + "}"
          }).replace(/[+()]/g, "\\$&");
      reg = new RegExp("^" + reg + "$");
      if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) {
        this.value = new_value;
      }
      if (event.type == "blur" && this.value.length < 5) {
        this.value = "";
      }
    }

    input.addEventListener("input", mask, false);
    input.addEventListener("focus", mask, false);
    input.addEventListener("blur", mask, false);
    input.addEventListener("keydown", mask, false);
  });
});

/*--------------BURGER MENU-----------------------*/

const hamb = document.querySelector("#hamb");
const popup = document.querySelector("#popup");
const close_popup = document.querySelector("#close_popup");

const body = document.body;
let listitembtn = document.getElementsByClassName('header_content-wrap-navmenu-list-item');

hamb.addEventListener("click", hambHandler);
close_popup.addEventListener("click", hambHandler);

function hambHandler(e) {
  e.preventDefault();
  // Переключаем стили элементов при клике
  popup.classList.toggle("open");
  hamb.classList.toggle("active");
  body.classList.toggle("noscroll");
}

for (let n = 0; n < listitembtn.length; n++) {
  listitembtn[n].addEventListener('click', function() {
     popup.classList.toggle("open");
     body.classList.toggle("noscroll");
  });
}






$('.input-file input[type=file]').on('change', function(){
  let file = this.files[0];
  $(this).closest('.input-file').find('.input-file-text').html(file.name);
});


$('.account_studentsec_content_rightpart_maininfo_rightpart_uppart_adaptive_slider_container').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    fade: false,
    infinite: false,
    dots: false,
    autoplay: false,
    variableWidth: true
});





$('.account_studentsec_content_rightpart_maininfo_leftpart_images').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    fade: false,
    infinite: false,
    dots: false,
    autoplay: false,
    responsive: [
    {
      breakpoint: 8000,
        settings: "unslick"
    },
     {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        variableWidth: true
      }
    }
  ]
});

$('.account_studentsec_content_rightpart_maininfo_rightpart_uppart_week').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    fade: false,
    infinite: false,
    dots: false,
    autoplay: false,
    responsive: [
    {
      breakpoint: 8000,
        settings: "unslick"
    },
     {
      breakpoint: 570,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: false,
        variableWidth: true
      }
    }
  ]
});




const button = document.querySelector('.calendar_wrap_button');
const main = document.querySelector('.calendar_wrap_main');

if(button){
  if (main) {
  button.addEventListener('click', function() {
  if (main.classList.contains('calendar_wrap_main_active')) {
  main.classList.remove('calendar_wrap_main_active');
  } else {
  main.classList.add('calendar_wrap_main_active');
  }
  });

}
};

const button2 = document.querySelector('.calendar_wrap_button2');
const main2 = document.querySelector('.calendar_wrap_main2');

if (button2) {

button2.addEventListener('click', function() {
if (main2.classList.contains('calendar_wrap_main_active')) {
main2.classList.remove('calendar_wrap_main_active');
} else {
main2.classList.add('calendar_wrap_main_active');
}
});


const button3 = document.querySelectorAll('.obwrap');

if (button3) {
for (var i = 0; i < button3.length; i++) {
  button3[i].addEventListener('click', function() {
    if (main) {
      main.classList.remove('calendar_wrap_main_active');
    };
    if (main2) {
      main2.classList.remove('calendar_wrap_main_active');
    }
});
}

}

}









const groupButton = document.querySelector('.groupsec_filterbuttons_groups');
const studentButton = document.querySelector('.groupsec_filterbuttons_students');

if(groupButton){
    groupButton.addEventListener('click', () => {
  const students = document.querySelectorAll('.groupsec_student_item_filter');
  const groups = document.querySelectorAll('.groupsec_group_item_filter');

  students.forEach(student => {
  student.classList.add('itemnone');
  });

  groups.forEach(group => {
  group.classList.remove('itemnone');
  });

  });
}


if(groupButton){
    studentButton.addEventListener('click', () => {
  const students = document.querySelectorAll('.groupsec_student_item_filter');
  const groups = document.querySelectorAll('.groupsec_group_item_filter');

  students.forEach(student => {
  student.classList.remove('itemnone');
  });

  groups.forEach(group => {
  group.classList.add('itemnone');
  });

  });
}

