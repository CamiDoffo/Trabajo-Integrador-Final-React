 

function Message(propiedades){
    return(
        <div className={"message-container " + (propiedades.author === 'YO' ? 'message-container--right' : 'message-container--left')}>
            <div>
                <span>{propiedades.author}</span>
                <p>{propiedades.content}</p>
                <span>{propiedades.timestamp}</span>
                <hr />
            </div>
        </div>
    )
}

export default Message