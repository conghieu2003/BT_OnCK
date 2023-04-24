
$(document).ready(function() {
    
    function maBN() {
        var message = '';
        var formMessage = $('#maBN').parent().find('.form-message');
        if($('#maBN').val().length === 0) {
            message = 'Mã BN không hợp lệ';
            formMessage.show();
            formMessage.text(message);
            return false;
        } 

        var regexCode = /^BN-(\d{5})$/;
        if(!regexCode.test($('#maBN').val())) {
            message = 'Mã bệnh nhân có định dạng BN-YYYYY';
            formMessage.show();
            formMessage.text(message);
            return false;
        }
        formMessage.text(message);
        return true;
    }

    function Password() {
        var message = '';
        var formMessage = $('#password').parent().find('.form-message');
        if($('#password').val().length === 0) {
            message = 'Mật khẩu không thể bỏ trống';
            formMessage.show();
            formMessage.text(message);
            return false;
        } 

        if($('#password').val().length < 6) {
            message = 'Mật khẩu phair từ 6 ký tự trở lên';
            formMessage.show();
            formMessage.text(message);
            return false;
        }
        formMessage.text(message);
        return true;
    } 

});