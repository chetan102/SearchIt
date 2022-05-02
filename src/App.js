import {React,useState} from 'react'
import { useEffect } from 'react';
import { Routes,Route } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './index.css'
import Beta from './Main/Beta'
import Home from './Main/Home'



export default function App() {
  let navigate = useNavigate();
  const [keyword, setkeyword] = useState('');
  const [endpoint, setendpoint] = useState('');
  const [answer, setanswer] = useState([]);
  const [isAnswerOk, SetIsAnswerOk] = useState(false);
  const [toggle, settoggle] = useState(false);

  
  
  
  useEffect(() => {
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Host': 'google-web-search.p.rapidapi.com',
      'X-RapidAPI-Key': 'f0892566b9mshc3d8dec8b959f05p1e24b6jsn38bfa46eacef'
    }
  };
  if (endpoint && endpoint.length>=1) {

    
  
  fetch(`https://google-web-search.p.rapidapi.com/?query=+${endpoint}&gl=US&max=10`, options)
    .then(response => response.json())
    .then(data => {
      SetIsAnswerOk(true)
        setanswer(data.results)
      
     })
    .catch(err => console.error(err));
  
    
  }}, [endpoint])

const search =(e)=>{
setkeyword(e.target.value);
console.log(keyword);

}
const mainHandle = (e)=>{ 
  e.preventDefault();
  setendpoint(keyword);
  if(!toggle){
    navigate('/search');
  }
  
  }

const submitHandle = (e)=>{ 
e.preventDefault();
setendpoint(keyword);

}

  return (
    
   <div>
    
      <Routes>
      <Route path='/' element={<Home endpoint={endpoint}  search={search} keyword={keyword} response={mainHandle} />}/> 
      <Route path='/search' element={<Beta search={search} farma={answer} response={submitHandle} isAnswerOk={isAnswerOk} keyword={keyword} endpoint={endpoint}/>}/> 
      </Routes>
    </div>
   
    
    
    
  )
}





