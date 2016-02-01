'use strict';

app.vistoria = kendo.observable({
    onShow: function() {},
    afterShow: function() {}
});

// START_CUSTOM_CODE_vistoria
// Add custom code here. For more information about custom code, see http://docs.telerik.com/platform/screenbuilder/troubleshooting/how-to-keep-custom-code-changes

// END_CUSTOM_CODE_vistoria
(function(parent) {
    var vistoriaModel = kendo.observable({
        fields: {
            categoriaE: '',
            veiculoEspecial: '',
            chassi: '',
            placa:'',
            chuva: '',
            molhado: '',
            poucaIluminacao: '',
            semCondicoes: '',
        },
        submit: function() {},
        cancel: function() {}
    });

    parent.set('vistoriaModel', vistoriaModel);
})(app.vistoria);

// START_CUSTOM_CODE_vistoriaModel
// Add custom code here. For more information about custom code, see http://docs.telerik.com/platform/screenbuilder/troubleshooting/how-to-keep-custom-code-changes

// END_CUSTOM_CODE_vistoriaModel