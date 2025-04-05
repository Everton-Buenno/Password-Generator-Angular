import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Toolbar } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { SplitButton } from 'primeng/splitbutton';
import { InputTextModule } from 'primeng/inputtext';
import { IconField } from 'primeng/iconfield';
import { InputIcon } from 'primeng/inputicon';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-header',
  imports: [
    Toolbar,
    ButtonModule,
    SplitButton,
    InputTextModule,
    IconField,
    InputIcon,
    FormsModule,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  items: MenuItem[] | undefined;
  constructor() {}
  date: Date | undefined;
  ngOnInit() {
    this.items = [
      {
        label: 'Update',
        icon: 'pi pi-refresh',
      },
      {
        label: 'Delete',
        icon: 'pi pi-times',
      },
    ];
  }
}
