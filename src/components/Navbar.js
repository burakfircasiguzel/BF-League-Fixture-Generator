import React from 'react'
import { Card, CardBody, CardText, } from 'reactstrap'
import logo from '../assets/logo192.png';
const Navbar = () => {
    return (
        <Card className='mt-2'>
            <CardBody>
                <CardText>
                <img src={logo} style={{width : '20px', alignItems : 'center' }} className='ml-2'></img>
                    <b>  BF Fixture | Fixture.website 🚀</b>
                </CardText>
                <CardText ><small>This project is a open-source. You can find all code in <a href='https://github.com/burakfircasiguzel/BF-League-Fixture-Generator' target='_blank'> Github Repo</a></small></CardText>
            </CardBody>
        </Card>
    )
}

export default Navbar