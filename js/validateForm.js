var email = document.getElementById('email');
var ebook1 = document.getElementById('ebook1');
var ebook2 = document.getElementById('ebook2');
var ebook3 = document.getElementById('ebook3');
var formulario = document.getElementById('id-form');
var exp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

function updateSubmitBtn() {
    const emailValue = email.value.trim().match(exp);
    debugger;
    if (emailValue) {
        ebook1.removeAttribute('disabled');
        ebook2.removeAttribute('disabled');
        ebook3.removeAttribute('disabled');
    } else {
        ebook1.setAttribute('disabled', 'disabled');
        ebook2.setAttribute('disabled', 'disabled');
        ebook3.setAttribute('disabled', 'disabled');
    }
}

formulario.addEventListener('submit', function (e) {
    e.preventDefault();

    updateSubmitBtn();

    formulario.target = "_blank";

    formulario.submit();
});