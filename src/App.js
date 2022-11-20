import React from 'react'
import Button from "@mui/material/Button"
function App() {
    React.useEffect(()=>{
        fetch("https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=onam&key=AIzaSyD55-eDwMGP3iDhYJNsBJ6tE0pGvBz1-ck")
    
    .then((res)=>res.json())
    .then((data)=>console.log(data));
},[]);
    
  return (
    <div>
      <button >Test</button>
    </div>
  );
}

export default App;




