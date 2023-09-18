import React from "react"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"


const Products = () => {
    const [prodList, setProdList] = useState([])

    useEffect(() => {
        fetch("http://127.0.0.1:8000/products")
            .then(resp => resp.json())
            .then(resp => {
                setProdList(resp.prodlist)
            }
            ).catch(error => {
                console.log(error)
            })
    }, [])


    return (
        <section className="category-area">
            <h1 className="container font-extrabold text-3xl py-8">
                Todays Best Deals for you
            </h1>

            <div className="container grid grid-cols-3 gap-6">
                {/*
                    prodList.map(prod => (
                        <Link to={`/product/${prod.pk}`} key={prod.pk} className="card rounded-xl h-52 w-48 items-center justify-center pt-5 relative">

                            <h1 className="w-full text-2xl font-bold absolute top-0 left-0 right-auto bottom-auto text-center">{prod.fields.title}</h1>
                            <h1 className="w-full text-2xl font-bold right-auto bottom-auto text-center">{prod.fields.price}</h1>
                        </Link>

                    ))*/
                }


                
            </div>
        </section>
    )
}

export default Products
