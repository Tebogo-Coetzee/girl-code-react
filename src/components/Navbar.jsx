import '../App.css'
import { Outlet, Link } from "react-router-dom";
import { useState, useRef, useEffect } from "react"



const Navbar = () => {
    const popularCategories= [
        {
            title: "Furniture",
            productCount: 0,
            imageURL: "../src/assets/Furniture-min.png"
        },
        {
            title: "Furniture",
            productCount: 1,
            imageURL: "../src/assets/Furniture-min.png"
        },
        {
            title: "Furniture",
            productCount: 241,
            imageURL: "../src/assets/Furniture-min.png"
        },
        {
            title: "Furniture",
            productCount: 241,
            imageURL: "../src/assets/Furniture-min.png"
        },
        {
            title: "Furniture",
            productCount: 241,
            imageURL: "../src/assets/Furniture-min.png"
        },
        {
            title: "Furniture",
            productCount: 241,
            imageURL: "../src/assets/Furniture-min.png"
        },
    ];
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isDropdownInFocus, setIsDropdownInFocus] = useState(true);
    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };
    const dropdownRef = useRef(null);

    useEffect(() => {
        function handleClickOutside(event) {
          if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setIsDropdownInFocus(false)
          }
          else{
            setIsDropdownInFocus(true)
            setIsDropdownOpen(false);
          }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
          document.removeEventListener('mousedown', handleClickOutside);
        };
      }, [dropdownRef]);

    return (
        <div className="nav-bar">
            <div id="logo">
                <Link to="/"><img src="../public/logo_large.jpeg"></img></Link>
            </div>

            <div className='left-nav-bar'>
                <ul>
                    <li className='cat-nav'>
                        <a href='#' className='cat-nav' onClick={toggleDropdown}>Category &nbsp;
                            {isDropdownOpen && isDropdownInFocus?
                            <svg className='svg-img-transformed' xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12">
                            <g class="nc-icon-wrapper" fill="currentColor">
                                <path d="M10.293,3.293,6,7.586,1.707,3.293A1,1,0,0,0,.293,4.707l5,5a1,1,0,0,0,1.414,0l5-5a1,1,0,1,0-1.414-1.414Z" fill="currentColor"></path>
                            </g>
                            </svg>
                            :
                            <svg  className="svg-img" xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12">
                            <g class="nc-icon-wrapper" fill="currentColor">
                                <path d="M10.293,3.293,6,7.586,1.707,3.293A1,1,0,0,0,.293,4.707l5,5a1,1,0,0,0,1.414,0l5-5a1,1,0,1,0-1.414-1.414Z" fill="currentColor"></path>
                            </g>
                            </svg>
                            }
                        </a>
                        {isDropdownOpen && isDropdownInFocus && (
                            <div className="dropdown" ref={dropdownRef}>
                                <div>
                                    <div className='popular-cats-div'>
                                        <a href="#" className="popular-cats-title">Popular Categories</a>
                                        <div className='popular-cats-grid'>
                                        {popularCategories.map((category, index) => (
                                            <a href="#" className='cell category-product-item'>
                                                <div class="category-image">
                                                    <img src={category.imageURL} alt="Product Image" className='cat-img'/>
                                                </div>
                                                <div className='category-details'>
                                                    <p className='cat-heading'>{category.title}</p>
                                                    <p className='cat-product-description'>{category.productCount} item{category.productCount != 1? "s":""} Available</p>
                                                </div>
                                            </a>
                                        ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </li>
                    <li>
                        <a href='#'>Deals</a>
                    </li>
                    <li>
                        <a href='#'>What's new</a>
                    </li>
                    <li>
                        <a href='#'> Delivery</a>
                    </li>
                </ul>

                <div className='search'>
                    <form>
                        <input type="text" placeholder='search'>

                        </input>
                        <button type='submit'><span className="material-symbols-outlined">search</span></button>

                    </form>


                </div>
                <div className='right-nav-bar'>
                    <ul>
                        <li className='flex items-center'>
                            <p className="material-symbols-outlined px-4">person</p>
                            <p><a href='#'>Account</a></p>
                        </li>
                        <li className='flex items-center'>
                            <p className="material-symbols-outlined px-4">shopping_cart</p>
                            <p><a href='#'>Cart</a></p>
                        </li>
                    </ul>
                </div>

            </div>
        </div>
    )
}

export default Navbar