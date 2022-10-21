/**
 * These functions use Promises and setTimeouts to mock HTTP requests to a third part NLP service
 * and should be replaced with the actual HTTP calls when implementing.
 */

interface MockGetResponse {
  spokenResponse: string;
  cardsResponse: object;
}

export const mockInitActions = (): Promise<void> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Pre-training initialized. . .");
      console.log("Pre-training completed");
      resolve();
    }, 0);
  });
};

export const mockInitResources = (sessionId: string): Promise<any[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const memory = [
        {
          sessionId,
          name: "public string memory",
          value: "This is to be persisted",
          scope: "PUBLIC",
        },
        {
          sessionId,
          name: "private json memory",
          value: { example: "object" },
          scope: "PRIVATE",
        },
      ]; 
      resolve(memory);
    }, 0);
  });
};

export const mockGetResponse = (userInput: string): Promise<MockGetResponse> => {
  return new Promise((resolve) => {
    const spokenResponse = `Hello! @showcards(myImageCard) Here is a kitten.`;
    const cardsResponse = {
      myImageCard: {
        type: 'image',
        data: {
          src: 'https://placekitten.com/200/200',
          alt: 'An adorable kitten',
        },
      },
    };

    setTimeout(() => {
      console.log(userInput);
      resolve({ spokenResponse, cardsResponse });
    }, 0);
  });
};
