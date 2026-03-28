import React from 'react'

export const Body = () => {
  return (

    <div>
        <h1>Body Component</h1>

        <div style={{ display: 'flex', justifyContent: 'space-between', gap: '20px' }}>
        <img src='https://www.gardenia.net/wp-content/uploads/2024/11/shutterstock_669619393.jpg' alt="Project Image"></img>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsXWgGDYHAb1g8FDwx_KfAzo01FBKxHF0CBg&s' alt="Project Image" style={{ width: '100%', height: 'auto' }}></img>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyZkgVwl1_mP9woGlKg-S-tYU8fjkPnNcl0g&s' alt="Project Image" style={{width: '100%', height: 'auto'}}></img>
      </div><br></br>

      <div style={{ display: 'flex', justifyContent: 'space-between', gap: '20px' }}>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSN36ZE9zoW0bUEG7CWNQttaEef4Doq8o82aQ&s' alt="Project Image" style={{ width: '35%', height: '500px' }}></img>
        <img src='https://hips.hearstapps.com/hmg-prod/images/assortment-of-pink-shaded-zinnias-in-a-flower-patch-royalty-free-image-1702929155.jpg?crop=0.66667xw:1xh;center,top' alt="Project Image" style={{ width: '35%', height: '500px' }}></img>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWv2vYCh1OjzgygOu2W5yGRvSSIPPnLK2Oag&s' alt="Project Image" style={{width: '35%', height: '500px'}}></img>
      </div><br></br>

    </div>
  )
}

export const Img = () => {
  return (

    <div>
        <div className="image-container">
      <img
        src="https://www.gardenia.net/wp-content/uploads/2024/11/shutterstock_669619393.jpg"
        alt="img1"
      />
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsXWgGDYHAb1g8FDwx_KfAzo01FBKxHF0CBg&s"
        alt="img2"
      />
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyZkgVwl1_mP9woGlKg-S-tYU8fjkPnNcl0g&s"
        alt="img3"
      />
    </div>
    </div>
  )
}
