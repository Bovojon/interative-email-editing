import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { Stack, Card, Layout, Button } from '@shopify/polaris';

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
  const [otherDetails, setOtherDetails] = useState('')

  const [customColor, setHeadingColor] = useState('black')
  const handleHeadingColorChange = (event) => {
    setHeadingColor(event.target.value);
  }
  const handleDetailsChange = (event) => {
    setOtherDetails(event.target.value);
  }

  const name = "Evangeline Cole";

  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = data => console.log(data);

  return (
    <div style={{ margin: "2rem" }}>
      <Layout>
        <Layout.Section>
          <Card sectioned>
            <img 
              src="https://apps.shopifycdn.com/listing_images/63aff7910c14e25babf55efa88f4882e/icon/75b4eb456412fe639c45389bdba2bcb6.png" 
              style={{ width: '20%', height: '20%', display: 'block', marginLeft: 'auto', marginRight: 'auto' }} 
            />
            <Card.Section title={`Hello ${customer.firstName + ' ' + customer.lastName},`}>
              <Card.Subsection>You are confirmed for</Card.Subsection>
              <br></br>
              <p style={{ color: customColor }}>Awesome Experience</p>
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
                    <Button>Join Via Zoom</Button>
                    <br></br>
                    <br></br>
                  </>
                )
                })
              }
              <br></br>
              <p>You will receive a reminder email one day prior to your experience</p>
            </Card.Section>
            {otherDetails === '' ?
              null
              :
              <Card.Section>
                <p style={{ whiteSpace: "pre-line" }}>{otherDetails}</p>
              </Card.Section>
            }
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
                <input type="file" id="photo" name="photo" ref={register} />
              </Card.Section>
              <Card.Section title="Color">
                <input type="color" id="color" name="color" value={customColor} onChange={handleHeadingColorChange} ref={register} />
              </Card.Section>
              <Card.Section title="Other details">
                <textarea id="desc" name="desc" rows="4" cols="40" value={otherDetails} onChange={handleDetailsChange} ref={register}></textarea>
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