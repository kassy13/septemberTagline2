import { Account, Client } from "appwrite";

const client = new Client();

client.setEndpoint("https://cloud.appwrite.io/v1").setProject("6735b561003d77be2176");
export const account = new Account(client)
export default client;