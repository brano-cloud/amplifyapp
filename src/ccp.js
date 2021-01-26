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
        const _this = this;
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
        connect.contact(function (contact) {
            contact.onConnecting(function (contact) {
                console.log(`onConnecting `);

            });
            contact.onRefresh(function (contact) {
                console.log(`onRefresh`);
            });

            contact.onAccepted(function (contact) {
                console.log(`onAccepted`);
            });

            contact.onEnded(function () {
                console.log(`onEnded`);
            });
            contact.onConnected(function () {
                console.log(`onConnected(${contact.getContactId()})`);
                let attributeMap = contact.getAttributes();
                console.log(JSON.stringify(attributeMap));
                try {
                    //_this.props.openURL(attributeMap.testAttr.value);
                    window.open("https://www.conn3ct.com");
                } catch (error) {
                    console.log(error);
                }
            });
        });
    }

    newMethod() {
        return this;
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