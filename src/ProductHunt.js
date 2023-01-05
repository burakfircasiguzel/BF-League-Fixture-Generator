import React from 'react'
import { CornerRightUp } from 'react-feather'
import { Card, CardBody, CardText } from 'reactstrap'

const ProductHunt = () => {
    return (
        <Card className='mt-2'>
            <CardBody>
                <CardText>
                    🎈 We are currently at the launch of Product Hunt. <a href='https://www.producthunt.com/' target='_blank'>Upvote 🔼</a>
                    
                </CardText>
            </CardBody>
        </Card>
    )
}

export default ProductHunt