import React, { useState } from 'react';
import {
	Grid,
	Paper,
  Box,
  TextField
} from '@material-ui/core';
import styled from "styled-components";

const Preview = styled(Paper)`
  text-align: center;
  padding: 20px;
  margin-right: 15px;
`

const Form = styled(Paper)`
  padding: 10px;
`

const Heading = styled.h3`
  color: ${props => props.color};
`

const exampleCustomer = {
  firstName: "Arturo",
  lastName: "Wiegand"
}

const Home = () => {
  const [customer, setCustomer] = useState(exampleCustomer)
  const [email, setEmail] = useState({})
  const [bookings, setBookings] = useState({})
  const [shot, setShop] = useState({})
  const [order, setOrder] = useState({})

  const [headingColor, setHeadingColor] = useState('black')
  const handleHeadingColorChange = (event) => {
    setHeadingColor(event.target.value);
  }

  return (
    <Box m={2}>
      <Grid container direction="row" justify="center" alignItems="flex-start">
        <Grid item xs={12} sm={7}>
          <Preview variant="outlined" square>
            <Heading color={headingColor}>Hello {customer.firstName + ' ' + customer.lastName}</Heading>
            <h4>You are confirmed for</h4>
          </Preview>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Form variant="outlined" square>
            <h3>Customize Email</h3>
            <TextField value={headingColor} onChange={handleHeadingColorChange} id="heading color" label="Heading Color" type="text" fullWidth margin="normal" />
          </Form>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Home;