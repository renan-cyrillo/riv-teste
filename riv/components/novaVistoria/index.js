'use strict';

app.novaVistoria = kendo.observable({
    onShow: function() {},
    afterShow: function() {}
});

// START_CUSTOM_CODE_novaVistoria
// Add custom code here. For more information about custom code, see http://docs.telerik.com/platform/screenbuilder/troubleshooting/how-to-keep-custom-code-changes

// END_CUSTOM_CODE_novaVistoria
(function(parent) {
    var novaVistoriaModel = kendo.observable({
        fields: {
            evento: '',
            local: '',
            categoria: '',
        },
        submit: function() {},
        cancel: function() {}
    });

    parent.set('novaVistoriaModel', novaVistoriaModel);
})(app.novaVistoria);

// START_CUSTOM_CODE_novaVistoriaModel
// Add custom code here. For more information about custom code, see http://docs.telerik.com/platform/screenbuilder/troubleshooting/how-to-keep-custom-code-changes

// END_CUSTOM_CODE_novaVistoriaModel