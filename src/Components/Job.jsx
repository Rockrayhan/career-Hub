import React from 'react';
import { Link } from 'react-router-dom';

const Job = ({myJobs}) => {
    // console.log(myJobs)
    const { id,company_name, job_description, job_responsibility, job_title,    } = myJobs ;
    return (
        <div>
        <p> {company_name} </p>
        <h4> {job_title} </h4>
        <Link to={`/job/${id}`}> <button> see details </button> </Link>
        </div>
    );
};

export default Job;