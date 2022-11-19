import React from "react";

type Props = {
  count: string;
};

const Options: React.FC<Props> = ({ count }) => {
  const countArray = [...Array(parseInt(count)).keys()];
  return (
    <>
      {countArray.map((x: number) => (
        <option key={x + 1} value={x + 1}>
          {x + 1}
        </option>
      ))}
    </>
  );
};

export default Options;
