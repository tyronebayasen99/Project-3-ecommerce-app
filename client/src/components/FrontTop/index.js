import { render } from 'react-dom'
import React, { useState, useEffect } from 'react'
import { useTransition, animated, config } from 'react-spring'
import './styles.css'

const slides = [
    { id: 0, url: 'photo-1544572571-ab94fd872ce4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1534&q=80' },
    { id: 1, url: 'photo-1540206395-68808572332f?ixlib=rb-1.2.1&w=1181&q=80' },
    { id: 2, url: 'photo-1483304528321-0674f0040030?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80' },
    { id: 3, url: 'photo-1535916707207-35f97e715e1c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=667&q=80' },
    { id: 4, url: 'photos/KZHhnb6XsQI' },
]

const FrontTop = () => {
    const [index, set] = useState(0)
    const transitions = useTransition(slides[index], item => item.id, {
        from: { opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
        config: config.molasses,
    })
    useEffect(() => void setInterval(() => set(state => (state + 1) % 5), 5000), [])
    return transitions.map(({ item, props, key }) => (
        <animated.div
            key={key}
            className="slides"
            style={{ ...props, backgroundImage: `url(https://images.unsplash.com/${item.url}&auto=format&fit=crop)` }}
        ><div className="FrontPage">Maximize your life</div><div className="miniHeader">In the end, we only regret not living life to the max.</div> <div className="bottomInfo">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div></animated.div>
    ))
}

// render(<App />, document.getElementById('root'))

export default FrontTop;
















// import React from 'react';
// import { useSpring, animated } from 'react-spring';
// import './styles.css';

// export default function FrontTop() {
//     const props = useSpring({
//         from: { left: '0%', top: '0%', width: '0%', height: '0%', background: 'lightgreen' },
//         to: async next => {
//             while (1) {
//                 await next({ left: '0%', top: '0%', width: '100%', height: '100%', background: 'lightblue' })
//                 await next({ height: '50%', background: 'lightgreen' })
//                 await next({ width: '50%', left: '50%', background: 'lightgoldenrodyellow' })
//                 await next({ top: '0%', height: '100%', background: 'lightpink' })
//                 await next({ top: '50%', height: '50%', background: 'lightsalmon' })
//                 await next({ width: '100%', left: '0%', background: 'lightcoral' })
//                 await next({ width: '50%', background: 'lightseagreen' })
//                 await next({ top: '0%', height: '100%', background: 'lightskyblue' })
//                 await next({ width: '100%', background: 'lightslategrey' })
//             }
//         },
//     })
//     return <><animated.div className="script-box" style={props} /><div className="FrontPage">Maximize your life</div></>
// }

