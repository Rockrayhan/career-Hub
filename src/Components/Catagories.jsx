import React, { useEffect, useState } from 'react';

const Catagories = () => {
    const [catagories, setCatagories ] = useState([]) ;
    useEffect( ()=>{
        fetch("./data/categories.json")
        .then(res => res.json())
        .then(data => setCatagories(data))
    } ,[] )

    // console.log(catagories);

    return (
        <div>
            <h2> Job catagories List {catagories.length} </h2>
            <p> Explore thousands of job opportunities with all the information you need. Its your future </p>

            <div className="row">
                {
                    catagories.map( item => <div
                    key={item.id}
                    className='col-lg-3'
                    >  
                    <h3> {item.category_name} </h3>

                    <h6> {item.availability} </h6>


                    </div>  )
                }
            </div>
        </div>
    );
};

export default Catagories;