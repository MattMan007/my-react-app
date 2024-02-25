
function Service(props){

    const imageUrl = './src/assets/{props.img}'

    return(
        <div className="service">
            <img className="service-image" src={props.img} alt="service picture" />
            <h2 className="service-title">{props.title}</h2>
            <p className="service-text">{props.text}</p>
        </div>
    );
}


export default Service