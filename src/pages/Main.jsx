import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as M from "../styles/StyledMain";

const Main = ({ dataList }) => {
  const navigate = useNavigate();
  const [selectedUni, setSelectedUni] = useState("");

  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [phone, setPhone] = useState("");
  const [uni, setUni] = useState("");

  const formatPhoneNumber = (value) => {
    const numbers = value.replace(/\D/g, "");

    // 010-0000-0000 형식으로 변환
    if (numbers.length <= 3) {
      return numbers;
    } else if (numbers.length <= 7) {
      return `${numbers.slice(0, 3)}-${numbers.slice(3)}`;
    } else {
      return `${numbers.slice(0, 3)}-${numbers.slice(3, 7)}-${numbers.slice(
        7,
        11,
      )}`;
    }
  };

  const handlePhoneChange = (e) => {
    const formatted = formatPhoneNumber(e.target.value);
    setPhone(formatted);
  };

  // 🔥 조회 버튼 클릭 시 실행되는 함수
  const handleSearch = () => {
    const matchedData = dataList.find(
      (item) =>
        item.Name === name &&
        item.Number === number &&
        item.Phone === phone &&
        item.Result === uni,
    );

    if (matchedData) {
      console.log(matchedData);
      navigate(`/${matchedData.Result}/${matchedData.Id}`);
    } else {
      console.log(matchedData);
      alert("일치하는 정보가 없습니다. 다시 확인해주세요!");
    }
  };

  return (
    <M.Container>
      <M.Background>
        <M.Logo>
          <img
            id="kmu"
            src={`${process.env.PUBLIC_URL}/images/KMU_Logo.svg`}
            alt="국민대_로고"
          />
          <img
            id="dwu"
            src={`${process.env.PUBLIC_URL}/images/DWU_Logo.png`}
            alt="동덕여대_로고"
          />
        </M.Logo>
        <M.Title>
          KMU X DWU
          <br />
          연합 프로젝트
        </M.Title>
        <M.Content>
          <M.Title>진행 방식</M.Title>
          <M.Text>
            총 5~6명의 팀원들과 함께 6월 22일까지
            <br />각 주제에 맞는 서비스를 기획부터 개발, 배포까지
            <br />
            수행하는 연합 프로젝트가 진행될 예정입니다.
            <br />
            <br />
            프로젝트 최종 발표는 6월 22일,
            <br />
            <a href="https://naver.me/GFB1eSlc">서울시공익활동지원센터</a> 에서
            진행되며,
            <br />각 팀의 기획/디자인 아기사자가 발표를 맡게 됩니다.
            <br />
            <br />
            개발 스택에는 제한이 없습니다.
            <br />
            다만, 실제 배포까지 완료하는 것을 원칙으로 합니다.
            <br />
            <br />
            해커톤은 아니지만, 해커톤과 같이
            <br />
            수익성·실현 가능성·차별성 등<br />
            서비스의 완성도를 높일 수 있는 요소들을
            <br />
            충분히 고민하며 준비해주시길 바랍니다.
            <br />
            <br />
            -<br />
            <br />
            타 학교와 연합으로 진행되는 프로젝트인 만큼,
            <br />
            팀원들과 적극적으로 협업하고 교류하며
            <br />
            서로에게 좋은 경험이 될 수 있는 시간이 되길 바랍니다.
          </M.Text>
          <M.From>국민대학교, 동덕여자대학교 멋사 14기 운영진 일동</M.From>
        </M.Content>

        <M.Lion>
          <img src={`${process.env.PUBLIC_URL}/images/Lion.png`} alt="lion" />
        </M.Lion>
        <M.Title>팀 확인하러 가기</M.Title>
        <M.Input>
          <M.Name>
            <div>이름</div>
            <input
              type="text"
              placeholder="김멋사"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </M.Name>
          <M.Number>
            <div>학번</div>
            <input
              type="text"
              placeholder="20991234"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
            />
          </M.Number>
          <M.Phone>
            <div>전화번호</div>
            <input
              type="text"
              placeholder="010-0000-0000"
              value={phone}
              onChange={handlePhoneChange}
              maxLength="13"
            />
          </M.Phone>
          <M.Uni>
            <M.Kmu
              active={selectedUni === "kmu"}
              onClick={() => {
                setSelectedUni("kmu");
                setUni("kmu");
              }}
            >
              국민대
            </M.Kmu>

            <M.Dwu
              active={selectedUni === "dwu"}
              onClick={() => {
                setSelectedUni("dwu");
                setUni("dwu");
              }}
            >
              동덕여대
            </M.Dwu>
          </M.Uni>
          <M.Go onClick={handleSearch}>
            <div>조회</div>
          </M.Go>
        </M.Input>
      </M.Background>
    </M.Container>
  );
};

export default Main;
