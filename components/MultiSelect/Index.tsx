import React from "react";

import Select from "react-select";
import makeAnimated from "react-select/animated";

const animatedComponents = makeAnimated();

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

export default function AnimatedMulti() {
  return (

    <div className="my-3">
    <Select
      closeMenuOnSelect={false}
      components={animatedComponents}
    //   defaultValue={[options[4], options[5]]}
      isMulti

      isClearable ={false}
      classNames={{
        control: (state) =>
          state.isFocused ? 'red' : 'blue',
      }}
      placeholder="Add tags"
      options={options}
    />
    </div>
  );
}
