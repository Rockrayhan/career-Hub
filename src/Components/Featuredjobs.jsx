import React, { useEffect, useState } from 'react';
import Job from './Job';

const Featuredjobs = () => {
    const [jobs, myJobs] = useState([]);

    useEffect( ()=> {
        fetch('./data/jobs.json')
        .then(res => res.json())
        .then(data => myJobs(data))
    } ,[] )
    return (
        <div>
            <h1> Featured Jobs {jobs.length} </h1>

           <div className='d-flex'>
           {
                jobs.map( job => <Job
                key={job.id}
                myJobs={job}
                >

                </Job> )
            }
           </div>

           <div className='text-center mt-5'> <button> Show all Jobs </button> </div>

        </div>
    );
};

export default Featuredjobs;