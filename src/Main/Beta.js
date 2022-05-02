import React from 'react'
import Card from './Card'


export default function Beta({ farma,response,search,isAnswerOk,keyword,loading }) {

  
    return (
      <>
      
      <div className="bet">
      <header className='beta'>
        <div className="beta-nav" >
            <div className="logo-beta">

              <h2>Search</h2>
              <h2 className='second-h'>It</h2>
    </div>
    
    <div className="bar">
      <form action="" onSubmit={response}>
      <input className="searchbar" type="search" title="text" value={keyword} onChange={search}/>
  
      </form>
    </div>   </div>
        </header>

        <section className='contain' >
    <div className="content">
    {isAnswerOk&&farma.map(result =>{
        return (
          
            <Card result={result} key={result.position}/>
          
        )
      })
    }</div>
     
     </section>
     </div>
        </>
    )
}
