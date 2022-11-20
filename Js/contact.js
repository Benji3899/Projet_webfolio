window.addEventListener("DOMContentLoaded", (event) => {
  function validate() {
    var isValid = true;

    var name = $("#name").val();
    var email = $("#email").val();
    var subject = $("#subject").val();
    var message = $("#message").val();

    if (name == "") {
      $("#name").css("border", "#ff0000 1px solid");
      isValid = false;
    }
    if (email == "") {
      $("#email").css("border", "#ff0000 1px solid");
      isValid = false;
    }
    if (!email.match(/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/)) {
      $("#info").html("(Adresse email non valide)");
      $("#email").css("border", "#ff0000 1px solid");
      isValid = false;
    }
    if (subject == "") {
      $("#subject").css("border", "#ff0000 1px solid");
      isValid = false;
    }
    if (message == "") {
      $("#message").css("border", "#ff0000 1px solid");
      isValid = false;
    }
    return isValid;
  }
});
