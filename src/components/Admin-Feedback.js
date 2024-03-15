import React, { useEffect, useState } from "react";
import './Admin-feed.css'

const Feedback = () =>{
    
    const [userFeedback, setUserFeedback] = useState([])
    
    const fetchFeedback = async () =>{
        try {
            const response = await fetch('http://localhost:8080/admin/feedback', {
                method: 'GET'
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            setUserFeedback(data)
            console.log("feedback",data[0]); // Log the response data
        } catch (error) {
            console.error('There was a problem fetching the data:', error);
        } 
    }
useEffect(()=>{
    fetchFeedback()
},[])

    return(
        <>
   {userFeedback ? 
    <div className="feed-cont">
        {userFeedback.map(feed => (
            <div className="feedback">
                <div className="user-email">{feed.email}</div>
                <div className="user-feedback">{feed.message}</div>
            </div>
        ))}
    </div>
    : 'Loading...'
}
        
        </>
    )
}

export default Feedback