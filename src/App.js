import React ,{useState} from 'react';

  function App() {

    var [data,setData] = useState({
      username: '',
      password:'',
    })

    var {username,password} = data;

    var onChange = e =>{
        setData({...data,[e.target.name]:[e.target.value]})
    }

    var submitHandler = e =>{
      e.preventDefault();
      console.log(data);
    }

    return (
      <div>

        <form onSubmit={submitHandler}>

          <input type="text" name="username" 
          value={username} onChange={onChange} 
          placeholder="Username"
          /><br />
          <input type="password" name="password" 
          value={password} onChange={onChange} 
          placeholder="password"
          /><br />
          <button>
            Submit Message
          </button>

        </form>

      </div>
    );
  }

  export default App;