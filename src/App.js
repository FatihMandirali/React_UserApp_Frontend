import React from 'react';
import './App.css';
import UserPage from './components/pages/UserPage'
import NewUserPage from './components/pages/NewUserPage'
import {Route} from 'react-router-dom'
import 'semantic-ui-css/semantic.min.css'
import {
  Container,
} from 'semantic-ui-react';

import TopMenu from './components/TopMenu'
import Footer from './components/Footer'
function App() {
  return (
    <div className="App">
     {/* <Link to="userlist">UserList</Link>
     <Route path='/userlist' component={UserPage}></Route> */}
    <TopMenu></TopMenu>
    <Container text style={{ marginTop: '7em' }}>
     <Route exact path='/' component={UserPage} ></Route>
     <Route exact path='/yeni' component={NewUserPage} ></Route>
     <Route exact path='/detay/:id' component={NewUserPage} ></Route>
     
    </Container>
    <Footer></Footer>
   
    </div>
  );
}

export default App;
