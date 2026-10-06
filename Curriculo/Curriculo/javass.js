document.addEventListener("DOMContentLoaded", function() {
    var confirmar = confirm('Professor, está pronto para me dar nota máxima?');

    if (confirmar) {
        alert('Seja bem-vindo ao meu currículo');
    } else {
        alert('Me ajude aí, professor! Deu trabalho isso aqui kkk');
    }
});