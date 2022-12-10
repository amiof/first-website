import React from 'react';
import { useParams } from 'react-router-dom';
const Ditails = () => {
    const params=useParams()
    console.log (params)
    return (
        <div>
            <h1>this is ditails- {params.id}</h1>
            
        </div>
    );
};

export default Ditails;