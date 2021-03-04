$(function() {
    $(".error-pass, .error-email").hide();
});

function checkEmail(email) {
    var emailReg = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    return emailReg.test(email);
}

function validateForm() {
    var countErrors = 0;
    var emailInput = $("input[type=email]");
    var passInput = $("input[type=password]");

    if (!checkEmail($(emailInput).val())) {
        $(".error-email").fadeIn();
        $(".email-msg").html("Por favor, compruebe su email");
        $(emailInput).addClass("warning");
        countErrors++;

        return false;
    }
    /*else {
           $(emailInput).removeClass("warning");
       }*/

    if (passInput.val().length < 5) {
        $(".error-pass").fadeIn();
        $(".pass-msg").html("La contraseña debe al menos 5 caracteres");
        $(passInput).addClass("warning");
        countErrors++;

        return false;
    }
    /*else {
           $(passInput).removeClass("warning");
       }*/

    $(emailInput).removeClass("warning");
    $(passInput).removeClass("warning");
    setTimeout(function showErrorMsg() {
        $(".error-email, .error-pass").fadeOut();
    }, 1500);


    // Ajax, deribar
    // Code...
}