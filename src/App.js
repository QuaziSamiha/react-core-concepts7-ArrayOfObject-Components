import './App.css';
import { useState } from 'react';

function App() {
  const friendDetail = [
    { id: 1, name: 'Bushra', desc: 'She is really vary helpful' },
    { id: 2, name: 'Ifti', inst: 'China', dept: 'Medical' },
    { id: 3, name: 'Zarin', inst: 'PUST', dept: 'English', desc: 'She is my oldest friend' },
    { id: 4, name: 'Turna', dept: 'EEE', desc: 'She is not very close with me' }
  ]
  return (
    <div className="App">
      <header className="App-header">
        {
          friendDetail.map(friendInfo =>
            <Friend name={friendInfo.name} institute={friendInfo.inst} dept={friendInfo.dept} desc={friendInfo.desc}></Friend>
          )
        }
      </header>
    </div>
  );
}

function Friend(props) {

  let [star, setStar] = useState(0);
  const clickHandle = () => (setStar(star + 1))
  const divStyle = {
    backgroundColor: 'salmon',
    borderRadius: '10px',
    boxShadow: '5px 5px 10px gray',
    width: '500px',
    margin: '10px'
  }
  return (
    <div style={divStyle}>
      <h4>Name: {props.name}</h4>
      <p>Institute: {props.institute || 'RUET'}</p>
      <p>Department: {props.dept || 'CSE'}</p>
      <p>Description: {props.desc || 'She is more than my friend'}</p>
      <p>She is my {star + 3} stars friend</p>
      <button onClick={clickHandle} style={{ marginBottom: '10px', borderRadius: '5px', padding: '5px' }}>Star of Friendship</button>
      <FriendFamily family={props.name}></FriendFamily>
    </div>
  );
}

function FriendFamily(props) {
  return (
    <div>
      <p>I know {props.family}'s family members</p>
    </div>
  );
}
export default App;
