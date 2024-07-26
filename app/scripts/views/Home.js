import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Home");
    }

    async getHtml() {
        return `
            <div class="main-content">

                    <div class="product-card">
                        <div class="card-img">
                            <img src="https://static01.nyt.com/images/2015/10/02/fashion/02CAPP3SUB/02CAPP3SUB-jumbo.jpg?quality=75&auto=webp" alt="product image">
                        </div>
    
                        <div class="card-content">
                            <div class="at-top">
                                <div class="tag">
                                <span class="ico-trending"><i class="fa fa-check-circle" ></i></span> Poppular in Recommendations
                                </div>
                            </div>
    
                            <div class="at-bottom">
                                <div class="product-info">
                                    <h2>Cappacino</h2>
                                    <h3>product description</h3>
                                </div>
                                <div class="selected-info">
                                    <div class="selections">
                                        <div class="price"><span>Rs.999</span></div>
                                        <div class="other-info">
                                            <span>
                                                <ul>
                                                    <li class="size">Medium</li>
                                                    <li class="category">Coffee</li>
                                                </ul>
                                                <i class="fa-solid fa-chevron-right"></i>
                                            </span>
                                        </div>
                                    </div>
                                    <div>
                                        <button class="add-btn">Add</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
    
                    <div class="product-card">
                        <div class="card-img">
                            <img src="https://static01.nyt.com/images/2015/10/02/fashion/02CAPP3SUB/02CAPP3SUB-jumbo.jpg?quality=75&auto=webp" alt="product image">
                        </div>
    
                        <div class="card-content">
                            <div class="at-top">
                                <div class="tag">
                                <span class="ico-trending"><i class="fa fa-check-circle" ></i></span> Poppular in Recommendations
                                </div>
                            </div>
    
                            <div class="at-bottom">
                                <div class="product-info">
                                    <h2>Cappacino</h2>
                                    <h3>product description</h3>
                                </div>
                                <div class="selected-info">
                                    <div class="selections">
                                        <div class="price"><span>Rs.999</span></div>
                                        <div class="other-info">
                                            <span>
                                                <ul>
                                                    <li class="size">Medium</li>
                                                    <li class="category">Coffee</li>
                                                </ul>
                                                <i class="fa-solid fa-chevron-right"></i>
                                            </span>
                                        </div>
                                    </div>
                                    <div>
                                        <button class="add-btn">Add</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
    
                    <div class="product-card">
                        <div class="card-img">
                            <img src="https://static01.nyt.com/images/2015/10/02/fashion/02CAPP3SUB/02CAPP3SUB-jumbo.jpg?quality=75&auto=webp" alt="product image">
                        </div>
    
                        <div class="card-content">
                            <div class="at-top">
                                <div class="tag">
                                <span class="ico-trending"><i class="fa fa-check-circle" ></i></span> Poppular in Recommendations
                                </div>
                            </div>
    
                            <div class="at-bottom">
                                <div class="product-info">
                                    <h2>Cappacino</h2>
                                    <h3>product description</h3>
                                </div>
                                <div class="selected-info">
                                    <div class="selections">
                                        <div class="price"><span>Rs.999</span></div>
                                        <div class="other-info">
                                            <span>
                                                <ul>
                                                    <li class="size">Medium</li>
                                                    <li class="category">Coffee</li>
                                                </ul>
                                                <i class="fa-solid fa-chevron-right"></i>
                                            </span>
                                        </div>
                                    </div>
                                    <div>
                                        <button class="add-btn">Add</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
    
                    <div class="product-card">
                        <div class="card-img">
                            <img src="https://static01.nyt.com/images/2015/10/02/fashion/02CAPP3SUB/02CAPP3SUB-jumbo.jpg?quality=75&auto=webp" alt="product image">
                        </div>
    
                        <div class="card-content">
                            <div class="at-top">
                                <div class="tag">
                                <span class="ico-trending"><i class="fa fa-check-circle" ></i></span> Poppular in Recommendations
                                </div>
                            </div>
    
                            <div class="at-bottom">
                                <div class="product-info">
                                    <h2>Cappacino</h2>
                                    <h3>product description</h3>
                                </div>
                                <div class="selected-info">
                                    <div class="selections">
                                        <div class="price"><span>Rs.999</span></div>
                                        <div class="other-info">
                                            <span>
                                                <ul>
                                                    <li class="size">Medium</li>
                                                    <li class="category">Coffee</li>
                                                </ul>
                                                <i class="fa-solid fa-chevron-right"></i>
                                            </span>
                                        </div>
                                    </div>
                                    <div>
                                        <button class="add-btn">Add</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
    
                </div>
        `;
    }
}