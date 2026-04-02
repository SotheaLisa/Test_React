import React from 'react'

export const About = () => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around', flexDirection: 'column' }}>
      <br />
      <div style={{textAlign: 'center', fontSize: '2rem', fontWeight: 'bold'}}>Welcome to My Project</div>

      <section
        id="hero"
        className="h-screen w-screen bg-cover justify-start pl-24 relative"
        style={{
          backgroundImage: "url('https://www.agoda.com/wp-content/uploads/2025/12/16-Cambodia.png')"
        }}
      >
      </section>
    </div>
  )
}