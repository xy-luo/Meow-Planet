import '../css/Card.css';

function Card({ prefixClass, children, cardTitle, cardImg, cardText }) {
    const title = cardTitle ? <div className={`${prefixClass}-card-title`}>{cardTitle}</div> : null;
    const img = cardImg ? cardImg : null;
    const text = cardText ? <div className={`${prefixClass}-card-text`}>{cardText}</div> : null;

    // return cards
    return (
        <div className={`card ${prefixClass}-card`}>
            {img}
            {title}
            {text}
            {children}
        </div>
    );
}

export default Card;