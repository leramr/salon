const modalServicesLinks = document.querySelectorAll(".modal-services-link");
const body = document.getElementsByTagName("body")[0];
const lockPadding = document.querySelectorAll(".lock-padding");

let unlock = true;
const transition = 800;

if (modalServicesLinks.length > 0) {
  for (let i = 0; i < modalServicesLinks.length; i++) {
    const modalServicesLink = modalServicesLinks[i];
    modalServicesLink.addEventListener("click", function (e) {
      e.preventDefault();
      const modalName = modalServicesLink.getAttribute("href").replace("#", "");
      const currentModal = document.getElementById(modalName);
      modalOpen(currentModal);
      e.preventDefault();
    });
  }
}

const modalCloseIcon = document.querySelectorAll("modal-close");
if (modalCloseIcon.length > 0) {
  for (let i = 0; i < modalCloseIcon; i++) {
    const elClose = modalCloseIcon[i];
    elClose.addEventListener("click", function (e) {
      modalClose(elClose.closest(".modal"));
      e.preventDefault()
    });
  }
}

function modalOpen (){
if (currentModal && unlock){
    const modalActive = document.querySelector('.modal-services.open')
    if (modalActive){
        modalClose (modalActive, false)
    }
    else {
        bodyLock()
    }
    currentModal.classList.add('.open')
    currentModal.addEventListener('click', function(e){
        if (!e.target.closest('.modal-content')){
            modalClose.e.targetclosest('.modal')
        }
    })
}
}
