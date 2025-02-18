import React from 'react'

function Session() {
  return (
    <div className=" flex w-full  bg-white rounded-2xl justify-center items-center gap-7 px-12">
    
    <section className="flex justify-center items-center w-full">
    <iframe
        title='Appointment'
      src="https://calendly.com/pareshtalekar790899/30min"
      className="w-full h-[800px] border-none rounded-2xl bg-white my-6 "
      loading="lazy"
    />
  </section>
  </div>
  )
}

export default Session