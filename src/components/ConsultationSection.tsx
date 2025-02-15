import React from 'react'

function ConsultationSection() {
  return (
    <div className="flex justify-center items-center h-screen w-full">
    <iframe
        title='Appointment'
      src="https://calendly.com/pareshtalekar790899/30min"
      className="w-full h-[800px] border-none"
      loading="lazy"
    />
  </div>
  )
}

export default ConsultationSection
