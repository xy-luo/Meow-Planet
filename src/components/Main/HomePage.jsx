import Carousel from "../Carousel";
import "../../css/HomePage.css"
import * as homepageImgs from "../../img/homepageImgs";

function HomePage() {
    const imgList = ["cat_01.jpg", "cat_02.jpg", "cat_03.jpg", "cat_04.jpg", "cat_05.jpg"]

    return (
        <div className="homepage">
            <Carousel>
                <img className="carousel-img" src={require(`../../img/homepageImgs/${imgList[0]}` )} alt="two cats are sniffing each other" />
                <img className="carousel-img" src={require(`../../img/homepageImgs/${imgList[1]}` )} alt="a hand is touching a cat"/>
                <img className="carousel-img" src={require(`../../img/homepageImgs/${imgList[2]}` )} alt="a white and black cat"/>
                <img className="carousel-img" src={require(`../../img/homepageImgs/${imgList[3]}` )} alt="a person intend to touch a cat with a finger"/>
                <img className="carousel-img" src={require(`../../img/homepageImgs/${imgList[4]}` )} alt="a cat is lying with a dog"/>
            </Carousel>
            <div className="homepage-text-wrapper">
                <h2 className="homepage-title">Pioneering for cats</h2>
                <p>Our website aims to create A cat friendly world where each cat, owned and unowned, is treated with respect, compassion and understanding. We provide a lot of scientific articles to help people know more about the cats, especially who intend to have a cat or kitten as pet.</p>
                <p>We cooperate with many Animal Community Center, and help them to publish posters, making these cats being able to have a warm home as soon as possible.</p>
                <p>Apart from these, we intend to enable more people to act in a cat friendly way to improve cat welfare. We also have a lot of cat friendly products for you to purchase for your cat.</p>
            </div>
        </div>
    )
}

export default HomePage;