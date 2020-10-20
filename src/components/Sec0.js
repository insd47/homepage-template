import React from 'react';

const Sec0 = (props) => {
    const { nav, info } = props;

    return(
        <section style={{pointerEvents: nav === 0 ? "" : "none"}} className={nav === 0 ? "sec0" : "sec0 sec0_in"}>
            <div className="sec0_logo_cc">
                {info.right}
            </div>
            <div className="sec0_1">
                {info.sitediscription}
            <div className="sec0_scroll_c">
                <svg width="24" height="16" viewBox="0 0 24 16">
                <path d="M23.245,4,12,18.374.781,4,0,4.619,12,20,24,4.609Z" transform="translate(0 -4)" fillRule="evenodd"/>
                </svg>
                <p className="sec0_scroll">스크롤해주세요.</p>
            </div>
            </div>
        </section>
    )
}

export default Sec0;