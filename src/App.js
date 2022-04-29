import {React,useState} from 'react'
import { useEffect } from 'react';
import './index.css'
import Beta from './Main/Beta'
export default function App() {

  const [keyword, setkeyword] = useState('');
  const [endpoint, setendpoint] = useState('');
  const [answer, setanswer] = useState([]);
  const [isAnswerOk, SetIsAnswerOk] = useState(false);
  
  useEffect(() => {
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Host': 'google-web-search.p.rapidapi.com',
      'X-RapidAPI-Key': 'f0892566b9mshc3d8dec8b959f05p1e24b6jsn38bfa46eacef'
    }
  };
  
  fetch(`https://google-web-search.p.rapidapi.com/?query=+${endpoint}&gl=US&max=10`, options)
    .then(response => response.json())
    .then(data => {
      SetIsAnswerOk(true)
      setanswer(data.results)
     })
     .then(data => console.log(data.results))
    .catch(err => console.error(err));
  }, [endpoint])

const search =(e)=>{
setkeyword(e.target.value);
console.log(keyword);

}

const submitHandle = (e)=>{
e.preventDefault();
setendpoint(keyword);
}

  return (
    <>
    <div>
   {<Beta search={search} farma={answer} response={submitHandle} isAnswerOk={isAnswerOk}/>}
    </div>
    </>
  )
}





