import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  imports: [ReactiveFormsModule, CommonModule],
  selector: 'app-progress-notes',
  styleUrl: './progress-notes.css',
  templateUrl: './progress-notes.html',
})
export class ProgressNotes {
  progressNotesForm = new FormGroup({
  projectCode: new FormControl(''),
  projectName: new FormControl(''),
  date: new FormControl(''),
  currentStatus: new FormControl(''),
  teamMember: new FormControl(''),
  progressNote: new FormControl('')
});
projectCodeError = '';
onProjectCodeChange() {
  const code = this.progressNotesForm.get('projectCode')?.value;

  const projectCodes: { [key: string]: string } = {
    PPT101: 'Project Progress Tracker',
    WEB202: 'Website Redesign',
    APP303: 'Mobile Application Development',
    DATA404: 'Data Analytics Dashboard'
  };

  const projectName = projectCodes[code || ''];

if (projectName) {
  this.progressNotesForm.get('projectName')?.setValue(projectName);
  this.projectCodeError = '';
} else {
  this.progressNotesForm.get('projectName')?.setValue('');
  this.projectCodeError = 'Project code not found.';
  }
  }
}