// curl -X POST -u "apikey:lSTjYFJ1b0wQrRBsqdrYH2vx1onYqu13Q7vs7GUyWW7k" --header "Content-Type: application/json" --data "{\"text\":\"I love apples! I do not like oranges.\",\"features\":{\"sentiment\":{\"targets\":[\"apples\",\"oranges\",\"broccoli\"]},\"keywords\":{\"emotion\":true}}}" "https://api.eu-gb.natural-language-understanding.watson.cloud.ibm.com/instances/bd303318-416e-4c25-8a58-664d409b1cc9/v1/analyze?version=2019-07-12"
// {
//   "usage": {
//     "text_units": 1,
//     "text_characters": 37,
//     "features": 2
//   },
//   "sentiment": {
//     "targets": [
//       {
//         "text": "apples",
//         "score": 0.975705,
//         "label": "positive"
//       },
//       {
//         "text": "oranges",
//         "score": 0,
//         "label": "neutral"
//       }
//     ],
//     "document": {
//       "score": 0.759902,
//       "label": "positive"
//     }
//   },
//   "language": "en",
//   "keywords": [
//     {
//       "text": "apples",
//       "relevance": 0.74128,
//       "emotion": {
//         "sadness": 0.029345,
//         "joy": 0.966522,
//         "fear": 0.065772,
//         "disgust": 0.019284,
//         "anger": 0.026235
//       },
//       "count": 1
//     },
//     {
//       "text": "oranges",
//       "relevance": 0.74128,
//       "emotion": {
//         "sadness": 0.136183,
//         "joy": 0.324768,
//         "fear": 0.035066,
//         "disgust": 0.019166,
//         "anger": 0.02374
//       },
//       "count": 1
//     }
//   ]

import axios from 'axios';
import { BASE_URL, API_KEY } from './apiConfig';

async function postDailyEntry (params) {

  try {
    await axios.post(BASE_URL)
  } catch (error) {
    
  }

}