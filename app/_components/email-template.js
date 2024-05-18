import * as React from "react";
// import Image from "next/image";


import {
  Body,
  Button,
  Container,
  Column,
  Head,
  Heading,
  Html,
  Img,
  Preview,
  Row,
  Section,
  Text,
} from "@react-email/components";

export const EmailTemplate = ({ responce, }) => (
  <div>
    <Html>
      <Head />
      <Preview>File Shared With You</Preview>
      <Body style={main}>
        <Container>
          <Section style={content}>
          {/* <Image src={fileType=='image'?file?.fileUrl:'/banner.png'}
        width={620}
        height={200}
        alt='logo'
        className='h-[200px] rounded-md object-contain '/> */}

             <Img
              width={620}
              height={300}
              src={`https://plus.unsplash.com/premium_photo-1682310468892-5d8ade38f606?q=80&w=1824&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`}
            /> 

            <Row style={{ paddingBottom: "0" }}>
              <Column>
                <Heading
                  style={{
                    fontSize: 32,
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  Hi {responce?.emailToSend?.split("@")[0]},
                </Heading>
                <Heading
                  as="h2"
                  style={{
                    fontSize: 26,
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  {responce?.userName} Share file with you
                </Heading>

                <Text style={paragraph}>
                  <b>File Name: {responce.fileName}</b>
                </Text>
                <Text style={{ marginTop: -5 }}>
                  <b>
                    File Size: {(responce.fileSize / 1024 / 1024).toFixed(2)}
                  </b>
                </Text>
                <Text style={{ marginTop: -5 }}>
                  <b>File Type: {responce.fileType}</b>
                </Text>
                <Text
                  style={{
                    color: "rgb(0,0,0, 0.5)",
                    fontSize: 14,
                    marginTop: -5,
                  }}
                >
                  *Access and Download file on your own risk
                </Text>

                <Text style={paragraph}>
                  Now You can also share file with Tubegurji FileSharo App
                </Text>
                <Text style={{ marginTop: -5 }}>
                  Click Below Button to Access your file
                </Text>
              </Column>
            </Row>

            <a href={responce?.shortUrl}>Click To Download</a>
            <br />
            <Row style={{ paddingTop: "0" }}>
            
              <Column style={containerButton} colSpan={2}>
                <Button style={button} href={responce?.shortUrl}>
                  Click here to Download
                </Button>
              </Column>
            </Row>
          </Section>

          <Section style={containerImageFooter}>
            <Img
              width={620}
              height={220}
              src={`https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`}
            />
          </Section>

          <Text
            style={{
              textAlign: "center",
              fontSize: 12,
              color: "rgb(0,0,0, 0.7)",
            }}
          >
            © 2024 | Abhijit @2024 Copyrights India |
          </Text>
        </Container>
      </Body>
    </Html>
  </div>
);

const main = {
  backgroundColor: "#fff",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const paragraph = {
  fontSize: 16,
};

const logo = {
  padding: "30px 20px",
};

const containerButton = {
  display: "flex",
  justifyContent: "center",
  width: "100%",
};

const button = {
  backgroundColor: "#e00707",
  padding: "12px 30px",
  borderRadius: 3,
  color: "#FFF",
  fontWeight: "bold",
  border: "1px solid rgb(0,0,0, 0.1)",
  cursor: "pointer",
};

const content = {
  border: "1px solid rgb(0,0,0, 0.1)",
  borderRadius: "3px",
  overflow: "hidden",
};

const boxInfos = {
  padding: "20px 40px",
};

const containerImageFooter = {
  padding: "45px 0 0 0",
};

// import * as React from 'react';

// export const EmailTemplate=({
//   firstName,
// }) =>(
//   <div>
//     <h1>Welcome, {firstName}!</h1>
//   </div>
// );