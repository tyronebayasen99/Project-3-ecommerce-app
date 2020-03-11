import React from "react";

import { useSpring, animated } from 'react-spring';

export default function Animate() {

    const props = useSpring({ scroll: 100, from: { scroll: 0 } })
    return <animated.div scrollTop={props.scroll}>
        Maximize your life



        </animated.div>



}
