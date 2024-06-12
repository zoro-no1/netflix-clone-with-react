import React from 'react'

export default function Section({line,src,srcVideo,css,sty}) {
  return (
    <section className= {sty}  >
    <div>
      <div className=' font-black text-5xl'>
      {line}
      </div>
    </div>
   <action className=" relative ">

      <img className=" z-10 relative " src={src} alt="" />
      <video className={css} src={srcVideo} autoPlay muted  loop></video>
   
   </action>
  </section>
  )
}
