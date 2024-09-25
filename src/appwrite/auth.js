import { Account, Client, ID } from "appwrite";

class Auth_Appwrite {
  client = new Client();
  account;

  constructor() {
    this.client
      .setEndpoint(envConfig.appwriteEndpoint)
      .setProject(envConfig.appwriteProjectId);

    this.account = new Account(this.client);
  };

  createUser = async ({ email, password, name }) => {
    try {
      const res = await this.account.create(ID.unique(), email, password, name);
      return res;
    } catch (error) {
      throw new Error(error);
    }
  };

  loginUser = async ({ email, password }) => {
    try {
      const res = await this.account.createEmailPasswordSession(email, password);
      return res;
    } catch (error) {
      throw new Error(error);
    }
  };

  logoutUser = async () => {
    try {
      const res = await this.account.deleteSession("current");
      return res;
    } catch (error) {
      throw new Error(error);
    }
  };

  getCurrentUser = async () => {
    try {
      const res = await this.account.get();
      return res;
    } catch (error) {
      throw new Error(error);
    }
  };
};

const appwriteAuth = new Auth_Appwrite();

export default appwriteAuth;