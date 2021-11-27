$(document).ready(function () {

    var botonActividad = $('#botonActividad');

    var
	w       = screen.availWidth - (screen.availWidth / 3),
	h       = screen.availHeight - (screen.availHeight / 4),
	l       = (screen.availWidth - w) / 2,
	t       = (screen.availHeight - h) / 2;

    botonActividad.click(function() {
        localStorage.setItem("seccion", this.className)
        window.open(this.href,"window","width= "+ w + ",height=" + h + ",left=" + l + ",top=" + t + ", scrollbars = no, location = no, toolbar = no, menubar = no, status = no");
        return false;
    });

});