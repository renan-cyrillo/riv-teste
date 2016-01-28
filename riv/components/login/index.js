'use strict';

app.login = kendo.observable({
    onShow: function() {},
    afterShow: function() {}
});

// START_CUSTOM_CODE_login
// Add custom code here. For more information about custom code, see http://docs.telerik.com/platform/screenbuilder/troubleshooting/how-to-keep-custom-code-changes

// END_CUSTOM_CODE_login
(function(parent) {
    var loginModel = kendo.observable({
        fields: {
            senha: '',
            usuario: '',
        },
        submit: function() {},
        cancel: function() {}
    });

    parent.set('loginModel', loginModel);
})(app.login);

// START_CUSTOM_CODE_loginModel
// Add custom code here. For more information about custom code, see http://docs.telerik.com/platform/screenbuilder/troubleshooting/how-to-keep-custom-code-changes

// END_CUSTOM_CODE_loginModel