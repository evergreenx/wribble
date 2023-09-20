import classNames from "classnames";
import React from "react";

import Select from "react-select";
import makeAnimated from "react-select/base";

// const animatedComponents = makeAnimated();

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

export default function AnimatedMulti() {
  // Custom CSS to change the border color
  const customStyles = {
    control: (provided) => ({
      ...provided,
      borderColor: "your-desired-color-here", // Replace with your desired border color
    }),
  };

  return (
    <div className="my-3">
      <Select
        closeMenuOnSelect={false}
        // components={animatedComponents}
        //   defaultValue={[options[4], options[5]]}
        isMulti
        className="rounded-xl"
        isClearable={false}
        placeholder="Add tags"
        options={options}
        styles={customStyles} // Apply custom styles here
      />
    </div>
  );
}
