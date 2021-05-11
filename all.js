// Example starter JavaScript for disabling form submissions if there are invalid fields
;(function () {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms).forEach(function (form) {
    form.addEventListener(
      'submit',
      function (event) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }

        form.classList.add('was-validated')
      },
      false
    )
  })
})()

const registerModal = document.querySelector('#registerModal')
registerModal.addEventListener('shown.bs.modal', function (event) {
  const seePassword = document.querySelector('.seePassword')
  const password = document.querySelector('.checkPassword')
  seePassword.addEventListener('click', function (e) {
    if (password.getAttribute('type') == 'password') {
      password.setAttribute('type', 'text')
    } else {
      password.setAttribute('type', 'password')
    }
  })
})

$(document).ready(function () {
  $('a[data-dismiss="modal"][data-toggle="modal"]').on('click', function () {
    const target = $(this).data('target')
    $(target).on('shown.bs.modal', function () {
      $('body').addClass('modal-open')
    })
  })
})
