import React from "react";

const Card = ({ character }) => {

    const { name, status, image, created } = character
    return (
        <div className="col-12 col-md-4 col-lg-3">
            <div className="card">
                <img src={image} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{status}</p>
                    <p className="card-text">{created}</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>
    )
}

export default Card