import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class TenantService {

  constructor(private fireStore: AngularFirestore) { }

  addTenant(tenantData:any){
    return this.fireStore.collection('tenants').add(tenantData);
  }
}
