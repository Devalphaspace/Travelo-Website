import Popular from "./../components/popular/page";
import React from "react";
import Hero from "./../components/hero/page";
import TopValues from "./../components/topvalues/page";
import Recommendation from "./../components/recommendation/page";
import Articles from "./../components/articles/page";
import Subscribe from './../components/subscribe/page';

const App = () => {
  return (
    <div className="w-full mx-auto min-h-[100vh]">
      <Hero />
      <Popular />
      <TopValues />
      <Recommendation />
      <Articles />
      <Subscribe/>
    </div>
  );
};

export default App;
