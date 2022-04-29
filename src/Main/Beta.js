import React from 'react'
export default function Beta({ farma,response,search,isAnswerOk }) {

  console.log(farma);
    return (
      <>
      <header className='beta'>
        <div className="beta-nav" >
            <div className="logo-beta">
      <img alt="Google" src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"/>
    </div>
    
    <div className="bar">
      <form action="" onSubmit={response}>
      <input className="searchbar" type="search" title="Search" onChange={search}/>
  <button type="submit">Search</button>
      </form>
    </div>   

     
        </div>
        </header>
        
        </>
    )
}
