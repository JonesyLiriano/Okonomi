import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-registrer-user',
  templateUrl: './registrer-user.component.html',
  styleUrls: ['./registrer-user.component.css']
})
export class RegistrerUserComponent {
  addressForm = this.fb.group({
    company: null,
    rnc: [null, Validators.required],
    lastName: [null, Validators.required],
    address: [null, Validators.required],
    address2: null,
    city: [null, Validators.required],
    state: [null, Validators.required],
    postalCode: [null, Validators.compose([
      Validators.required, Validators.minLength(5), Validators.maxLength(5)])
    ],
    shipping: ['free', Validators.required]
  });

  hasUnitNumber = false;

  states = [
    { name: 'Azua', abbreviation: 'AZ' },
    { name: 'Bahoruco', abbreviation: 'BH' },
    { name: 'Barahona', abbreviation: 'BR' },
    { name: 'Dajabón', abbreviation: 'DJ' },
    { name: 'Duarte', abbreviation: ' DU' },
    { name: 'Elías Piña', abbreviation: 'EP' },
    { name: 'El Seibo', abbreviation: 'ES' },
    { name: 'Espaillat', abbreviation: 'ET' },
    { name: 'Hato Mayor', abbreviation: 'HM' },
    { name: 'Hermanas Mirabal', abbreviation: 'HMI' },
    { name: 'Independencia', abbreviation: 'IN' },
    { name: 'La Altagracia', abbreviation: 'LA' },
    { name: 'La Romana', abbreviation: 'LR' },
    { name: ' La Vega', abbreviation: 'LV' },
    { name: 'María Trinidad Sánchez', abbreviation: ' MT' },
    { name: 'Monseñor Nouel', abbreviation: 'MN' },
    { name: 'Monte Cristi', abbreviation: 'MC' },
    { name: 'Monte Plata', abbreviation: 'MP' },
    { name: 'Pedernales', abbreviation: 'PE' },
    { name: 'Peravia', abbreviation: 'PV' },
    { name: 'Puerto Plata', abbreviation: 'PP' },
    { name: 'Samaná', abbreviation: 'SA' },
    { name: 'San Cristóbal', abbreviation: 'SC' },
    { name: 'San José de Ocoa', abbreviation: 'SJO' },
    { name: 'San Juan', abbreviation: 'SJ' },
    { name: 'San Pedro de Macorís', abbreviation: 'SP' },
    { name: 'Sánchez Ramírez', abbreviation: 'SR' },
    { name: 'Santiago', abbreviation: 'SO' },
    { name: 'Santiago Rodríguez', abbreviation: 'SRO' },
    { name: 'Santo Domingo', abbreviation: 'SD' },
    { name: 'Valverde', abbreviation: 'VA' }
  ];

  constructor(private fb: FormBuilder) { }

  onSubmit() {
    alert('Thanks!');
  }
}
