import { Component } from 'react';
import React from 'react';
import 'amazon-connect-streams';
import './App.css';

class CCP extends Component {
    constructor(props) {
        super(props);
        this.containerDiv = React.createRef();
        this.testaaa = React.createRef();
    }

    initCCP = () => {
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

        // eslint-disable-next-line no-undef
        connect.contact((contact) => {
            console.log('hhh', this.props);

            contact.onConnecting(() => {
                console.log(`onConnecting `);
                let attributeMap = contact.getAttributes();
                try {
                    this.props.handleAttrs(attributeMap);
                } catch (error) {
                    console.log(error);
                }

            });
            contact.onRefresh(() => {
                console.log(`onRefresh`);
            });

            contact.onAccepted(() => {
                console.log(`onAccepted`);
            });

            contact.onEnded(() => {
                console.log(`onEnded`);
            });
            contact.onConnected(() => {
                console.log(`onConnected(${contact.getContactId()})`);
                let attributeMap = contact.getAttributes();
                console.log(JSON.stringify(attributeMap));
                console.log(this.props);
                try {
                    this.props.handleOpenUrl(`https://${attributeMap.testAttr.value}`)
                } catch (error) {
                    console.log(error);
                }
            });
        });
    }

    componentDidMount() {
        this.initCCP();
    }

    render() {
        console.log('render !!', this.props);
        return (
            <div className="ccp">
                {/* ccp */}
                <div className="containerDiv" ref={this.containerDiv} />
                <button className="btn00" onClick={(event) => this.props.handleAttrs(event)}>test</button>
            </div>
        );
    }
}

export default CCP;