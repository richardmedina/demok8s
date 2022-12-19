import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import UserCard from '../../components/user-card/user-card.component';

import Api from '../../Api';

const HomeContainer = () => {
  const [users, setUsers] = useState([]);

  const callApi = async () => {
    setUsers(null)
    // const response = await fetch("https://localhost:7114/api/user");
    // const json = await response.json();
    try {
      const response = await Api.user.get();
      setUsers(response.data);
    } catch(error) {
      alert('Error calling api');
      setUsers([]);
    }
  }

  const clearApiResponse = () => {
    setUsers([]);
  }

  return (<Container>
    <h2>Home Container</h2>
    <Button
      variant="success"
      onClick={callApi}
    >
        Call Api
    </Button>
    <Button
      variant="danger"
      onClick={clearApiResponse}
      style={{ marginLeft: '10px'}}
    >
      Clear Api Response
    </Button>
    <hr />
    {
      users === null && <>Loading...</>
    }
    {
      users !== null && users.map(user => 
        <UserCard key={user.id} user={user} />
      )
    }
    {/* <UserCard user={users[0]} /> */}
    
  </Container>
  );
}

export default HomeContainer;
