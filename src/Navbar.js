import React from 'react'
import { Card, CardBody, CardHeader, CardText, CardTitle, Nav, NavItem, NavLink } from 'reactstrap'
import logo512 from './assets/logo512.png';
import logo from './assets/logo192.png';
const Navbar = () => {
    return (

        <Card className='mt-2'>
            <CardBody>
                <CardText>
                <img src={logo} style={{width : '20px', alignItems : 'center' }} className='ml-2'></img>
                    <b>  BF Fixture | Fixture.website 🚀</b>
                    
                </CardText>
            </CardBody>
        </Card>
    )
}

export default Navbar