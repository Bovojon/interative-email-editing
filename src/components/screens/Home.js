import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { Stack, Card, Layout } from '@shopify/polaris';

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
  const onSubmit = () => {
    console.log("Success")
  }

  const { register, handleSubmit, watch, errors } = useForm();

  // <TextField value={headingColor} onChange={handleHeadingColorChange} id="heading color" label="Heading Color" type="text" fullWidth margin="normal" />

  return (
    <div style={{ margin: "2rem" }}>
      <Layout>
        <Layout.Section>
          <Card sectioned>
            <Heading color={headingColor}>Hello {customer.firstName + ' ' + customer.lastName}</Heading>
            <h4>You are confirmed for</h4>
          </Card>
        </Layout.Section>
        <Layout.Section secondary>
          <Card sectioned>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Card.Section title="Logo">
                <input type="file" id="myfile" name="myfile" />
              </Card.Section>
              <Card.Section title="Color">
                <input type="color" id="favcolor" name="favcolor" value="#ff0000" />
              </Card.Section>
              <Card.Section title="Other details">
                <textarea id="w3review" name="w3review" rows="4" cols="40"></textarea>
              </Card.Section>
              <input type="submit" />
            </form>
          </Card>
        </Layout.Section>
      </Layout>
    </div>
  );
}

export default Home;