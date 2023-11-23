import './src/assets/tailwind.css'

document.getElementById('toggleShipping').addEventListener('click', function (event) {
    event.preventDefault();
    let shippingDiv = document.getElementById('shippingDiv');
    let shippingSummary = document.getElementById('toggleShipping');
    let imgContainer = document.getElementById('dropdownIcon');
    let shippingCOntainer = document.getElementById('shippingHeading');
    shippingDiv.classList.toggle('container-closed');

    shippingSummary.classList.toggle('text-cart-quant');
    shippingSummary.classList.toggle('text-black');

    shippingCOntainer.classList.toggle('m-px');
    shippingCOntainer.classList.toggle('mb-6');

    if (shippingSummary.classList.contains('text-cart-quant')) {
        imgContainer.src = './svg/close-dropdown.svg';
    } else {
        imgContainer.src = './svg/open-dropdown.svg';
    }
});