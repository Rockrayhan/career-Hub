import React from 'react';

const Job = ({myJobs}) => {
    console.log(myJobs)
    const { company_name, job_description, job_responsibility, job_title,    } = myJobs ;
    return (
        <div>
        <p> {company_name} </p>
        <h4> {job_title} </h4>
        <button> see details </button>
        </div>
    );
};

export default Job;