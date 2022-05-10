import DiscoveryV1 from 'ibm-watson/discovery/v1';
import { IamAuthenticator } from 'ibm-watson/auth';

const discoveryClient = new DiscoveryV1({
  authenticator: new IamAuthenticator({ apikey: process.env.REACT_APP_IBM_API_KEY }),
  version: '2019-07-12',
  serviceUrl: 'https://api.eu-gb.natural-language-understanding.watson.cloud.ibm.com/instances/bd303318-416e-4c25-8a58-664d409b1cc9/v1/analyze',
  headers: {
    'X-Watson-Learning-Opt-Out': 'true'
  }
});
