import React from 'react'


export default function Home({keyword,search,response,endpoint}) {

  
    return (
        <div className="home">
  <center>
    <div className="logo">
    <h2>Search</h2>
              <h2 className='second'>It</h2>
    </div>

    <form onSubmit={response}>
    <div className="bar">
      <input className="searchbar" type="text" title="Search" value={keyword} onChange={search}/>
   
      
    </div>


    <div className="buttons">
      <button className="button" type="button" onClick={response} > Search</button>
     <a href="https://github.com/chetan102/SearchIt"> <button className="button" type="button" >GitHub</button></a>
     </div>
     </form>
</center></div>
    )
}
