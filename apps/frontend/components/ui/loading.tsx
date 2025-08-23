import React from 'react';
import styled from 'styled-components';

const Loader = () => {
  return (
    <StyledWrapper>
      <div className="spinner">
        <div className="inner">
        </div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .spinner {
   width: 40px;
   height: 40px;
   border-radius: 100%;
   background-color: aqua;
   display: grid;
   place-items: center;
   animation: zoomin 1.5s infinite alternate-reverse;
   position: relative;
  }

  .inner {
   background-color: #212121;
   width: 80%;
   height: 80%;
   border-radius: 100%;
  }

  @keyframes zoomin {
   0% {
    transform: scale(1);
    box-shadow: 0 0 100px 20px rgb(16, 71, 71);
   }

   100% {
    transform: scale(1.5);
    box-shadow: 0 0 100px 20px #000;
   }
  }`;

export default Loader;
