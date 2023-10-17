import { FC } from "react";


export const DarkLayout: FC<{ children: JSX.Element }> = ({ children }) => {
  return (
    <>
      <h3>Dark-Layout</h3>
      { children }
    </>
  );
};
