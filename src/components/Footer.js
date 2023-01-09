import React from 'react'
import { GitHub, Linkedin } from 'react-feather'
import { Card, CardBody, CardText } from 'reactstrap'
const style = {
    display: 'flex',
    justifyContent: 'space-around'
}
const Footer = () => {
    return (
        <Card className='mt-2 mb-2' >
            <CardBody>
                <CardText style={style}>
                    <a href='https://www.linkedin.com/in/burakfircasiguzel/' target='_blank'><Linkedin color='#685dd8' /></a>
                    - Burak Fircasiguzel -
                    <a href='https://github.com/burakfircasiguzel' target='_blank'> <GitHub color='#685dd8' /></a>
                </CardText>
            </CardBody>
        </Card>
    )
}

export default Footer