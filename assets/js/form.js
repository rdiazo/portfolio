document.addEventListener('DOMContentLoaded', function () {
    const dialog = document.getElementById("dialog");

    const showButton = document.getElementById('contactMeBtn');

    const closeButton = document.getElementById("close_button");

    // "Show the dialog" button opens the dialog modally
    showButton.addEventListener("click", () => {
        dialog.showModal();
    });

    // "Close" button closes the dialog
    closeButton.addEventListener("click", () => {
        dialog.close();
    });

    //form -email

  const btnSend = document.getElementById('btn-send');
  const form = document.getElementById('form')

  btnSend.addEventListener('click', function (e) {
    e.preventDefault();

    const serviceID = 'service_rsnupl5';
    const templateID = 'template_m656kxc';

    emailjs.sendForm(serviceID, templateID, form)
      .then(() => {
        window.alert('Sent!');
        form.reset();
        dialog.close();

      })
      .catch((error) => {
        alert(JSON.stringify(error));
      })
  })
})