import React, { useState } from 'react';
import { ReactComponent as Arrow } from 'img/iconmonstr-arrow-64.svg';

const Sec2 = (props) => {
    const { nav, sec2cont, activity } = props
    const [ sec2mode, SetSec2Mode ] = useState(false);

    const [ sec2stat, SetSec2stat ] = useState(1);

    const lockScroll = () => {
        document.body.style.overflow = "hidden";
    };

    const unlockScroll = () => {
        document.body.style.overflow = "auto";
    };

    const max = 3;
    const Arrower = (props) => {
      if (props === "+"){
        SetSec2stat(sec2stat + 1)
      } else if (props === "-") {
        SetSec2stat(sec2stat - 1)
      }
    }

    return(
        <section className={nav === 2 ? "sec2" : "sec2 sec2_in"} style={{pointerEvents: nav === 2 ? "" : "none", display: sec2mode ? "flex" : "", alignItems: sec2mode ? "normal !important" : ""}}>
        <div className={sec2mode ? "sec2mode" : "sec2_left"}>
          <ul>
            <li><button onClick={() => {SetSec2Mode(false); unlockScroll()}} className={!sec2mode ? "sec2_button_a" : ""}>주요</button></li>
            <li><button onClick={() => {SetSec2Mode(true); lockScroll()}} className={sec2mode ? "sec2_button_a" : ""}>전체</button></li>
          </ul>
            {sec2mode ? 
            activity.act :
            <div className="sec2_grid">
            <div style={{height: "45px"}} />
            <div className="sec1_title">
              {sec2cont(sec2stat).title}
            </div>
            <div className="sec1_content">
              <div className="sec1_txtline" />
              {sec2cont(sec2stat).content}
            </div>
            {sec2cont(sec2stat).link !== undefined ? <a href={sec2cont(sec2stat).link}><button className="sec2_button">보기</button></a> : ""}
            <ul className="sec2_content">
                <li><button onClick={() => {SetSec2stat(1);}} className={sec2stat === 1 ? "sec2_button_a" : ""}>1</button></li>
                <li><button onClick={() => {SetSec2stat(2);}} className={sec2stat === 2 ? "sec2_button_a" : ""}>2</button></li>
                <li><button onClick={() => {SetSec2stat(3);}} className={sec2stat === 3 ? "sec2_button_a" : ""}>3</button></li>              </ul>
          </div>}
        </div>
        {sec2mode ? "" : <div className="sec2_bannera">
          <div style={{backgroundImage: `url(${sec2cont(1).img})`}} className={sec2stat === 1 ? "sec2_banner" : sec2stat === 2 ? "sec2_banner_left" : sec2stat >= 3 ? "sec2_banner_leftb" : ""} />
          <div style={{backgroundImage: `url(${sec2cont(2).img})`}} className={sec2stat === 2 ? "sec2_banner" : sec2stat === 1 ? "sec2_banner_right" : sec2stat === 3 ? "sec2_banner_left" : ""} />
          <div style={{backgroundImage: `url(${sec2cont(3).img})`}} className={sec2stat === 3 ? "sec2_banner" : sec2stat === 2 ? "sec2_banner_right" : sec2stat <= 1 ? "sec2_banner_rightb" : ""} />
          <div className="sec2_arrowdiv">
            <div>
              {sec2stat === 1 ? "" : <Arrow onClick={() => {Arrower("-");}} className="sec2_arrow" />}
            </div>
            <div style={{display: "flex", justifyContent: "flex-end"}}>
              {sec2stat === max ? "" : <Arrow onClick={() => {Arrower("+");}} className="sec2_arrowr" />}
            </div>
          </div>
        </div>}
        {sec2mode ? "" :<div className="page_title">
          <p className="page_title">activities</p>
        </div>}
      </section>
    )
}

export default Sec2;