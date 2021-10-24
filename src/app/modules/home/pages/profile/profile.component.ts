import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/core/services/user.service';
import { Equipment } from 'src/app/shared/types';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.sass']
})
export class ProfileComponent implements OnInit {

  equipments: Array<Equipment>

  constructor(private userService: UserService) { }

  ngOnInit(): void {

    let id = localStorage.getItem('id')

    this.userService.getById(id).subscribe(data => {

      let user = data.data['queryUserById']

      this.equipments = user['equipments']
    })

  }

  showEmptyPage() {

     return this.equipments.length == 0
  }

}
