function redirecionarPagina(selectElement) {
    var url = selectElement.value;

    if (url) {
        window.location.href = url;                
    }
}