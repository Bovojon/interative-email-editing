import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { Stack, Card, Layout, Button } from '@shopify/polaris';

const Heading = styled.h3`
  color: ${props => props.color};
`

const exampleCustomer = {
  firstName: "Arturo",
  lastName: "Wiegand"
}

const exampleBookings = [
  {
    title: 'Salad',
    quantity: 1,
    date: 'May 21, 2021',
    time: '4:49am +07'
  },
  {
    title: 'Chips',
    quantity: 1,
    date: 'Dec 17, 2021',
    time: '3:19am IST'
  }
]

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

  const name = "Evangeline Cole";

  const { register, handleSubmit, watch, errors } = useForm();

  // <TextField value={headingColor} onChange={handleHeadingColorChange} id="heading color" label="Heading Color" type="text" fullWidth margin="normal" />

  return (
    <div style={{ margin: "2rem" }}>
      <Layout>
        <Layout.Section>
          <Card sectioned>
            <Card.Section title={`Hello ${customer.firstName + ' ' + customer.lastName},`}>
              <Card.Subsection>You are confirmed for</Card.Subsection>
              <br></br>
              <p>Awesome Experience</p>
            </Card.Section>
            <Card.Section>
              {exampleBookings.map(booking => {
                return (
                  <>
                    <p>{booking.quantity} x {booking.title}</p>
                    <p>{booking.date} at {booking.time}</p>
                    <p>Add to Calendar</p>
                    <p>Google | Apple | Outlook | Yahoo</p>
                    <br></br>
                    <Button>Add product</Button>
                    <br></br>
                    <br></br>
                  </>
                )
                })
              }
              <br></br>
              <p>You will receive a reminder email one day prior to your experience</p>
            </Card.Section>
            <Card.Section>
              <p>If you believe you received this in error, please contact Company Name</p>
              <br></br>
              <p>company.name@experiencesapp.com</p>
            </Card.Section>
          </Card>
        </Layout.Section>
        <Layout.Section secondary>
          <Card sectioned>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Card.Section title="Logo">
                <input type="file" id="myfile" name="myfile" />
              </Card.Section>
              <Card.Section title="Color">
                <input type="color" id="favcolor" name="favcolor" value={headingColor} onChange={handleHeadingColorChange} />
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