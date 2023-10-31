import React from "react";
import Wrapper from "../assets/wrappers/Loading";
const Loading = () => {
  return (
    <Wrapper>
      <div className="container">
        <div className="row">
          <div className="col-sm-6 text-center">
            {/* <p>loader 0</p> */}
            <div className="loader"></div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Loading;
