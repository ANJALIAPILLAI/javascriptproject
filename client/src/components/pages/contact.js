import React from "react";
import { Card, CardText, CardBody,
    CardTitle, CardSubtitle, CardGroup } from 'reactstrap';

function Contact(){

    return ( 

        <div className="container">
            <br/>
            <div className="w3-center w3-padding-64">
                    <h1 className="w3-xlarge w3-bottombar w3-border-dark-grey w3-padding-16">Contact Us</h1>
            </div>
            <hr/>
            <CardGroup>
                <Card style={{ width: '20rem', background: '#95aacc'}}>    
                    <CardBody>
                        <CardTitle><strong>Anjali AjithkumarPillai</strong></CardTitle>
                        <CardSubtitle className="mb-2 text-muted">Georgian College</CardSubtitle>
                        <CardText><small>Anjali.AjithkumarPillai@MyGeorgian.ca</small>
                        </CardText>
                    </CardBody>
                </Card>
                <Card style={{ width: '20rem', background: '#bab095' }}>
                    <CardBody>
                        <CardTitle><strong>Jo Lim</strong></CardTitle>
                        <CardSubtitle className="mb-2 text-muted">Georgian College</CardSubtitle>
                        <CardText>
                        <small>Jo.Lim@MyGeorgian.ca</small>
                        </CardText>
                    </CardBody>
                </Card>
                <Card style={{ width: '20rem', background: '#bfd6ae' }}>
                    <CardBody>
                        <CardTitle><strong>Lynette Xie</strong></CardTitle>
                        <CardSubtitle className="mb-2 text-muted">Georgian College</CardSubtitle>
                        <CardText><small>Lynette.Xie@MyGeorgian.ca</small></CardText>
                    </CardBody>
                </Card>
            </CardGroup>
        </div>  

    );
}

export default Contact;