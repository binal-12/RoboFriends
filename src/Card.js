import React from "react";

const Card = ({ name, email}) => {
    return (
        <div className="card bg-light-green dib br3 pd3 ma2 grow tc bw2 shadow-5">
            <img src={`https://robohash.org/${name}?150x150`} alt="robot"/>
            <h2>{name}</h2>
            <p>{email}</p>
        </div>
    )
}

export default Card