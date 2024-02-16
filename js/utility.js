function elementGetById(elementId) {
  let element = document.getElementById(elementId);
  return element;
}

function elementGetByIdAndSetValue(elementId, value) {
  let element = document.getElementById(elementId);
  element.innerText = value;
}

// onclick="my_modal_3.showModal()"
//  Show Modal
function openModal(title, subtitle) {
  let my_modal_3 = document.getElementById("my_modal_3");
  let modalTitle = elementGetById("modalTitle");
  let subTitle = elementGetById("subTitle");
  modalTitle.innerText = title ? title : "Sorry";
  subTitle.innerText = subtitle ? subtitle : "You Have Not Any Purchases Now ";
  my_modal_3.showModal();
}
