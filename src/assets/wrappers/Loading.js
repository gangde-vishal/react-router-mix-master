import styled from "styled-components";

const Wrapper = styled.div`
  .loader {
    width: 100px;
    height: 100px;
    display: inline-block;
    margin: 50px auto;
    padding: 0px;
    opacity: 0.5;
    border: 3px solid var(--primary-500);
    -webkit-animation: loader 1s ease-in-out infinite alternate;
    animation: loader 1s ease-in-out infinite alternate;
  }

  .loader:before {
    content: " ";
    position: absolute;
    z-index: -1;
    top: 5px;
    left: 5px;
    right: 5px;
    bottom: 5px;
    border: 3px solid #09acfd;
  }

  .loader:after {
    content: " ";
    position: absolute;
    z-index: -1;
    top: 15px;
    left: 15px;
    right: 15px;
    bottom: 15px;
    border: 3px solid #09acfd;
  }

  @keyframes loader {
    from {
      transform: rotate(0deg) scale(1, 1);
      border-radius: 0px;
    }
    to {
      transform: rotate(360deg) scale(0, 0);
      border-radius: 50px;
    }
  }
  @-webkit-keyframes loader {
    from {
      -webkit-transform: rotate(0deg) scale(1, 1);
      border-radius: 0px;
    }
    to {
      -webkit-transform: rotate(360deg) scale(0, 0);
      border-radius: 50px;
    }
  }
`;
export default Wrapper;
