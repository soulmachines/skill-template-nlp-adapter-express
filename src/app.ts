import {
  ExecuteRequest,
  ExecuteResponse,
  InitRequest,
  SessionRequest,
} from '@soulmachines/smskillsdk';
import { Request, Response } from 'express';

const express = require('express');
const app = express();
const port = process.env.PORT ?? 3000;

app.use(express.json());

/**
 * Init Endpoint
 * https://docs.soulmachines.com/skills/api#tag/Init
 *
 * Runs when a DDNA Studio project is deployed with this Skill configured
 */
app.post('/init', (req: Request, res: Response) => {
  const smRequest = req.body as InitRequest;
});

/**
 * Session Endpoint
 * https://docs.soulmachines.com/skills/api#tag/Session
 *
 * Runs when a person begins a conversation with a DP using this Skill
 */
app.post('/session', (req: Request, res: Response) => {
  const smRequest = req.body as SessionRequest;
});

/**
 * Execute Endpoint
 * https://docs.soulmachines.com/skills/api#tag/Execute
 *
 * Runs when user input is forwarded to this Skill
 */
app.post('/execute', (req: Request, res: Response) => {
  // 1. Get the Soul Machines request object
  const smRequest = req.body as ExecuteRequest;

  // 2. Extract relevant data
  const skillConfiguration = smRequest.config;
  const userInput = smRequest.text;

  // 3. Make request to third party service
  // TODO
  // eg:
  // const botService = new BotService(skillConfiguration.apiKey)
  // const spokenResponse = botService.send(userInput);

  // 4. Extract relevant response data from the third party service
  const spokenResponse = 'Hello! @showcards(myImageCard) Here is a kitten.';
  const cards = {
    myImageCard: {
      type: 'image',
      data: {
        src: 'https://placekitten.com/200/200',
        alt: 'An adorable kitten',
      },
    },
  };

  // 5. Construct SM-formatted response body
  const smResponse: ExecuteResponse = {
    output: {
      text: 'spokenResponse',
      // variables: {
      //   _public: {
      //     ...cards,
      //   },
      // },
    },
    endConversation: true,
  };

  res.setHeader('content-type', 'application/json');
  res.send(smResponse);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
