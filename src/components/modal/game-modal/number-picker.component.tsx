import { FC, useEffect, useState } from "react";
import Picker from "react-mobile-picker";
import { gameScore } from "../../../signals/scores.signals";

type Digits = {
  first: string[];
  second: string[];
  third: string[];
  [key: string]: string[];
};

const generateNumbers = () => {
  return Array.from({ length: 10 }, (_, i) => i.toString());
};

const numbers = generateNumbers();

const digits: Digits = {
  first: numbers,
  second: numbers,
  third: numbers,
};

const renderOptions = (options: string[], selectedColor: string) => {
  return options.map((option) => (
    <Picker.Item key={option} value={option}>
      {({ selected }) => (
        <div
          className={
            selected ? `font-semibold ${selectedColor}` : "text-neutral-400"
          }
        >
          {option}
        </div>
      )}
    </Picker.Item>
  ));
};

export const NumberPicker: FC<{ index: number }> = ({ index }) => {
  const [pickerValue, setPickerValue] = useState({
    first: "2",
    second: "0",
    third: "0",
  });

  useEffect(() => {
    gameScore.value[index].value.mpr = Number(
      `${pickerValue.first}.${pickerValue.second}${pickerValue.third}`
    );
  }, [pickerValue, index]);

  return (
    <Picker
      className="items-center w-full"
      height={100}
      value={pickerValue}
      onChange={setPickerValue}
    >
      <Picker.Column key="first" name="first">
        {renderOptions(digits.first, "text-blue-500")}
      </Picker.Column>
      <span>.</span>
      <Picker.Column key="second" name="second">
        {renderOptions(digits.second, "text-blue-500")}
      </Picker.Column>
      <Picker.Column key="third" name="third">
        {renderOptions(digits.third, "text-blue-500")}
      </Picker.Column>
    </Picker>
  );
};
