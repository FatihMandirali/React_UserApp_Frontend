import React, { Component } from 'react'
import {
    Container,
    Image,
    List,
    Segment,
} from 'semantic-ui-react'

class Footer extends Component {
    render() {
        return (
            <div>
                <Segment inverted vertical style={{ margin: '5em 0em 0em', padding: '5em 0em' }}>
                    <Container textAlign='center'>
                        <Image centered size='mini' src='http://fatihsanatmerkezi.com/wp-content/uploads/bfi_thumb/resim-yagli-boya-hocasi-kursu-egitmeni-ozel-ders-fatih-istanbul-39cudmqxmndvijs799cb28.jpg' />
                        <List horizontal inverted divided link size='small'>
                            <List.Item as='a' href='#'>
                                Site Map
                             </List.Item>
                            <List.Item as='a' href='#'>
                                Contact Us
                            </List.Item>
                            <List.Item as='a' href='#'>
                                Terms and Conditions
                             </List.Item>
                            <List.Item as='a' href='#'>
                                Privacy Policy
                          </List.Item>
                        </List>
                    </Container>
                </Segment>
            </div>
        )
    }

}

export default Footer