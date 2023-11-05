import React from 'react'

function Cart(props) {

    var total = 0;

    props.data.map((product) => {
        return (
            total = total + product.data.price
        )
    })

    return (
        <div className='row'>
            {
                props.data.map((cartItem) => {
                    return (
                        <div className="col-sm-3" >
                            <div class="card" style={{ width: "18rem", margin: "2%" }}>
                                <img src={cartItem.data.img} class="card-img-top" alt="..." style={{ height: "300px" }} />
                                <div class="card-body">
                                    <h5 class="card-title">{cartItem.data.name}</h5>
                                    <p class="card-text">{cartItem.data.desc}</p>
                                    <p class="card-text">{cartItem.data.price}</p>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
            <p>Total Cart value is : {total}</p>
        </div>
    )
}

export default Cart