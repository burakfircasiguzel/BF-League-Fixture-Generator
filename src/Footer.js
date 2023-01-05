import React from 'react'
import { GitHub, Linkedin } from 'react-feather'
import { Card, CardBody, CardText, CardTitle } from 'reactstrap'

const Footer = () => {
    return (
        <Card className='mt-2' >

            <CardBody>
                
                <CardText style={{ display: 'flex', justifyContent: 'space-around' }}>
                    <a href='https://www.linkedin.com/in/burakfircasiguzel/' target='_blank'><Linkedin color='#685dd8' /></a>
                    Burak Fircasiguzel
                    <a href='https://github.com/burakfircasiguzel' target='_blank'> <GitHub color='#685dd8' /></a>
                </CardText>
                
            </CardBody>
        </Card>
    )
}

export default Footer