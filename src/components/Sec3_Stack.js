import React from 'react';

class Sec3_Stack extends React.Component {
    render() {
        return(
            <div className="sec3_stack">
                <div className="sec3_stack_img" style={{backgroundImage: `url(${this.props.img})`}} />
                <div className="sec3_stack_c">
                    <div className="sec3_stack_cc">
                        <h2>{this.props.title}</h2>
                        <p>{this.props.content}</p>
                    </div>
                    <div className="sec3_stack_p">
                        <div style={{width: "100%"}}>
                            <p style={{left: `${this.props.nav === 3 ? this.props.percent : "0"}`, color: this.props.color}}>{this.props.percent}</p>
                            <div className="sec3_stack_percent">
                                <div style={{width: `${this.props.nav === 3 ? this.props.percent : "0"}`, backgroundColor: this.props.color, height: "3px", transition: "width 0.7s"}}  />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Sec3_Stack;