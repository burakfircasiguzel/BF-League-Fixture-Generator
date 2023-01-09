import React from 'react'
import { Card, CardBody, CardText } from 'reactstrap'

const ProductHunt = () => {
    return (
        <Card className='mt-2'>
            <CardBody>
                <CardText>
                    🎈 We are currently at the launch on Product Hunt. <a href='https://www.producthunt.com/posts/fixture-website' rel="noreferrer" target='_blank'>Upvote 🔼</a>
                </CardText>
            </CardBody>
        </Card>
    )
}

export default ProductHunt