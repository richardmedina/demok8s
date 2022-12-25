import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';

import Api from '../../services/Api';

const ServerContainer = () => {
  const [addresses, setAddresses] = useState([]);
  const apiCall = async () => {
    try {
      setAddresses([]);
      const { data } = await Api.server.getInfo();
      setAddresses(data.serverAddress)
    } catch(error) {
      console.log('Error calling api: ', error);
      setAddresses([]);
    }
  }

  useEffect(() => {
    apiCall();
  }, []);

  return (
    <Container>
      <h2>Server</h2>
      <p>Server information</p>
      
      <Table striped bordered hover>
        <thead>
          <tr>
            <th colSpan="2">
              Server addresses &nbsp;
              <Button
                variant="success"
                onClick={apiCall}
              >
                Refresh
              </Button>
            </th>
          </tr>
          <tr>
            <th>#</th>
            <th>Endpoint</th>
          </tr>
        </thead>
        <tbody>
          {
            addresses.map((addr, id) => 
              <tr key="addr">
                <td>{id + 1}</td>
                <td>{addr}</td>
              </tr>
            )
          }
        </tbody>
      </Table>
    </Container>
  );
}

export default ServerContainer;
