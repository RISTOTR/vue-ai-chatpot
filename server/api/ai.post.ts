import * as trainings from "@/training";
import { Configuration, OpenAIApi } from "openai";
export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  // Setup open AI
  const { OPENAI_API_KEY } = useRuntimeConfig();
  const configuration = new Configuration({
    apiKey: OPENAI_API_KEY,
  });
  const openai = new OpenAIApi(configuration);

  // send request to Chat Model
  try {
    if (!Object.keys(trainings).includes(`${body.training}Training`)) {
      throw new Error(`Training ${body.training} does not exist`);
    }

    const { data } = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      temperature: body.temperature || 1,
      messages: body.messages || [],
      // @ts-expect-error checking above if training exists
      ...trainings[`${body.training}Training`](body),
    });
    return data;
  } catch (error) {
    setResponseStatus(500);
    return {
      errors: [(error as Error).message],
    };
  }
});