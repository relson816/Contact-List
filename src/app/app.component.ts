import { Component } from '@angular/core';

import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';


interface Detail {
  firstname:string;
  lastname:string;
  phone:number;
  mobile:number;
  email:string;
  address:string; 
}

interface DetailId extends Detail { 
  id:string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  detailsCol: AngularFirestoreCollection<Detail>;
  details: any;

  detailDoc: AngularFirestoreDocument<Detail>;
  detail: Observable<Detail>;

  firstname:string;
  lastname:string;
  phone:number;
  mobile:number;
  email:string;
  address:string; 

  constructor(private afs: AngularFirestore) {}

  ngOnInit() {
    this.detailsCol = this.afs.collection('details');
   // this.posts = this.postsCol.valueChanges();
    this.details = this.detailsCol.snapshotChanges()
      .map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data() as Detail;
          const id = a.payload.doc.id;
          return { id, data };
        });
      });
  }

  addDetail() {
     //     this.afs.collection('posts').add({'title': this.title, 'content': this.content});
    this.afs.collection('details').doc('my-custom-id').set({'firstname': this.firstname, 'lastname': this.lastname, 'phone': this.phone, 'mobile': this.mobile, 'email': this.email, 'address': this.address});
  }

    getDetail(detailId) {
    this.detailDoc = this.afs.doc('details/'+detailId);
    this.detail = this.detailDoc.valueChanges();
  }

    deleteDetail(detailId) {
    this.afs.doc('details/'+detailId).delete();
  }
}
