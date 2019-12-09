import {Injectable} from '@angular/core';
import {Storage} from '@ionic/storage';

/*
  Generated class for the StorageProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class StorageProvider {

  constructor(public storage: Storage) {
  }

  get(key: any) {
    return this.storage.get(key);
  }

  set(key: any, value: any) {
    return this.storage.set(key, value);
  }

  remove(key: any) {
    return this.storage.remove(key);
  }

  clear() {
    return this.storage.clear();
  }

  lenght() {
    return this.storage.length();
  }

  keys() {
    return this.storage.keys();
  }
}
