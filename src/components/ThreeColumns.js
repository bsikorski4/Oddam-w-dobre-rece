import React from "react";

function ThreeColumns() {
    return(
        <section className='three_col'>

            <div className='col'>
                <h1>10</h1>
                <span>
                    Oddanych worków
                </span>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.
                </p>

            </div>

            <div className='col'>
                <h1>5</h1>
                <span>
                    Wspartych organizacji
                </span>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.
                </p>
            </div>

            <div className='col'>
                <h1>7</h1>
                <span>
                    Zorganizowanych zbiórek
                </span>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.
                </p>

            </div>


        </section>
    )
}

export default ThreeColumns;