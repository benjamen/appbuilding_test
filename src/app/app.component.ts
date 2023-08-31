import { Component, OnInit } from '@angular/core';
import { SalesType } from './models/financial/sales';
import { FinancialService } from './services/financial.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public financialSales!: SalesType[];

  constructor(
    private financialService: FinancialService,
  ) {}

  ngOnInit() {
    // depending on implementation, data subscriptions might need to be unsubbed later
    this.financialService.getData('SalesType').subscribe(data => this.financialSales = data);
  }
}
