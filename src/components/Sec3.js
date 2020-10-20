import React from 'react';

const Sec3 = (props) => {
    const { nav, stack } = props;

    return(
        <section style={{pointerEvents: nav === 3 ? "" : "none"}} className={nav === 3 ? "sec3" : "sec3 sec3_in"}>
            {stack.stk}
            <div className="page_title">
                <p className="page_title">stack</p>
            </div>
        </section>
    )
}

export default Sec3;