import React from "react";
import { Background } from "./Background";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { Main } from "./Main";

export const ElementDefault = (): JSX.Element => {
  return (
    <div className="w-[1440px] h-[2889px] bg-white">
      <div className="flex flex-col w-[1440px] items-start relative">
        <Background />
        <Header />
        <Main />
        <Footer />
      </div>
    </div>
  );
};
