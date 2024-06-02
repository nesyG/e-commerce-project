import './tailwind.css'

document.getElementById('toggleShipping').addEventListener('click', function (event) {
    event.preventDefault();
    let shippingDiv = document.getElementById('shippingDiv');
    let shippingSummary = document.getElementById('toggleShipping');
    let imgContainer = document.getElementById('dropdownIcon');
    let shippingContainer = document.getElementById('shippingHeading');

    if (shippingDiv.classList.contains('max-h-0')) {
        shippingDiv.classList.remove('max-h-0', 'slide-up');
        shippingDiv.classList.add('slide-down');
        setTimeout(() => {
            shippingDiv.classList.remove('slide-down');
            shippingDiv.classList.add('max-h-500');
        }, 500);
    } else {
        shippingDiv.classList.remove('max-h-500', 'slide-down');
        shippingDiv.classList.add('slide-up');
        setTimeout(() => {
            shippingDiv.classList.remove('slide-up');
            shippingDiv.classList.add('max-h-0');
        }, 500);
    }

    shippingSummary.classList.toggle('text-cart-quant');
    shippingSummary.classList.toggle('text-black');

    if (shippingSummary.classList.contains('text-cart-quant')) {
        imgContainer.src = './svg/close-dropdown.svg';
    } else {
        imgContainer.src = './svg/open-dropdown.svg';
    }
});

const cartItems = [
    {
        imageSrc: './svg/cart-item.svg',
        description: 'Flip Top™ Complete Replacement Soft Top, Jeep 1976-1995 CJ-7/Wrangler, No doors included, Clear side and rear windows',
        color: 'Black Denim',
        quantity: 1,
        subtotal: 150,
        editIconSrc: './svg/edit-icon.svg',
        removeIconSrc: './svg/remove-icon.svg'
    },
    {
        imageSrc: './svg/cart-item.svg',
        description: 'Replacement Soft Top, Jeep 1997-2006 TJ/Wrangler, Clear side and rear windows',
        color: 'Tan',
        quantity: 1,
        subtotal: 300,
        editIconSrc: './svg/edit-icon.svg',
        removeIconSrc: './svg/remove-icon.svg'
    }
];

function renderCartItems(items) {
    const cartBody = document.getElementById('shopping-cart-items');
    const subtotalPrice = document.getElementById('subtotal-price');
    const totalPrice = document.getElementById('total-price');
    const updateSection = document.getElementById('shopping-cart-update');
    let totalSubtotal = 0;

    items.forEach(item => {
      const itemSubtotal = item.subtotal;
      totalSubtotal += itemSubtotal;

        const itemSection = document.createElement('section');
        itemSection.className = 'grid grid-cols-6 mb-8';

        itemSection.innerHTML = `    
            <div class="flex justify-between px-6 lg:px-0">
              <div class="">
                <img class="w-36 mb-12 lg:w-auto lg:mb-0" src="${item.imageSrc}" alt="Cart item image">
              </div>
            </div>
          <div class="col-span-2 flex flex-col content-between lg:ml-8" style="margin-left:2rem">
            <p class="text-1rem lg:text-lg w-36 lg:w-72 lg:leading-snug lg:flex-grow">${item.description}</p>
            <div class="font-top-bar-1 text-sm leading-6 pb-2.5 pt-4 lg:pt-0">
              <span class="font-bold">Color:</span>
              <span> ${item.color}</span>
            </div>
          </div>        
          <div class="flex justify-center col-start-4";>
            <div class="w-12 h-12 border-2 border-custom text-center pt-3"  style="width:3rem;padding-top:10px">
              <span class="mt-6">${item.quantity}</span>
            </div>
          </div>
          <div class="flex justify-center font-top-bar-1">
            <div class="font-bold text-end pt-3 lg:text-0.875">
              <span>${'$' + item.subtotal}</span>
            </div>
          </div>
          <div class="flex justify-center">
            <div class="flex justify-between w-12" style=width:3rem>
              <span><img src="${item.editIconSrc}" alt="edit icon"></span>
              <span><img src="${item.removeIconSrc}" alt="remove icon"></span>
            </div>
          </div>`;

        cartBody.insertBefore(itemSection, updateSection);
    });
    subtotalPrice.textContent = `$${totalSubtotal.toFixed(2)}`;
    totalSubtotal = totalSubtotal + 5;
    totalPrice.textContent = `$${totalSubtotal.toFixed(2)}`
}


renderCartItems(cartItems);