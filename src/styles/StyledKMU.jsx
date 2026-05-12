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
  background: var(
    --_,
    linear-gradient(
      180deg,
      #f39524 0%,
      #f8af43 32.21%,
      #8ec154 72.12%,
      #26ae7d 100%
    )
  );
`;

export const Background = styled.div`
  margin-top: 30px;
  margin-bottom: 30px;
  width: 343px;
  height: 784px;
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
  margin-top: 16px;

  img {
    width: 131px;
    height: 131px;
    flex-shrink: 0;
  }
`;

export const Name = styled.div`
  margin-top: 8px;
  font-family: Pretendard;
  font-size: 30px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
  letter-spacing: -0.6px;
  text-align: center;
  display: flex;
  flex-direction: row;

  #name {
    color: #0085ff;
  }

  #is {
    color: #202020;
  }
`;

export const Team = styled.div`
  margin-top: 8px;
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 800;
  line-height: 25px;
  letter-spacing: -0.4px;
  display: flex;
  flex-direction: row;

  #num {
    color: #0085ff;
  }

  #is {
    color: #202020;
  }
`;

export const Select = styled.div`
  width: 306px;
  height: 285px;
  border-radius: 15px;
  border: 1px solid var(--_, #f39524);
  margin-top: 25px;
`;

export const Title = styled.div`
  color: #f39524;
  text-align: center;
  font-family: "DNFBitBitv2";
  font-size: 25px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.5px;
  margin-top: 25px;
`;

export const Text = styled.div`
  color: #202020;
  text-align: center;
  font-family: "Pretendard Variable";
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.32px;
  margin-top: 24px;
`;

export const Topic = styled.div`
  width: 306px;
  height: 205px;
  border-radius: 15px;
  border: 1px solid var(--_, #f39524);
  margin-top: 22px;
`;

export const Text2 = styled.div`
  color: #202020;
  text-align: left;
  margin-left: 10px;
  font-family: "Pretendard Variable";
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.32px;
  margin-top: 24px;

  ul {
    padding-left: 20px; /* 목록 들여쓰기 */
    margin: 0;
  }
`;
