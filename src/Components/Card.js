
function Card(props) {
    return (
            <div>
                <p>{props.name}</p>
                <img src={props.url} alt="onepiec" width={900} />
            </div>
    )
}

export default Card;