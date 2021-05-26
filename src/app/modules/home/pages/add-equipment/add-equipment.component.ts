import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { CreateEquipmentDto, Extras } from 'src/app/shared/dtos/create-equipment.dto';

import { EquipmentService } from '../../../../core/services/equipment.service';

@Component({
  selector: 'app-add-equipment',
  templateUrl: './add-equipment.component.html',
  styleUrls: ['./add-equipment.component.sass']
})
export class AddEquipmentComponent implements OnInit {


  equipmentFormGroup = new FormGroup({

    area: new FormControl(''),
    type: new FormControl('')
  })

  constructor(private equipmentService: EquipmentService) { }

  ngOnInit(): void {
  }

  formSubmit() {

    let equipment: CreateEquipmentDto = this.equipmentFormGroup.value;

    equipment.extras = {name: ''}

    this.equipmentService.createEquipment(equipment).subscribe(({ data }) => {

      this.equipmentFormGroup.reset();

    }, (error) => {
      console.log('there was an error sending the query', error);
    });
  }

}
