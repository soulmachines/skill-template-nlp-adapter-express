import { mockGetResponse, mockInitResources } from "./mock-request";

// Example third party service
export class FakeNLPService {
  firstCredentials: string;
  secondCredentials: string;

  constructor(firstCredentials: string, secondCredentials: string) {
    this.firstCredentials = firstCredentials;
    this.secondCredentials = secondCredentials;
    this.authenticate();
  }

  // Example of using credentials to authenticate
  private authenticate() {
    if (!this.firstCredentials || !this.secondCredentials) {
      throw Error('Incorrect credentials');
    }

    console.log('Authenticated!');
  }

  // Example of initializing resources with third party NLP call 
  initSessionResources(sessionId: string) {
    return mockInitResources(sessionId);
  }

  // Example of sending input to the third party NLP call 
  send(userInput: string) {
    return mockGetResponse(userInput);
  }
}