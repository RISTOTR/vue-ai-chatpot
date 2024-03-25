# AI Chat Bot with Vue.js and GPT-4

Welcome to the AI Chat Bot app! This application leverages the power of AI, specifically OpenAI's Chat Completions API (including GPT-3.5 Turbo and GPT-4), to create a versatile and interactive chatting experience within a Vue.js environment. Whether you want to integrate a chat bot into your website for customer support, automate social media post generation, or explore the capabilities of advanced AI models, this app has got you covered.

## Features

1. **Vue.js Powered Chat Interface**: The app utilizes Vue.js to create a dynamic and responsive chat interface, providing a seamless user experience.

2. **Custom Support Chat Bot**: Trainable and adaptable, the included chat bot is designed to handle customer support inquiries effectively. It's capable of learning from system, user, and assistant messages, making it a valuable asset for any business.

3. **Social Media Post Generation**: By simply providing an article URL, the app automatically generates social media posts, showcasing the potential of AI in content creation and marketing.

4. **OpenAI Chat JavaScript SDK Integration**: Built using OpenAI's Chat JavaScript SDK, this app demonstrates how easy it is to integrate advanced AI capabilities into your projects through simple REST requests.

## Usage

### Providing Message Context

The app supports providing context for messages to improve the quality and relevance of responses. This can be particularly useful in scenarios like customer support where context plays a crucial role in understanding user queries.

### Understanding Temperature

In the context of AI language models like GPT-4, "temperature" refers to the randomness of the generated text. Lower temperatures result in more deterministic outputs, while higher temperatures lead to more diverse and creative responses. The app allows you to adjust temperature settings according to your preferences.

### Making Requests to the ChatGPT API from a Vue.js App

Integrating the ChatGPT API into a Vue.js app is straightforward. Simply make REST requests to the API endpoints provided by OpenAI, passing relevant parameters such as the prompt and temperature.

### Training the AI

The app supports training the AI with various types of messages, including system messages, user messages, and assistant messages. This training process helps the AI improve its understanding and response accuracy over time.

## Getting Started

To get started with the AI Chat Bot app, follow these steps:

1. Clone this repository to your local machine.
2. Install dependencies using `npm install`.
3. Obtain API keys for OpenAI's Chat Completions API.
4. Configure the app to use your API keys.
5. Run the application using `npm run serve`.

