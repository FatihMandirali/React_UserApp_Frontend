import React, { Component } from 'react'
import {
    Container,
    Image,
    Menu,
} from 'semantic-ui-react'
import {NavLink} from 'react-router-dom'

class TopMenu extends Component {
    render() {
        return (
            <div>
                <Menu fixed='top' inverted>
                    <Container>
                        <Menu.Item as={NavLink} to="/" exact>
                            <Image size='mini' src='http://fatihsanatmerkezi.com/wp-content/uploads/bfi_thumb/resim-yagli-boya-hocasi-kursu-egitmeni-ozel-ders-fatih-istanbul-39cudmqxmndvijs799cb28.jpg' style={{ marginRight: '1.5em' }} />
                            Kullanıcılar
                        </Menu.Item>
                        <Menu.Item as={NavLink} to="/yeni" excat>Yeni Kullanıcı</Menu.Item>

                    </Container>
                </Menu>
            </div>
        )
    }

}

export default TopMenu