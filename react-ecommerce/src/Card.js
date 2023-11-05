import React from 'react'

function Card(props) {
    return (
        <div className='row'>
            {props.data.map((product) => {
                return (
                    <div className="col-sm-3" >
                        <div class="card" style={{ width: "18rem", margin: "2%" }}>
                            <img src={product.img} class="card-img-top" alt="..." style={{ height: "300px" }} />
                            <div class="card-body">
                                <h5 class="card-title">{product.name}</h5>
                                <p class="card-text">{product.desc}</p>
                                <p class="card-text">{product.price}</p>
                                <button class="btn btn-primary" onClick={() => props.handleCartData(product)}>Add to Cart</button>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Card