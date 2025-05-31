function isNumberKey(evt){
    var charCode = (evt.which) ? evt.which : event.keyCode
    if (charCode > 31 && (charCode < 48 || charCode > 57))
        return false;
    return true;
}

$('#verify_otp_model').hide()
$('#errorbox').hide()

var aadhaar_no_phone_no = {
    "7382537xxxxx": "915801xxxx",
    "300000000000": "7276xxxxxx",
    "987654321098": "8888888888",
}

// BYPASS OTP LOGIC FOR LOCAL TESTING

function onSignInSubmit() {
    window.signingIn = true;
    $('#errorbox').hide();
    var aadhaar = $('#aadhaar_no').val();
    var phoneNumber = "+91" + aadhaar_no_phone_no[aadhaar];
    var d = new Date();
    d.setTime(d.getTime() + (1*24*60*60*1000));      
    var expires = "expires="+ d.toUTCString();
    document.cookie = 'aadhaar' + "=" + aadhaar + ";" + expires + ";path=/";
    $('#verifyc').text('Enter verification code sent to '+phoneNumber);
    $('#enter_aadhaarno').hide();
    $('#verify_otp_model').show();
    // Simulate confirmationResult like Firebase
    window.confirmationResult = {
        confirm: function(code) {
            // Always "succeed" the OTP
            return Promise.resolve({ user: { uid: aadhaar } });
        }
    };
}

$(verifyotp).click(function(){
    var code = $('#verify_otp').val()
    confirmationResult.confirm(code).then(function (result) {
        // User signed in successfully.
        var user = result.user;
        window.verifyingCode = false;
        //login success
        console.log(user.uid);
        var d = new Date();
        d.setTime(d.getTime() + (1*24*60*60*1000));      
        var expires = "expires="+ d.toUTCString();
        document.cookie = 'show' + "=" + user.uid + ";" + expires + ";path=/";
        window.location = '/info'

    }).catch(function (error) {
        // User couldn't sign in (bad verification code?)
        console.error('Error while checking the verification code', error);
        window.alert('Error while checking the verification code:\n\n'
           + error.code + '\n\n' + error.message);
        window.verifyingCode = false;
        $('#errorbox').show()
        $('#error').text('Enter valid OTP')
    });
});

$(getotp).click(function(){
    if ($('#aadhaar_no').val()=="") {
        $('#errorbox').show()
        $('#error').text('Please Enter Identification No')
    }
    else{
        onSignInSubmit();
        $('#errorbox').hide()
    }
});
