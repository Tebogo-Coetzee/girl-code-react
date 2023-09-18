import '../App.css'

const AddedProducts = () => {
    return (
        <section className="categories">
            
           {  <div class="category-list">
                <div class="category"> Gadgets </div>
                <div class="category"> Fashion </div>
                <div class="category"> Toys </div>
                <div class="category"> Education </div>
                <div class="category"> Beauty </div>
                <div class="category"> sneakers </div>
                <div class="category"> Fitness </div>
                <div class="category"> Furniture </div>

            </div> }


            {
                <div className='product-categories'>

                    {/* --- */}

                    <div className="product-item">

                        <div className="product-image">
                            <img src="../src/assets/macbook.png" alt="Product Image" />
                        </div>

                        <div className="product-details">
                            <h2 className="product-title"> MacBook Pro M1 16"</h2>
                            <p className="product-description"> 256 GB, 8 core GPU, 8 GB</p>
                            <span className="product-price"> R 42 000.00</span>
                            <div className="product-rating">
                                <span className="stars">&#9733;&#9733;&#9733;&#9733;&#9733;</span>
                                <span className="reviews">(5 reviews)</span>
                            </div>
                            <span className="favorite">&#9825;</span>
                        </div>

                    </div>



                    <div className="product-item">
                    <div className="product-image">
                        <img src="../src/assets/homepod.png" alt="Product Image" />
                    </div>
                    <div className="product-details">
                        <h2 className="product-title"> Homepod </h2>
                        <p className="product-description"> 5 colors available </p>
                        <span className="product-price"> R 2 000.00 </span>
                        <div className="product-rating">
                            <span className="stars">&#9733;&#9733;&#9733;&#9733;</span>&#9734;
                            <span className="reviews">(25 reviews)</span>
                        </div>
                        <span className="favorite">&#9825;</span>
                    </div>
                </div>

                <div className="product-item">
                    <div className="product-image">
                        <img src="../src/assets/water.png" alt="Product Image" />
                    </div>
                    <div className="product-details">
                        <h2 className="product-title"> Water bottle </h2>
                        <p className="product-description">750 ml</p>
                        <span className="product-price"> R 320.00 </span>
                        <div className="product-rating">
                            <span className="stars">&#9733;&#9733;</span>&#9734;&#9734;&#9734;
                            <span className="reviews">(29 reviews)</span>
                        </div>
                        <span className="favorite">&#9825;</span>
                    </div>
                </div>


                <div className="product-item">
                    <div className="product-image">
                        <img src="../src/assets/laptop.png" alt="Product Image" />
                    </div>
                    <div className="product-details">
                        <h2 className="product-title"> Laptop sleeve  </h2>
                        <p className="product-description"> Organic cotton, fairtrade certified </p>
                        <span className="product-price"> R 650.00 </span>
                        <div className="product-rating">
                            <span className="stars">&#9733;&#9733;&#9733;</span>&#9734;&#9734;
                            <span className="reviews">(1 review)</span>
                        </div>
                        <span className="favorite">&#9825;</span>
                    </div>
                </div>


                <div className="product-item">
                    <div className="product-image">
                        <img src="../src/assets/flowered-sleeve.png" alt="Product Image" />
                    </div>
                    <div className="product-details">
                        <h2 className="product-title"> Laptop sleeve  </h2>
                        <p className="product-description"> 15" x 10" top closure </p>
                        <span className="product-price"> R 670.00 </span>
                        <div className="product-rating">
                            <span className="stars">&#9733;&#9733;&#9733;&#9733;&#9733;</span>
                            <span className="reviews">(5 reviews)</span>
                        </div>
                        <span className="favorite">&#9825;</span>
                    </div>
                </div>


                <div className="product-item">
                    <div className="product-image">
                        <img src="../src/assets/airpod-max-min.png" alt="Product Image" />
                    </div>
                    <div className="product-details">
                        <h2 className="product-title"> AirPods Max  </h2>
                        <p className="product-description"> A perfect balance of high-fidelity audio </p>
                        <span className="product-price"> R 6 050.00 </span>
                        <div className="product-rating">
                            <span className="stars">&#9733;&#9733;&#9733;&#9733;</span>&#9734;
                            <span className="reviews">(6 reviews)</span>
                        </div>
                        <span className="favorite">&#9825;</span>
                    </div>
                </div>


                    {/* ---- */}

                </div>
            }

            
        </section>


        

                        


    )
}

export default AddedProducts
