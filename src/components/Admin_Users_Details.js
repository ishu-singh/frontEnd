import React, { useEffect, useState } from "react";

import './Admin_Users_Details.css'

const AdminUsersDetails = () =>{

    const [userData, setUserData] = useState([])
    const [userFeedback, setUserFeedback] = useState([])

    const fetchData = async () => {
        try {
            const response = await fetch('http://localhost:8080/admin/users', {
                method: 'GET'
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            setUserData(data)
            console.log(userData); // Log the response data
        } catch (error) {
            console.error('There was a problem fetching the data:', error);
        } 
    };

    useEffect(() => {
        fetchData();
        
        
    }, []);

    const handleDelete = (email) =>{
        // eslint-disable-next-line no-restricted-globals
        if (confirm("Are you sure you want to delete the user " + email + "?")) {
        // Delete Function
        console.log('User Deleted');
}

        
    }


    return (
        <>


        {userData? 

        (<>
        
        <div className="detail-cont">
            <div className="total-users">Total Users:{userData.length}</div>
            <div className="admin-title">
                <div>Name</div>
                <div>Email-id</div>
                <div> Delete User</div>
            </div>
        
            {userData.map(user =>(
              <div className="user-details">
                  <div>{user.fname} {user.lname} </div>
                  <div>{user.email} </div>
                  <div> <button className="delete-user" onClick={() => handleDelete(user.email)}>Delete</button></div>
                  </div>
                    

            ))}
            
           
        
        </div>

</>

        
        ) : ("Loading...")
}




        </>

    )
}



export default AdminUsersDetails