import React, { Component } from 'react';
import logo from './logo.svg';
import Customer from './components/Customer'
import './App.css';

const customers =[
  {
  'id': 1,
  'image' : 'https://placeimg.com/64/64/1',
  'name': 'a',
  'birthday': '0101',
  'gender' : ' 여자',
  'job' : '대학생'
},
{
  'id': 2,
  'image' : 'https://placeimg.com/64/64/2',
  'name': 'b',
  'birthday': '0201',
  'gender' : ' 남자',
  'job' : '초등학생'
},
{
  'id': 3,
  'image' : 'https://placeimg.com/64/64/3',
  'name': 'c',
  'birthday': '0301',
  'gender' : ' 여자',
  'job' : '중학생'
},
{
  'id': 4,
  'image' : 'https://placeimg.com/64/64/4',
  'name': 'd',
  'birthday': '0401',
  'gender' : ' 여자',
  'job' : '고등학생'
}

]
class App extends Component {
  render(){
  return (
    <div>
      {
        customers.map(c =>{
          return(
            <Customer
            key={c.id}
            id={c.id}
            image={c.image}
            name={c.name}
            birthday={c.birthday}
            gender={c.gender}
            job={c.job}
            />
          )
        })
      }
    </div>
    
  
  )
}
}
export default App;
