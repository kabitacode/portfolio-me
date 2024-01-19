import React from 'react';
import {Html, Head, Heading, Text, Hr, Preview, Body, Container, Section} from '@react-email/components';
import {Tailwind} from '@react-email/tailwind';

type Props = {
    message: string,
    senderEmail: string,
    name: string
}

export default function ContactFormEmail({message, senderEmail, name}: Props) {
  return (
    <Html>
        <Head/>
        <Preview>New message from portfolio site</Preview>
        <Tailwind>
            <Body className='bg-gray-100'>
                <Container>
                    <Section className='bg-white borderBlack my-10 px-10 py-4 rounded-md'>
                        <Heading>You received the following message from the contact form</Heading>
                        <Text>{message}</Text>
                        <Hr/>
                        <Text className='mb-1'>The sender's email is: {senderEmail}</Text>
                        <Text>The Name is: {name}</Text>
                    </Section>
                </Container>
            </Body>
        </Tailwind>
    </Html>
  )
}
