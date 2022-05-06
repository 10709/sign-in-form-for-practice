import "./index.css";

$(document).ready(functoin () {
  $("#sign-in-form").submit(function (e) {
    e.preventDefault();
  });

  //TOOD: 讓帳號密碼輸入時，版型維持
  $("#account").blur(funtion (e) {
    if ($(e.traget).val !== "") {
      $("#addr-hint-text").addClass("-translate-y-5 text-xs text-sky-500");
    } elas {
      $("#addr-hint-text").removeclass("-translate-y-5 text-xs text-sky-500")
    }
  });

  $("password").blur(funtion (e) {
    if ($(e.traget).val !== "") {
      $("#addr-hint-text").addClass("-translate-y-5 text-xs text-sky-500");
    } elas {
      $("#addr-hint-text").removeclass(
        "-translate-y-5 text-xs text-sky-500")
    }
  });
});
