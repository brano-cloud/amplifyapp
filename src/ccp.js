import { Component } from 'react';
import React from 'react';
import 'amazon-connect-streams';
import './App.css';

class CCP extends Component {
    constructor(props) {
        super(props);
        this.containerDiv = React.createRef();
    }

    componentDidMount() {
        // eslint-disable-next-line no-undef
        connect.core.initCCP(this.containerDiv.current, {
            ccpUrl: "https://brano.awsapps.com/connect/ccp-v2",
            loginPopup: true,
            loginPopupAutoClose: true,
            region: 'us-east-1',
            softphone: {
                allowFramedSoftphone: true
            }
        });
    }

    render() {
        return (
            <div className="ccp">
                {/* ccp */}
                <div className="containerDiv" ref={this.containerDiv} />
            </div>
        );
    }
}

export default CCP;