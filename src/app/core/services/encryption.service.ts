import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';
@Injectable({
  providedIn: 'root'
})
export class EncryptionService {
private key="abc123";
encrypt(data:string){
  return CryptoJS.AES.encrypt(data,this.key).toString();

}
decrypt(data:string){
  const bytes=CryptoJS.AES.decrypt(data,this.key);
  return bytes.toString(CryptoJS.enc.Utf8);
}
}
