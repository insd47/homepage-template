import React, { useEffect, useState } from 'react';
import { Nav, Sec0, Sec1, Sec2, Sec3, Activity, Sec3Stack } from './components';
import './App.css';
import './fontface.css';
import './Colors.css';
import pattern from "img/pattern.png";
import hello from 'img/hello.svg';
import {ReactComponent as Logo} from 'img/logo.svg';


// 여기에 이미지 불러오세요 //
import banner1 from 'img/banner1.png';
import banner2 from 'img/banner2.png';
import banner3 from 'img/banner3.png';
import reactimg from 'img/react.png';


const App = () => {

  // 수정할 부분 (소스 수정도 가능합니다) //
    const info = {
      name: "이름", // 소개 란의 이름
      nameeng: "영문 이름이나 닉네임", // 소개 란의 영문 이름
      discription: "당신을 소개하는 글을 적어보세요.", // 소개 란의 설명
      sitediscription: <h1>당신을 표현하는 문장을<br />짤막하게 적어보세요.</h1>, // 메인 화면에 표시될 텍스트
      right:  // 메인 화면 오른쪽에 표시할 것
        <div className="sec0_logo_c">

        </div>,
      nav: <div><h1>제목</h1></div>, //로고 텍스트 (svg 로고를 넣는 것도 좋습니다)
      bgmode: 1 // 0이면 원래 패턴, 1이면 svg 텍스트로 설정됩니다. (텍스트 수정은 src/img/hello.svg)
    }

    const sns = [ // 소셜 네트워킹 서비스 및 GitHub 링크 추가 (Facebook, Github, YouTube, Twitter, Instagram) (순서변경 가능, 추가하는대로 늘어납니다)
      {
        name: "Facebook",
        link: "https://www.facebook.com/"
      },
      {
        name: "GitHub",
        link: "https://github.com/"
      },
      {
        name: "YouTube",
        link: "https://www.youtube.com/"
      },
      {
        name: "Twitter",
        link: "https://www.twitter.com/"
      },
      {
        name: "Instagram",
        link: "https://www.instagram.com/"
      }
    ]

    const sec2cont = (hios) => { // 주요 활동 (3개까지 가능합니다만 소스 수정으로 더 추가할 수 있어요)
      switch (hios){ // eslint-disable-line
        case 1:
          return({
            title: <h1>예시</h1>, // 1번 활동 제목
            content: <p>예시 텍스트입니다.<br />당신의 대표 작업을 여기에 채우세요.</p>, // 1번 활동 내용
            link: "http://www.example.com/",
            img: banner1
          })
        case 2:
          return({
            title: <h1>예시</h1>, // 2번 활동 제목
            content: <p>예시 텍스트입니다.<br />당신의 대표 작업을 여기에 채우세요.</p>, // 2번 활동 내용
            img: banner2
          })
        case 3:
          return({
            title: <h1>예시</h1>, // 3번 활동 제목
            content: <p>예시 텍스트입니다.<br />당신의 대표 작업을 여기에 채우세요.</p>, // 3번 활동 내용
            img: banner3
          })
      }
    };

    const activity = { // 기타 여러 활동
      act:
        <div className="sec2_all">
          <Activity 
          img={banner1} 
          title="예시" 
          content="예시 텍스트입니다. 당신의 작업을 여기에 채우세요." 
          link="http://www.example.com/" 
          />
          <Activity 
          img={banner2} 
          title="예시" 
          content="예시 텍스트입니다. 당신의 작업을 여기에 채우세요." 
          link="http://www.example.com/" 
          />
          <Activity 
          title="예시" 
          content="예시 텍스트입니다. 당신의 작업을 여기에 채우세요." 
          link="http://www.example.com/" 
          />
          <Activity 
          title="예시" 
          content="예시 텍스트입니다. 당신의 작업을 여기에 채우세요." 
          link="http://www.example.com/" 
          />
        </div>
    }

    const stack = { // 스택
      stk:
        <div className="sec3_container">
          <Sec3Stack 
          title="React" 
          content="참고로 이 페이지는 React를 기반으로 만들어졌습니다."
          percent="90%"
          color="#61dafb"
          img={reactimg}
          />
          <Sec3Stack 
          title="예시" 
          content="예시 텍스트입니다. 당신의 스택을 여기에 채우세요."
          percent="40%"
          color="green"
          />
          <Sec3Stack 
          title="예시" 
          content="예시 텍스트입니다. 당신의 스택을 여기에 채우세요."
          percent="60%"
          color="orange"
          />
          <Sec3Stack 
          title="예시" 
          content="예시 텍스트입니다. 당신의 스택을 여기에 채우세요."
          percent="30%"
          color="red"
          />
        </div>
    }


  // 끝 //

  const [ nav, setNav ] = useState(0);

  const onScroll = () => {
    const winScroll = document.documentElement.scrollTop;

    if ( winScroll <= 0 ) setNav(0);
    else if (winScroll < 300 && winScroll > 0) setNav(1);
    else if (winScroll < 600 && winScroll >= 300) setNav(2);
    else setNav(3);
  }
  useEffect(() => {
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll)
  });

  return (
    <div className="react_body">
      <Nav nav={nav} info={info} />
      <Sec0 nav={nav} info={info} />
      <Sec1 nav={nav} info={info} sns={sns} />
      <Sec2 nav={nav} activity={activity} sec2cont={sec2cont} />
      <Sec3 nav={nav} stack={stack} />
      <div className={nav === 0 ? "sec0_bg" : "sec0_bg_in"}>
        <div className="sec0_watermark">
          <p style={{display: "inline-block", verticalAlign: "middle"}}>Powered by </p><Logo style={{verticalAlign: "middle", marginLeft: "7px"}} />
        </div>
        <div className="sec0_bg_pattern" style={{backgroundImage: info.bgmode === 0 ? `url("${pattern}")` : `url(${hello})`, opacity: info.bgmode === 0 ? "0.028" : "0.07"}}/>
      </div>
      <div className="entire_background" />
    </div>
  );
}

export default App;
