interface MockGetResponse {
  spokenResponse: string;
  cardsResponse: object;
}

/**
 * This uses Promises and setTimeouts to mock a HTTP request to a third part API
 * and should be replaced with the actual HTTP call when implementing.
 */ 
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
