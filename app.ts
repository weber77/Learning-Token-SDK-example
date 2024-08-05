import express from 'express';
import {
  Client,
  RegisterInstitutionBody,
  LoginInstitutionBody,
} from "learning-tokens-sdkxx";

const client = new Client('http://localhost:3000/api');

const app = express();
const port = 3001;

app.get('/', async (req, res) => {
  const registerBody: RegisterInstitutionBody = {
    id: 1,
    name: "Institution Name1",
    email: "email@example1.com",
    publicAddress: "0x123456789abcdefs",
    password: "passwords",
    latitude: "0.0s",
    longitude: "0.0s",
  };

  const registerResponse = await client.registerInstitution(registerBody);
  console.log("Register Response:", registerResponse);

  const loginBody: LoginInstitutionBody = {
    email: "email@example.com",
    password: "password",
    type: "institution",
  };

  const loginResponse = await client.loginInstitution(loginBody);
  console.log("Login Response:", loginResponse);

  res.send('Check the console for responses');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});