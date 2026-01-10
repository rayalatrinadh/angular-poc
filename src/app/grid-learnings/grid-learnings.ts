import { Component } from '@angular/core';
import { AllCommunityModule, ModuleRegistry } from 'ag-grid-community'; 
import { AgGridAngular } from 'ag-grid-angular'; // Angular Data Grid Component
import type { ColDef } from 'ag-grid-community'; // Column Definition Type Interface



// Register all Community features
ModuleRegistry.registerModules([AllCommunityModule]);


@Component({
  selector: 'app-grid-learnings',
  imports: [AgGridAngular],
  templateUrl: './grid-learnings.html',
  styleUrl: './grid-learnings.css'
})
export class GridLearnings {

   // Row Data: The data to be displayed.
   rowData = [
        { make: "Tesla", model: "Model Y", price: 50000, electric: true },
        { make: "Ford", model: "F-Series", price: 33850, electric: false },
        { make: "Toyota", model: "Corolla", price: 29600, electric: false },
    ];


    // Column Definitions: Defines the columns to be displayed.
    colDefs: ColDef[] = [
        { field: "make" },
        { field: "model" },
        { field: "price" },
        { field: "electric" }
    ];


    

}
