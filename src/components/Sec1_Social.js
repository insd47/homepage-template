import React from 'react';
import { ReactComponent as GitHub } from 'socialbutton/github.svg';
import { ReactComponent as Facebook } from 'socialbutton/facebook.svg';
import { ReactComponent as Twitter } from 'socialbutton/twitter.svg';
import { ReactComponent as Instagram } from 'socialbutton/instagram.svg';
import { ReactComponent as YouTube } from 'socialbutton/youtube.svg';

class Sec1_Social extends React.Component {
    static defaultProps = {
        sns: []
    }

    render() {
        const { sns } = this.props;

        const snssns = (service) => {
            if (service.name === "Facebook") {
                    return <Facebook />
            } else if (service.name === "GitHub") {
                    return <GitHub />
            } else if (service.name === "Twitter") {
                return <Twitter />
            } else if (service.name === "YouTube") {
                return <YouTube />
            } else if (service.name === "Instagram") {
                return <Instagram />
            }
        }
        const list = sns.map(
            indx => (
                <a key={`sns_${sns.indexOf(indx)}`} href={sns[sns.indexOf(indx)].link}><button>{snssns(sns[sns.indexOf(indx)])}</button></a>
            )
        )
        return(
            <div className="sec1_social">
                {list}
            </div>
        )
    }
}

export default Sec1_Social;