import React from 'react'
import { Button, Card, Image, GridColumn } from 'semantic-ui-react'
import {Link} from 'react-router-dom'
const UserCard = ({user}) => (
    <GridColumn>
  <Card.Group>
    <Card>
      <Card.Content>
        <Image
          floated='right'
          size='mini'
          src='https://react.semantic-ui.com/images/avatar/large/steve.jpg'
        />
        <Card.Header>{user.userName} {user.lastName}</Card.Header>
        <Card.Meta></Card.Meta>
        <Card.Description>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className='ui two buttons'>
          <Button basic color='green' animated as={Link} to={`/detay/${user.id}`}>
            Güncelle
          </Button>
          <Button basic color='red'>
            Sil
          </Button>
        </div>
      </Card.Content>
    </Card> 
  </Card.Group>
  </GridColumn>
)

export default UserCard
