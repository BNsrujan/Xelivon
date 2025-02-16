import React from 'react'

function ConsultationSection() {
  return (
    <section className="flex justify-center items-center h-screen w-full">
    <iframe
        title='Appointment'
      src="https://calendly.com/pareshtalekar790899/30min"
      className="w-full h-[800px] border-none"
      loading="lazy"
    />
  </section>
  )
}

export default ConsultationSection
