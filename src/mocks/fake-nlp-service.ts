import { mockGetResponse, mockInitResources, mockInitActions } from "./mock-request";

/**
 * Example of a third-party service
 *
 */
export class FakeNLPService {
  firstCredentials: string;
  secondCredentials: string;

  constructor(firstCredentials: string, secondCredentials: string) {
    this.firstCredentials = firstCredentials;
    this.secondCredentials = secondCredentials;
    this.authenticate();
  }

  /**
   * Example of using credentials to authenticate
   */ 
  private authenticate() {
    if (!this.firstCredentials || !this.secondCredentials) {
      throw Error('Incorrect credentials');
    }

    console.log('Authenticated!');
  }

  /**
   * Example of initializing Skill-specific actions on third party NLP call
   */
  initActions() {
    return mockInitActions();
  }

  /**
   * Example of initializing resources with third party NLP call 
   * @param {string} sessionId - ID of the current session
   */
  initSessionResources(sessionId: string) {
    return mockInitResources(sessionId);
  }

  /**
   * Example of persisting credentials during session endpoint with third party NLP call 
   * @param {string} sessionId - ID of the current session
   */
  persistCredentials(sessionId: string) {
    return [
      {
        sessionId,
        name: "credentials",
        value: { firstCredentials: this.firstCredentials, secondCredentials: this.secondCredentials},
        scope: "PRIVATE",
      },
    ] as any[];
  }

  /**
   * Example of sending input to the third party NLP call 
   * @param {string} userInput - incoming user input
   */
  send(userInput: string) {
    return mockGetResponse(userInput);
  }
}