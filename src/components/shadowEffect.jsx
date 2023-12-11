import React, { useEffect, useState } from 'react'

export default function ShadowEffect({positionLeft, positionRight}) {
    const [left, setLeft] = useState('')
    const [right, setRight] = useState('')

    const styles = {
        width: '800px',
        height: '800px',
        background: 'linear-gradient(#563D7C, #000)',
        borderRadius: '100%',
        opacity: '0.9',
        filter: 'blur(100px)',
        position: 'absolute',
        right: `${right}`,
        left: `${left}`,
        zIndex: 0,
        top: '100px',
    }


    useEffect(() => {
        setLeft(positionLeft)
        setRight(positionRight)

        console.log('positionLeft: ', positionLeft);
        console.log('positionRight: ', positionRight);
        
        console.log('right: ', right);
        console.log('left: ', left);
        
    }, [positionLeft, positionRight, left, right])
  return (
    <div style={styles}>shadowEffect</div>
  )
}
