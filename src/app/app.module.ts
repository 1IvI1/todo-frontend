import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { CreateComponentComponent } from './components/create-component/create-component.component'
import { DetailedDataComponentComponent } from './components/detailed-data-component/detailed-data-component.component';
import { EditComponentComponent } from './components/edit-component/edit-component.component';
import { FilterTodos } from "src/app/pipes/filter-todos.pipe";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from "@angular/forms"
import { HttpClientModule }    from '@angular/common/http';
import { IconsComponent } from './components/icons/icons.component';
import { NgModule } from '@angular/core';
import { ToDoItemComponent } from "./components/todo-item/todo-item.component"
import { ToDoMainComponent } from "./components/todo-main/todo-main.component";
import { InputFilterValueTypeSelectorComponent } from './components/input-filter-value-type-selector/input-filter-value-type-selector.component';
@NgModule({
  declarations: [
    AppComponent,
    ToDoMainComponent,
    ToDoItemComponent,
    IconsComponent,
    DetailedDataComponentComponent,
    EditComponentComponent,
    CreateComponentComponent,
    FilterTodos,
    InputFilterValueTypeSelectorComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FontAwesomeModule,
    FormsModule,
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
