const modalServicesLinks = document.querySelectorAll(".modal-services-link");
const body = document.getElementsByTagName("body")[0];
const lockPadding = document.querySelectorAll(".lock-padding");

let unlock = true;
const transition = 800;

if (modalServicesLinks.length > 0) {
    for (let i = 0; i < modalServicesLinks.length; i++) {
        const modalServicesLink = modalServicesLinks[i];
        modalServicesLink.addEventListener('click', function(e) {
            e.preventDefault();
            const modalName = modalServicesLink.getAttribute('href').replace('#', "");
            console.log(modalName);
        });
    }
}