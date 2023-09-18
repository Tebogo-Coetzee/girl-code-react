import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
const Product = () => {
    /*const { prodId } = useParams()
    const [prodInfo, setProdInfo] = useState({})

    useEffect(() => {
        fetch(`http://127.0.0.1:8000/product/${prodId}`)
            .then(resp => resp.json())
            .then(resp => {
                setProdInfo(resp)

            }
            ).catch(error => {
                console.log(error)
            })
    }, [])*/

    return (
        <section className="container py-6">
            <div className="wrapper mx-auto">
                <div className="box a">
                    <p className="tags">Electronics/ Audio/ Headphones/ Shop headphones by type/ <span className="prod-tag">airpods max</span></p>
                    <div className="Product-wrapper mt-6">
                        <img className="prod-img" src="../src/assets/airpod-max-min.png" alt="airpod max image"></img>
                    </div>
                    <div className="product-image-slider mt-6 gap-6">
                        <div className="img-1">
                            <img className="prod-img" src="../src/assets/airpod-max-min.png" alt="airpod max image"></img>

                        </div>
                        <div className="img-2">
                            <img className="prod-img" src="../src/assets/airpod-max-min.png" alt="airpod max image"></img>

                        </div>
                        <div className="img-3">
                            <img className="prod-img" src="../src/assets/airpod-max-min.png" alt="airpod max image"></img>

                        </div>
                        <div className="img-4">
                            <img className="prod-img" src="../src/assets/airpod-max-min.png" alt="airpod max image"></img>

                        </div>
                    </div>
                </div>
                <div className="box b container py-14">
                    <h1 className="prod-title">Airpods- Max</h1>
                    <p className="prod-description">
                        A perfect balance of exhilarating high-fidelity audio and <br></br> the effortless magic of Airpods
                    </p>
                    <p className="pb-11">
                        <span className="prod-stars">&#9733;&#9733;&#9733;&#9733;&#9733;</span>
                        <span className="prod-reviews">(121)</span>
                    </p>

                    <hr></hr>

                    <h3 className="prod-price pt-6">$549 or 99.90/month</h3>
                    <p className="pay-descr pb-6">
                        suggested payments with 6 months special financing
                    </p>
                    <hr></hr>
                    <h3 className="prod-price pt-6">Choose a color</h3>
                    <div className="color-options flex gap-6 pb-6">
                        <div className="color-option">
                            1
                        </div>
                        <div className="color-option">
                            2
                        </div>
                        <div className="color-option">
                            3
                        </div>
                        <div className="color-option">
                            4
                        </div>

                    </div>

                    <hr></hr>
                    <div className="py-6 flex gap-6">
                        <div className="item-count flex gap-6 px-3">
                            <div className="-">
                                -
                            </div>
                            <div className="count">
                                1
                            </div>
                            <div className="+">
                                +
                            </div>

                        </div>
                        <div className="information">
                            <p>
                                Only <span>12 items</span> left!<br></br>
                                Don't miss it
                            </p>
                        </div>
                    </div>

                    <div className="buttons flex gap-6">
                        <div>
                            Buy Now
                        </div>
                        <div>
                            Add to Cart
                        </div>

                    </div>

                    <div className="delivery py-3 px-3">
                        <div className="free-delivery pt-2 px-2">
                            <p>
                                <span className="pr-3">&#128666;</span>
                                Free Delivery
                            </p>
                            <p className="post-code py-2">
                                please enter your Postal code for Delivery availability
                            </p>
                        </div>
                        <div className="free-delivery px-2">
                            <p>
                                <span className="pr-3">&#x2398;</span>
                                Return delivery
                            </p>
                            <p className="post-code py-2">
                                free 30 days Delivery returns. Details.
                            </p>

                        </div>

                    </div>
                </div>
            </div>
        </section>

    )
}

export default Product