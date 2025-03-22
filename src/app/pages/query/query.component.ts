import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CodeEditor, Setup } from '@acrodata/code-editor';
import { languages } from '@codemirror/language-data';

@Component({
  selector: 'app-query',
  templateUrl: './query.component.html',
  standalone: true,
  imports: [FormsModule, CodeEditor],
})
export class QueryComponent {
  value = 'SELECT * FROM table';
  language = "SQL";
  setup: Setup = "basic"
  languages = languages;
}