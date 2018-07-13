import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { map } from 'rxjs/operators';


interface Device {
  id: string;
  firstName: string;
  lastName: string;
}

@Component({
  selector: 'app-device-list',
  templateUrl: './device-list.component.html',
  styleUrls: ['./device-list.component.css']
})
export class DeviceListComponent implements OnInit {

  constructor(private af: AngularFirestore) {}

  deviceCollection = this.af.collection<Device>('devices');

  devices$ = this.deviceCollection.valueChanges();

  ngOnInit() {
  }

}
