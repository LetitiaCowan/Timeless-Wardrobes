let isModalOpen = false;

//this is for the contact laoding ad success page, this might be unneeded.
function contact(event) {
    event.preventDefault();
    const loading = document.querySelector(".modal__overlay--loading"); // storing .class in "loading"
    const success = document.querySelector(".modal__overlay--success"); //storing .class in "success"
    loading.classList += " modal__overlay--visible"; // adding modal__overlay--visible to the end of loading class
}

function toggleModal() {
    if (isModalOpen) {
      isModalOpen = false;
      return document.body.classList.remove("modal--open");
    }
    isModalOpen = true;
    document.body.classList += " modal--open";
  }