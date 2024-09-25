const addContact = document.getElementById("add-contact");
const removeContact = document.getElementById("remove-contact");


addContact.addEventListener('click', () => {
    const contactSection = document.getElementById("contact-list");
    const h3 = document.createElement("h3");
    h3.innerText = 'Contact'
    h3.className = 'contact'

    const ul = document.createElement('ul');

    const uniqueId = Date.now();

    const nameLi = document.createElement('li');
    nameLi.innerHTML = `<label for="name-${uniqueId}">Name: </label>`
    nameLi.className = 'list'
    const nameInput = document.createElement('input');
    nameInput.type = 'text'
    nameInput.className = 'name-input'
    nameInput.id = `name-${uniqueId}`
    nameInput.placeholder = 'full name...'
    nameLi.appendChild(nameInput)
    ul.appendChild(nameLi)

    const phoneLi = document.createElement('li');
    phoneLi.innerHTML = `<label for="phone-${uniqueId}">Phone: </label>`
    phoneLi.className = 'list'
    const phoneInput = document.createElement('input');
    phoneInput.type = 'text'
    phoneInput.className = 'name-input'
    phoneInput.id = `phone-${uniqueId}`
    phoneInput.placeholder = '07654432100...'
    phoneLi.appendChild(phoneInput)
    ul.appendChild(phoneLi)

    const addressLi = document.createElement('li');
    addressLi.innerHTML = `<label for="address-${uniqueId}">Adress: </label>`
    addressLi.className = 'list'
    const addressInput = document.createElement('input');
    addressInput.type = 'text'
    addressInput.className = 'name-input'
    addressInput.id = `address-${uniqueId}`
    addressInput.placeholder = 'address...'
    addressLi.appendChild(addressInput)
    ul.appendChild(addressLi)

    
    contactSection.append(h3, ul)
})

removeContact.addEventListener('click', () => {
    const contactSection = document.getElementById("contact-list");
    const title = document.getElementsByTagName('h3');
    const contact = document.getElementsByTagName('ul');
    contactSection.removeChild(title[title.length - 1]);
    contactSection.removeChild(contact[contact.length - 1])
})