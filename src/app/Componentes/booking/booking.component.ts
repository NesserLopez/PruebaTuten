import { Component, OnInit } from '@angular/core';
import { TutenService } from './../../Servicios/tuten.service';

import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.sass']
})




export class BookingComponent implements OnInit {

  constructor(private service: TutenService) { }
  bookings: any;
  ngOnInit() {

    this.service.consultarBookings().subscribe(
      result => {
        this.bookings = result
      },
      error => {
        console.log(<any>error);
      }
    );

  }
 

}
