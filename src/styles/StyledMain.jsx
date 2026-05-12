import { styled } from "styled-components";

export const Container = styled.div`
  position: relative;
  margin: 0 auto;
  margin-top: 0px;
  padding: 0; /* 불필요한 패딩 제거 */
  box-sizing: border-box; /* 패딩이 width에 포함되도록 설정 */
  display: flex;
  flex-direction: column;
  width: 393px;
  height: 100%;
  //   justify-content: center;
  align-items: center;
  overflow-x: hidden;
  background: var(--x, linear-gradient(176deg, #f1b865 0%, #cc354b 86.24%));
`;

export const Background = styled.div`
  margin-top: 30px;
  margin-bottom: 30px;
  width: 343px;
  height: 1441px;
  flex-shrink: 0;
  background: #fff;
  box-shadow: 0px 0px 10px 0px #fff;
  display: flex;
  flex-direction: column;
  //   justify-content: center;
  align-items: center;
  position: relative; /* 상대적 위치 지정 */
  z-index: 0; /* Lion이 배경 뒤로 안 가게 조정 */
`;

export const Logo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 23px;
  width: 100%;
  margin-top: 24px;
  margin-bottom: -20px;

  #kmu {
    width: 100px;
    height: 100px;
    flex-shrink: 0;
  }

  #dwu {
    width: 74px;
    height: 73px;
    aspect-ratio: 74/73;
  }
`;

export const Title = styled.div`
  margin-top: 27px;
  text-align: center;
  font-family: "DNFBitBitv2";
  font-size: 25px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.5px;
  background: linear-gradient(
    176deg,
    #cc354b 13.76%,
    #df7958 58.65%,
    #f1b865 100%
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const Content = styled.div`
  width: 320px;
  height: 535px;
  border-radius: 15px;
  border: 1px solid var(--x, #f1b865);
  margin-top: 14px;
`;

export const Text = styled.div`
  color: #202020;
  text-align: center;
  font-family: "Pretendard Variable";
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.3px;
  margin-top: 24px;

  span {
    font-weight: 700;
    text-decoration-line: underline;
    text-decoration-style: solid;
    text-decoration-skip-ink: auto;
    text-decoration-thickness: auto;
    text-underline-offset: auto;
    text-underline-position: from-font;
  }
`;

export const From = styled.div`
  color: #202020;
  text-align: center;
  font-family: "Pretendard Variable";
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.24px;
  margin-top: 30px;
`;

export const Lion = styled.div`
  margin-top: 23px;
  margin-bottom: -32px;

  img {
    width: 254px;
    height: 169px;
    aspect-ratio: 254/169;
  }
`;

export const Input = styled.div`
  margin-top: 33px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  justify-content: center;
  align-items: center;
`;

export const Name = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  justify-content: center;
  align-items: start;

  div {
    color: #000;
    text-align: center;
    font-family: "Pretendard Variable";
    font-size: 15px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: -0.3px;
  }

  input {
    width: 230px;
    height: 40px;
    flex-shrink: 0;
    border-radius: 5px;
    border: 1px solid #cc354b;
    color: black;
    font-family: "Pretendard Variable";
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 1.5px;
    padding-left: 14px;
    background: transparent;
    outline: none; /* 포커스 시 기본 테두리 제거 */
  }

  input::placeholder {
    color: #888787;
    font-family: "Pretendard Variable";
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 1.5px;
  }
`;

export const Number = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  justify-content: center;
  align-items: start;

  div {
    color: #000;
    text-align: center;
    font-family: "Pretendard Variable";
    font-size: 15px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: -0.3px;
  }

  input {
    width: 230px;
    height: 40px;
    flex-shrink: 0;
    border-radius: 5px;
    border: 1px solid #cc354b;
    color: black;
    font-family: "Pretendard Variable";
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 1.5px;
    padding-left: 14px;
    background: transparent;
    outline: none; /* 포커스 시 기본 테두리 제거 */
  }

  input::placeholder {
    color: #888787;
    font-family: "Pretendard Variable";
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 1.5px;
  }
`;

export const Phone = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  justify-content: center;
  align-items: start;

  div {
    color: #000;
    text-align: center;
    font-family: "Pretendard Variable";
    font-size: 15px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: -0.3px;
  }

  input {
    width: 230px;
    height: 40px;
    flex-shrink: 0;
    border-radius: 5px;
    border: 1px solid #cc354b;
    color: black;
    font-family: "Pretendard Variable";
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 1.5px;
    padding-left: 14px;
    background: transparent;
    outline: none; /* 포커스 시 기본 테두리 제거 */
  }

  input::placeholder {
    color: #888787;
    font-family: "Pretendard Variable";
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 1.5px;
  }
`;

export const Uni = styled.div`
  margin-top: 13px;
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

export const Kmu = styled.div`
  width: 110px;
  height: 40px;
  border-radius: 5px;
  border: 1px solid
    ${(props) => (props.active ? "#CC354B" : "rgba(0, 0, 0, 0.3)")};
  background: ${(props) => (props.active ? "#CC354B" : "transparent")};

  display: flex;
  align-items: center;
  justify-content: center;

  color: ${(props) => (props.active ? "#FFF" : "#202020")};
  text-align: center;
  font-family: Pretendard;
  font-size: 16px;
  font-weight: 500;
  line-height: 25px;
  letter-spacing: -0.32px;

  cursor: pointer;
`;

export const Dwu = styled.div`
  width: 110px;
  height: 40px;
  border-radius: 5px;
  border: 1px solid
    ${(props) => (props.active ? "#CC354B" : "rgba(0, 0, 0, 0.3)")};
  background: ${(props) => (props.active ? "#CC354B" : "transparent")};

  display: flex;
  align-items: center;
  justify-content: center;

  color: ${(props) => (props.active ? "#FFF" : "#202020")};
  text-align: center;
  font-family: Pretendard;
  font-size: 16px;
  font-weight: 500;
  line-height: 25px;
  letter-spacing: -0.32px;

  cursor: pointer;
`;

export const Go = styled.div`
  margin-top: 25px;
  display: flex;
  width: 230px;
  height: 40px;
  padding: 9px 99px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
  border-radius: 5px;
  background: #cc354b;

  div {
    color: #fff;
    text-align: center;
    font-family: "Pretendard Variable";
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    letter-spacing: -0.32px;
  }
`;
