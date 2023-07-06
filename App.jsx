import { useState } from "react"

const App = () =>{
    const date = new Date().toLocaleTimeString();
    const[time,abhi ] = useState(date);

    const change = () =>{
      const  raju =   new Date().toLocaleTimeString();
        abhi(raju );

    }


return (<>
    <h1>{time}</h1>
    <button onClick = {change}>click me</button>
</>)
}
export default App;