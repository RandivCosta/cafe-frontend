import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle("AddProduct");
  }

  async getHtml() {
    return `
            <div class="add-product-page">
        <div class="form-container">
            <div class="add-product-header">Add Product</div>
            <form action="/addProduct">
                <div class="form">
                    <div class="details personal">
                        <span class="title">Product Details</span>
                        <div class="fields">
                            <div class="input-field">
                                <label>Product Name</label>
                                <input type="text" placeholder="Enter product name" required id="productName">
                            </div>
                            <div class="input-field">
                                <label>Category</label>
                                <select required id="category">
                                    <option disabled selected>Select category</option>
                                    <option>Coffee</option>
                                    <option>Pizza</option>
                                    <option>Cake</option>
                                </select>
                            </div>
                            <div class="input-field">
                                <label>Size</label>
                                <select required id="productSize">
                                    <option disabled selected>Select size</option>
                                    <option>Regular</option>
                                    <option>Medium</option>
                                    <option>Large</option>
                                    <option>Other</option>
                                </select>
                            </div>
                            <div class="input-field description">
                                <label>Product description</label>
                                <input type="text" placeholder="Enter product description" required id="productDescription">
                            </div>
                            <div class="input-field">
                                <label>Price</label>
                                <input type="text" placeholder="Enter price" required id="price">
                            </div>
                            <div class="input-field">
                                <label>Status</label>
                                <select required id="productStatus">
                                    <option disabled selected>Select status</option>
                                    <option>Spacial offer</option>
                                    <option>Normal</option>
                                </select>
                            </div>
                            <div class="input-field">
                                <label>Ingredients</label>
                                <input type="text" placeholder="Enter ingredients" id="ingredients">
                            </div>
                            <div class="input-field">
                                <label>Spacial Notes</label>
                                <input type="text" placeholder="Enter a note" id="productNote">
                            </div>
                        </div>
                        <span class="title">Upload a product picture:</span>
                        <div class="product-pic">
                            <label for="productPicture">Upload</label>
                            <input type="file" id="productPicture" name="picture" accept="image/png, image/jpeg" />
                        </div>
                    </div>
                    <div class="add-product-btns">
                        <div class="backBtn">
                            <i class="fa-solid fa-chevron-left"></i>
                            <span class="btnText">Back</span>
                        </div>
    
                        <button class="sumbit" type="submit">
                            <span class="btnText">Submit</span>
                            <i class="fa-solid fa-chevron-right"></i>
                        </button>
                    </div>
                </div>
            </form>
        </div>
    </div>
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
