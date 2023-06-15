import { Component, Inject, ViewEncapsulation } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { ITask } from 'src/app/models/task';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class HomeComponent {
  showFiller = false;

  todo:ITask[] = []
  inprogress:ITask[] = []
  done:ITask[] = []

  constructor(private fb:FormBuilder){}
  // , public dialogRef: MatDialogRef<NewtaskPopUpComponent>, @Inject(MAT_DIALOG_DATA) public data: any,

  todoForm!:FormGroup

  ngOnInit() {
    this.todoForm = this.fb.group({
      heading: ['', Validators.required],
      description: ['', Validators.required],

    })
  }

  // addTodo(){
  //   this.todo.push({
  //     hea
  //   })
  // }

  drop(event: CdkDragDrop<ITask[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }





  // openDialog(){
  //   this.dialog.open(NewtaskPopUpComponent,{
  //     data: "right click"
  //   })
  // }

  // onNoClick(): void {
  //   this.dialogRef.close();
  // }
}
