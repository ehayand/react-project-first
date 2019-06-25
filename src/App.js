import React from 'react';
import './App.css';
import Coustomer from './components/Customer';

const customers = [{
  'id' : 1,
  'image' : 'https://placeimg.com/64/64/1',
  'name' : '박보검',
  'birthday' : '930303',
  'gender' : '남자',
  'job' : '대학생'
},
{
  'id' : 2,
  'image' : 'https://placeimg.com/64/64/2',
  'name' : '김태희',
  'birthday' : '891122',
  'gender' : '여자',
  'job' : '디자이너'
},
{
  'id' : 3,
  'image' : 'https://placeimg.com/64/64/3',
  'name' : '홍길동',
  'birthday' : '911223',
  'gender' : '남자',
  'job' : '프로그래머'
}]

class App extends React.Component {
  render() {
    return (
      <div>
        {
          customers.map(c => {
            return (
              <Coustomer
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
