import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle("AddProduct");
  }

  async getHtml() {
    return `
            
        `;
  }

  async bind() {
    const submitButton = document.querySelector(".submit");
    submitButton.addEventListener("click", this.handleSubmit);
  }

  handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission

    const productName = document.getElementById("productName").value;
    const category = document.getElementById("category").value;
    const productSize = document.getElementById("productSize").value;
    const productDescription = document.getElementById("productDescription").value;
    const price = document.getElementById("price").value;
    const productStatus = document.getElementById("productStatus").value;
    const ingredients = document.getElementById("ingredients").value;
    const productNote = document.getElementById("productNote").value;

    const formData = {
      productName,
      category,
      productSize,
      productDescription,
      price,
      productStatus,
      ingredients,
      productNote,
    };

    console.log("Form Data:", formData);
  };
}
