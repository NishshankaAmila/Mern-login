import react from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

 const [data, setData] = react.useState({});

  const handelSubmit = (event) =>{
    //console.log(event);
    console.log(data);
    event.preventDefault();
  }
  const handelChange = (event) =>{
    //console.log(event.target.name,event.target.value);
    setData ({
      ...data,
      [event.target.name]: event.target.type ==='checkbox'? event.target.check:event.target.value})

  }
  return (
    <div className="App">
      
    <form onSubmit={handelSubmit}>
      <div className="form">
        <input type="text" name="FName" className="FName" onChange={handelChange}/>
        <input type="text" name="LName" className="Lname" onChange={handelChange}/>
        <input type="email" name="Mail" className="Mail" onChange={handelChange}/>
        <input type="password" name="Pass" className="Pass" onChange={handelChange}/>
        <input type="checkbox" name="ckbox" className="ckbox" onChange={handelChange}/>
        <button type="submit">Submit</button>
      </div>
    </form>

    </div>
  );
}

export default App;
