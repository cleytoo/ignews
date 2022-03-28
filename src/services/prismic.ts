import * as prismic from "@prismicio/client";

export function getPrismicClient() {
  const client = prismic.createClient("vini-ignews", {
    accessToken: process.env.PRISMIC_ACCESS_TOKEN,
  });

  return client;
}
