import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { CreateComponentComponent } from './components/create-component/create-component.component'
import { DetailedDataComponentComponent } from './components/detailed-data-component/detailed-data-component.component';
import { EditComponentComponent } from './components/edit-component/edit-component.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from "@angular/forms"
import { HttpClientModule }    from '@angular/common/http';
import { IconsComponent } from './components/icons/icons.component';
import { NgModule } from '@angular/core';
import { ToDoItemComponent } from "./components/todo-item/todo-item.component"
import { ToDoMainComponent } from "./components/todo-main/todo-main.component";

@NgModule({
  declarations: [
    AppComponent,
    ToDoMainComponent,
    ToDoItemComponent,
    IconsComponent,
    DetailedDataComponentComponent,
    EditComponentComponent,
    CreateComponentComponent,
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
