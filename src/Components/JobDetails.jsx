import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const JobDetails = () => {
    const jobs = useLoaderData();
    const {id} = useParams() ;
    console.log(jobs)
    return (
        <div>
            <h2> Job Details of  </h2>
        </div>
    );
};

export default JobDetails;