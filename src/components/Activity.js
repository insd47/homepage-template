import React from 'react';

const Activity = (props) => {
    return(
        <a className="sec2_all_a" href={props.link}>
            <button>
                <div className="sec2_all_p" style={{backgroundImage: `url("${props.img}"`}} />
                <h1>{props.title}</h1>
                <p>{props.content}</p>
            </button>
        </a>
    )
}

export default Activity;