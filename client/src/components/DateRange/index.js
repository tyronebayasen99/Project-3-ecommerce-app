import React from "react";
import "./style.css";
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { DateRange } from 'react-date-range';



export default class MyComponent extends React.Component {
    state = {
        selection: {
            startDate: new Date(),

            endDate: new Date(),
            key: 'selection',
        },
        calendarVisible: false
    }


    handleSelect = (ranges) => {
        console.log(ranges);
        this.setState({ selection: ranges.selection })

    }
    render() {
        const selectionRange = {
            startDate: new Date(),
            // endDate: new Date(),
            key: 'selection',
        }
        return (
            <> {
                this.state.calendarVisible ?
                    <> < DateRange
                        showPreview={false}
                        editableDateInputs={true}
                        ranges={[this.state.selection]}
                        onChange={this.handleSelect}

                    /> <button onClick={() => this.setState({ calendarVisible: !this.state.calendarVisible })}>Set Date Range</button></> : <button onClick={() => this.setState({ calendarVisible: !this.state.calendarVisible })}>Choose Date Range</button>
            }
            </>

        )

    }
}

