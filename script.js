"use strict";

const dessertsContainer = document.querySelector(".desserts__container");

fetch("data.json")
  .then((res) => {
    if (!res.ok) {
      throw new Error(`Network response was not ok: ${res.statusText}`);
    }
    return res.json();
  })
  .then((data) => {
    addItems(data);
  })
  .catch((err) => {
    dessertsContainer.innerHTML = `Error fetching data: ${err.message}`;
  });

function addItems(data) {
  let html = "";

  data.forEach((item) => {
    html += `
    <div class="desserts__item">
      <div class="desserts__content">
        <picture class="desserts__picture">
          <source media="(min-width: 77.5rem)" srcset="${item.image.desktop}" />
          <source media="(min-width: 43.125rem)" srcset="${
            item.image.tablet
          }" />
          <img
            class="desserts__image"
            src="${item.image.mobile}"
            alt="${item.name}"
          />
        </picture>
    
        <div class="desserts__actions">
          <button class="desserts__cart-btn">
            <img src="assets/images/icon-add-to-cart.svg" alt="Add to Cart" />
            Add to Cart
          </button>
    
          <div class="desserts__quantity">
            <button class="desserts__qty-decrement qty-crement">
              <svg
                aria-hidden="true"
                focusable="false"
                xmlns="http://www.w3.org/2000/svg"
                width="10"
                height="2"
                fill="none"
                viewBox="0 0 10 2"
              >
                <path fill="#fff" d="M0 .375h10v1.25H0V.375Z" />
              </svg>
            </button>
            <span class="desserts__qty-value">1</span>
            <button class="desserts__qty-increment qty-crement">
              <svg
                aria-hidden="true"
                focusable="false"
                xmlns="http://www.w3.org/2000/svg"
                width="10"
                height="10"
                fill="none"
                viewBox="0 0 10 10"
              >
                <path
                  fill="#fff"
                  d="M10 4.375H5.625V0h-1.25v4.375H0v1.25h4.375V10h1.25V5.625H10v-1.25Z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    
      <div class="desserts__info">
        <p class="desserts__category">${item.category}</p>
        <h2 class="desserts__name">${item.name}</h2>
        <p class="desserts__price">$${item.price.toFixed(2)}</p>
      </div>
    </div>
        `;
  });

  dessertsContainer.innerHTML = html;
}

const dialog = document.querySelector("dialog");
const openDialogBtn = document.querySelector(".open-dialog");
const closeDialogBtn = document.querySelector(".close-dialog");

openDialogBtn.addEventListener("click", () => {
  dialog.showModal();
  document.body.classList.add("dialog-open");
});

closeDialogBtn.addEventListener("click", () => {
  dialog.close();
  document.body.classList.remove("dialog-open");
});

const desertsImage = document.querySelectorAll(".desserts__image");
const addToCartBtn = document.querySelectorAll(".desserts__cart-btn");
const decrementBtn = document.querySelectorAll(".desserts__qty-decrement");
const incrementBtn = document.querySelectorAll(".desserts__qty-increment");
const itemQtyValue = document.querySelectorAll(".desserts__qty-value");

const emptyCart = document.querySelector(".cart__empty");
const fullCart = document.querySelector(".cart__items");
const cartItemCount = document.querySelector(".cart__count");
const removeItemsBtn = document.querySelectorAll(".cart__remove-btn");
const cartItemQty = document.querySelectorAll(".cart__item-qty");
const cartPriceUnit = document.querySelectorAll(".cart__item-price-unit");
const cartPriceTotal = document.querySelectorAll(".cart__item-price-total");
const orderTotal = document.querySelector(".cart__total-price");
