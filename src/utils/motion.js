

export const staggerContainer = (staggerChildren, delayChildren) => {
    return {
      hidden: {},
      show: {
        transition: {
          staggerChildren: staggerChildren,
          delayChildren: delayChildren || 0
        }
      }
    }
  }
  


export const fadeIn = (direction,type,delay,duration)=>{
  return{
    hidden:{
      x: direction === 'left' ? 20 : direction === 'right' ? -20 : 0,
      y: direction === 'up'   ? 20 : direction === 'down'  ? -20 :0,
      opacity : 0
    },
    show: {
      x: 0,
      y: 0,
      opacity :1,
      transition: {
        type:type,
        delay: delay,
        duration :duration,
        ease: 'easeOut'
      }
    }
  }
}

export const textVariant = (delay) => {
  return {
    hidden: {
      y: -40,
      opacity: 0
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        duration: 1.25,
        delay: delay
      }
    }
  }
}
export const textVariants = (y,delay) => {
  return {
    hidden: {
      y: y,
      opacity: 0
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        duration: 2,
        delay: delay
      }
    }
  }
}

export const slideIn = (direction, type, delay, duration) => {
  return {
    hidden: {
      x: direction === 'left' ? '-100%' : direction === 'right' ? '100%' : 0,
      y: direction === 'up' ? '100%' : direction === 'down' ? '100%' : 0
    },
    show: {
      x: 0,
      y: 0,
      transition: {
        type: type,
        delay: delay,
        duration: duration,
        ease: 'easeOut'
      }
    }
  }
}
