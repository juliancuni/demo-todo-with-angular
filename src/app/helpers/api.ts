import { Appwrite } from 'appwrite';
import { Server } from '../utils/config';

export class Api {
  private static sdk: Appwrite | null;

  static provider() {
    if (!this.sdk) {
      let client = new Appwrite();
      client
        .setEndpoint(environment.APPWRITE_ENDPOINT)
        .setProject(environment.APPWRITE_PROJECTID);
      this.sdk = client;
    }
    return this.sdk
  }
}
