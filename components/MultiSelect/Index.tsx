import classNames from "classnames";
import React from "react";

import Select from "react-select";
import makeAnimated from "react-select/base";

// const animatedComponents = makeAnimated();

const options = [
  { value: "ui", label: "ui" },
  { value: "animation", label: "animation" },
  { value: "graphic design", label: "graphic design" },
  { value: "web design", label: "web design" },
  { value: "illustration", label: "illustration" },
];

export default function AnimatedMulti() {
  // Custom CSS to change the border color
  const CustomSelectStyles = {
    container: (provided: any) => ({
      ...provided,
      width: "100%",
      height: "100%",
      borderRadius: "10px",
      background: "#fff",
      border: " 1px solid #c0c0c0",
      position: "relative",
      boxSizing: "border-box",
    }),

    menu: (
      provided: any,
      state: { selectProps: { width: any; menuColor: any } }
    ) => ({
      ...provided,
      width: state.selectProps.width,
      borderBottom: "1px dotted pink",
      color: state.selectProps.menuColor,
      padding: 5,
      background: "#fff",
      zIndex: 99,
      position:'absolute'
    }),

    control: (_: any, { selectProps: { width } }: any) => ({
      width: width,
      display: "flex",
    }),

    singleValue: (provided: any, state: any) => ({
      ...provided,
      color: "#037ACF",
      fontWeight: 500,
    }),

    placeholder: (provided: any, state: any) => ({
      ...provided,
      color: "#3d3d4e",
      fontWeight: 500,
    }),

    option: (provided: any, state: any) => ({
      ...provided,
      color: "#3d3d4e",
      fontWeight: 500,
    }),
    indicatorSeparator: (provided: any, state: any) => ({
      ...provided,
      display: "none",
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
        styles={CustomSelectStyles} // Apply custom styles here
      />
    </div>
  );
}
