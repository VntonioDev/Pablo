import { Injectable, inject } from '@angular/core';
import { Firestore, collection, collectionData, query, where, getDocs, addDoc, doc, updateDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { UserI } from 'src/app/app.module';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {
  private firestore: Firestore = inject(Firestore);

  constructor() {}

  // Obtener usuario por email
  getUserByEmail(email: string): Observable<UserI[]> {
    const usersCollection = collection(this.firestore, 'Usuarios');
    const q = query(usersCollection, where('email', '==', email));
  
    return new Observable((observer) => {
      getDocs(q)
        .then((querySnapshot) => {
          const users: UserI[] = [];
          querySnapshot.forEach((doc) => {
            const userData = doc.data() as UserI;
            userData.user_id = doc.id; // Asignar el ID del documento al campo user_id
            users.push(userData);
          });
          observer.next(users);
          observer.complete();
        })
        .catch((error) => {
          observer.error(error);
        });
    });
  }

  async registerUser(user: UserI): Promise<void> {
    const usersCollection = collection(this.firestore, 'Usuarios'); // Asegúrate de que la colección se llame 'Usuarios'
    await addDoc(usersCollection, user);
  }

  async updateUserStatus(userId: string, status: string) {
    const userRef = doc(this.firestore, 'Usuarios', userId); // Obtener referencia al documento del usuario
    return updateDoc(userRef, { estado: status });
  }

    // Obtener usuario por número de teléfono
    getUserByPhoneNumber(phoneNumber: string): Observable<UserI[]> {
      const usersCollection = collection(this.firestore, 'Usuarios');
      const q = query(usersCollection, where('numeroTelefono', '==', phoneNumber));
    
      return new Observable((observer) => {
        getDocs(q)
          .then((querySnapshot) => {
            const users: UserI[] = [];
            querySnapshot.forEach((doc) => {
              const userData = doc.data() as UserI;
              users.push(userData);
            });
            observer.next(users);
            observer.complete();
          })
          .catch((error) => {
            observer.error(error);
          });
      });
    }
}
