import React from "react";
import "./style.css";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { DateRange } from "react-date-range";
import Button from "../Button";
import { MdDateRange } from "react-icons/md";

export default class MyComponent extends React.Component {
  state = {
    selection: {
      startDate: new Date(),

      endDate: new Date(),
      key: "selection"
    },
    calendarVisible: false
  };

  handleSelect = ranges => {
    console.log(ranges);
    this.setState({ selection: ranges.selection });
  };
  render() {
    const selectionRange = {
      startDate: new Date(),
      // endDate: new Date(),
      key: "selection"
    };
    return (
      <>
        {" "}
        {this.state.calendarVisible ? (
          <>
            {" "}
            <DateRange
              showPreview={false}
              editableDateInputs={true}
              ranges={[this.state.selection]}
              onChange={this.handleSelect}
            />{" "}
            <Button
              onClick={() =>
                this.setState({ calendarVisible: !this.state.calendarVisible })
              }
            >
              Set Date Range <MdDateRange />
            </Button>{" "}
          </>
        ) : (
          <Button
            onClick={() =>
              this.setState({ calendarVisible: !this.state.calendarVisible })
            }
          >
            Choose Date Range <MdDateRange />
          </Button>
        )}
      </>
    );
  }
}
