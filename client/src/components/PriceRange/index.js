import React from "react";
import { Slider, Handles } from 'react-compound-slider'
import './style.css';


const sliderStyle = { // Give the slider some width
    position: 'relative',
    width: '40%',
    height: 100,

}

const railStyle = {
    position: 'absolute',
    marginLeft: "25px",
    width: '100%',
    height: 15,
    marginTop: 35,
    backgroundColor: '#8B9CB6',
}
export function Handle({
    handle: { id, value, percent },
    getHandleProps

}) {
    return (
        <>
            < div className="Range"
                style={{
                    
                    left: `${percent}%`,
                    position: 'absolute',
                    marginLeft: -0,
                    marginTop: 25,
                    zIndex: 2,
                    width: 30,
                    height: 28,
                    border: 0,
                    textAlign: 'center',
                    cursor: 'pointer',
                    borderRadius: '75%',
                    backgroundColor: '#2C4870',
                    color: '#333',
                }
                }
                {...getHandleProps(id)}
            >


                <div style={{ fontFamily: 'Roboto', fontSize: 25, marginTop: -50 }}>
                    {`$${value}`}
                </div>
            </div>

        </>
    )
}

const PriceRange = () => {

    return (
        <>
            <div>
                <Slider
                    rootStyle={sliderStyle}
                    domain={[20, 1000,]}
                    step={1}
                    mode={2}
                    values={[20]}
                >
                    <div style={railStyle} />
                    <Handles>
                        {({ handles, getHandleProps }) => (
                            <div className="slider-handles">
                                {handles.map(handle => (
                                    <Handle
                                        key={handle.id}
                                        handle={handle}
                                        getHandleProps={getHandleProps}
                                    />
                                ))}
                            </div>
                        )}
                    </Handles>
                </Slider>
            </div>
            <div>
                <Slider
                    rootStyle={sliderStyle}
                    domain={[20, 1000,]}
                    step={1}
                    mode={2}
                    values={[20]}
                >
                    <div style={railStyle} />
                    <Handles>
                        {({ handles, getHandleProps }) => (
                            <div className="slider-handles">
                                {handles.map(handle => (
                                    <Handle
                                        key={handle.id}
                                        handle={handle}
                                        getHandleProps={getHandleProps}
                                    />
                                ))}
                            </div>
                        )}
                    </Handles>
                </Slider>
            </div>
        </>
    )
}


export default PriceRange;