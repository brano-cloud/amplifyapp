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
                this.props.handleAttr(attributeMap);
                this.props.handleOpenUrl(`https://${attributeMap.testAttr.value}`)
                //this.setState({ inputLabel01: "testAttr", inputValue01: attributeMap.testAttr.value });
                try {
                    //this.props.handleOpenUrl(`https://${attributeMap.testAttr.value}`)
                    //window.open(`https://${attributeMap.testAttr.value}`);
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
        console.log('render !!');
        return (
            <div className="ccp">
                {/* ccp */}
                <div className="containerDiv" ref={this.containerDiv} />
            </div>
        );
    }
}

export default CCP;