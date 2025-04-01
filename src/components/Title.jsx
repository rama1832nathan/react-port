import React from 'react'

import SplitText from '../blocks/SplitText/SplitText'

const Title = ({name}) => {
  return (
    <div>
        <SplitText
        text={name}
        className="text-powder text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-nebulax font-semibold text-center mb-8 sm:mb-12"
        delay={50}
        animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
        animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
        easing="easeOutCubic"
        threshold={0.2}
        rootMargin="0px"
      />
    </div>
  )
}

export default Title