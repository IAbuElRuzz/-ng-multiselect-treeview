import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MultiSelectTreeViewComponent } from './multiselect-treeview.component';
import { ClickOutsideDirective } from './click-outside.directive';
import { ListFilterPipe } from './list-filter.pipe';

@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [MultiSelectTreeViewComponent, ClickOutsideDirective, ListFilterPipe],
  providers: [ListFilterPipe],
  exports: [MultiSelectTreeViewComponent]
})

export class NgMultiSelectTreeViewModule {
    static forRoot(): ModuleWithProviders<NgMultiSelectTreeViewModule> {
      return {
        ngModule: NgMultiSelectTreeViewModule
      };
    }
}