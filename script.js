"use strict";

const dessertsContainer = document.querySelector(".desserts__container");
const url = "data.json";

fetch(url)
  .then((res) => {
    if (!res.ok) {
      throw new Error(`Network response was not ok: ${res.statusText}`);
    }
    return res.json();
  })
  .then((data) => {
    addData(data);
  })
  .catch((err) => {
    dessertsContainer.innerHTML = `Error fetching data: ${err.message}`;
  });

function addData(data) {
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
