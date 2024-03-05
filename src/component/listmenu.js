 import React from 'react'

const Listmenu = ({filterItems, allcatigry}) => {
  const filterData = (title)=> {
          filterItems(title)
  }
  return (
    <div>
      <div className='parentBtn d-flex justify-content-center'>
      {
        allcatigry.length >=1 ? (allcatigry.map((ele)=> {
          return(
        <button onClick={()=>filterData(ele) } className='btnMenu'>{ele}</button>
        )
      })): null
    }
    </div>
        
    </div>
  )
}

export default Listmenu;