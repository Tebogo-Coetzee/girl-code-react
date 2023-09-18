import furnImg from "../assets/Furniture.png"
import hb from "../assets/Handbag.png"
import book from "../assets/Boks.png"
import tag from "../assets/tech.png"
import sneakers from "../assets/Sneakers.png"
import travel from "../assets/Travel.png"

const CategoriesSection = () => {
    const Cats = [
        {
            name: "Furniture",
            catImg: furnImg
        },
        {
            name: "Hand Bag",
            catImg: hb
        },
        {
            name: "Books",
            catImg: book
        },
        {
            name: "Tag",
            catImg: tag
        },
        {
            name: "Sneakers",
            catImg: sneakers
        },
        {
            name: "Travel",
            catImg: travel
        }
    ]
    return (
        <section className="pt-24">
            <div className="container mx-auto">
                <div className="mb-7">
                    <h2 className="font-extrabold text-3xl">Shop Our Top Valued Categories</h2>
                </div>
                <div className="grid grid-cols-6 gap-6">
                    {
                        Cats.map(cat => (
                            <div className="rounded-xl overflow-hidden relative" key={cat.name}>
                                <img src={cat.catImg} alt={cat.name} />
                                <h3 className="absolute top-3 left-1/2 -translate-x-1/2 font-extrabold text-2xl">{cat.name}</h3>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default CategoriesSection