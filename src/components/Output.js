// import React, { useState } from 'react';

// function Output(){
//     const [apiResponse, setApiResponse] = useState(null);

//     const getoutput = () => {
//         console.log("getting output");
//         axios.get('http://localhost:3002/run-script', {
//             // Add your request payload data here
//           })
//             .then(response => {
//               // Handle the API response data
//               console.log(response.data);
//               setApiResponse(response.data);
//             })
//             .catch(error => {
//               // Handle any errors that occurred during the API call
//               console.error(error);
//             });
//       };
//     return(
//         <div className = "App">
//  <h1>Accident Detection Using Surveillance Camera</h1>
//   <br />
//     <div>
//     {apiResponse && (
//         <p style={{ fontWeight: 'bold', color: 'red' }}>{apiResponse}</p>
//       )}
//     </div>
//   </div>
//     )
// }

// export default Output

import React, { useState, useEffect } from 'react';
import './Output.css';
import axios from 'axios';

function Output() {
  const [apiResponse, setApiResponse] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const getoutput = () => {
    console.log("getting output");
    axios.get('http://localhost:3002/run-script', {
      // Add your request payload data here
    })
      .then(response => {
        // Handle the API response data
        console.log(response.data);
        setApiResponse(response.data);
        setIsLoading(false);
      })
      .catch(error => {
        // Handle any errors that occurred during the API call
        console.error(error);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    getoutput(); // Automatically call the getoutput function on component mount
  }, []); // Empty dependency array to ensure it runs only once on mount

  return (
    <div className="App">
      <h1>Accident Detection Using Surveillance Camera</h1>
      <br />
      <div id="container">
        {isLoading ? (
          <p>Please wait while we detect an accident...</p>
        ) : (
          <>
            {apiResponse && (
              <p>{apiResponse}</p>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default Output;
