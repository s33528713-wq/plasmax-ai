export default {
  async fetch(request, env) {
    if (request.method !== "POST") {
      return new Response("Plasmax AI Server OK");
    }

    try {
      const body = await request.json();

      const response = await fetch(
        "https://api.openai.com/v1/responses",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${env.OPENAI_API_KEY}`
          },
          body: JSON.stringify({
            model: "gpt-5.6-luna",
            input: body.problem || "Analyze this Plasmax machine problem."
          })
        }
      );

      const data = await response.json();

      return new Response(
        JSON.stringify(data),
        {
          headers: {
            "Content-Type": "application/json"
          }
        }
      );

    } catch (error) {
      return new Response(
        JSON.stringify({
          error: error.message
        }),
        {
          status: 500,
          headers: {
            "Content-Type": "application/json"
          }
        }
      );
    }
  }
};
