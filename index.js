// define that use '$' or '\\(' to show inline equations 
MathJax = {
    tex: {
      inlineMath: [
        ["$", "$"],
        ["\\(", "\\)"],
      ],
    },
    svg: {
      fontCache: "global",
    },
  };

  
$(function () {
$(".toggle").on("click", function () {
    if ($(".item").hasClass("active")) {
    $(".item").removeClass("active");
    } else {
    $(".item").addClass("active");
    }
});
});


var hint_1 = 0; var hint_2 = 0; var hint_3 = 0; var hint_4 = 0;
var check_1 = 0; var check_2 = 0; var check_3 = 0; var check_4 = 0;

function var_change_hint(hint_num, hint_now) {
  if (hint_num == 1) {
    hint_1 = hint_now;
  }
  if (hint_num == 2) {
    hint_2 = hint_now;
  }
  if (hint_num == 3) {
    hint_3 = hint_now;
  }
  if (hint_num == 4) {
    hint_4 = hint_now;
  }
}

function var_change_check(check_num, check_now) {
  if (check_num == 1) {
    check_1 = check_now;
  }
  if (check_num == 2) {
    check_2 = check_now;
  }
  if (check_num == 3) {
    check_3 = check_now;
  }
  if (check_num == 4) {
    check_4 = check_now;
  }
}

function hint_show(hint_num) {
  // show hints 
  var step_box = document.getElementById(hint_num);
  var hint_box = document.getElementById('hint_'+hint_num);
  var hint_but = document.getElementById('but_'+hint_num+'_1');
  var hint_now = eval('hint_'+hint_num)
  
  if (hint_now == 0) {
    hint_box.style.display = 'block';
    hint_but.style.background = "rgb(18, 231, 29)";
    step_box.style.display = 'flex';
    hint_now = 1;
  }

  else {
    hint_box.style.display = 'none';
    hint_but.style.background = "none";
    hint_now = 0;
  }
  console.log(var_change_hint(hint_num, hint_now));

}

function check_show(hint_num) {
  // show contents in check
  var step_box = document.getElementById(hint_num);
  var hint_box = document.getElementById('check_'+hint_num);
  var hint_but = document.getElementById('but_'+hint_num+'_2');
  var hint_now = eval('check_'+hint_num)

  if (hint_now == 0) {
    hint_box.style.display = 'block';
    hint_but.style.background = "rgb(18, 231, 29)";
    step_box.style.display = 'flex';
    hint_now = 1;
  }

  else {
    hint_box.style.display = 'none';
    hint_but.style.background = "none";
    hint_now = 0;
  }
  console.log(var_change_check(hint_num, hint_now));

}