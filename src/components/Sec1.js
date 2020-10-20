import React from 'react';
import Sec1Social from './Sec1_Social';

const Sec1 = (props) => {
    const { nav, info, sns } = props;

    return(
        <section style={{pointerEvents: nav === 1 ? "" : "none"}} className={nav === 1 ? "sec1" : "sec1 sec1_in"}>
            <div>
            <div className="sec1_photo" />
            </div>
            <div className="sec1_padding">
            <div className="sec1_title">
            <h1>{info.name}</h1><p>{info.nameeng}</p>
            </div>
            <div className="sec1_content">
                <div className="sec1_txtline" />
                <p>{info.discription}</p>
            </div>
            <div className="sec1_social">
                <Sec1Social sns={sns} />
            </div>
            </div>
            <div className="page_title">
            <p className="page_title">introduce</p>
            </div>
        </section>
    )
}

export default Sec1;