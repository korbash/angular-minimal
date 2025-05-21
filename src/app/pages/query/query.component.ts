import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CodeEditor, Setup } from '@acrodata/code-editor';
import { languages } from '@codemirror/language-data';
import { keymap, EditorView } from '@codemirror/view';
import { Prec } from '@codemirror/state';
import { indentMore, indentLess, indentWithTab } from '@codemirror/commands';
import {
  acceptCompletion,
  completionStatus,
  autocompletion,
  closeCompletion,
  moveCompletionSelection,
} from '@codemirror/autocomplete';
import { DefaultService, MetricaApi } from '../../api';
import { basicSetup } from 'codemirror';

@Component({
  selector: 'app-query',
  templateUrl: './query.component.html',
  standalone: true,
  imports: [CommonModule, FormsModule, CodeEditor],
})
export class QueryComponent {
  constructor(private apiService: DefaultService) {}

  value = 'SELECT * FROM table';
  language = 'sql';
  languages = languages;
  base_table?: string = undefined;
  metrics: string[] = [];
  parameters: string[] = [];
  error?: string = undefined;

  extensions = [
    basicSetup,
    Prec.highest(
      keymap.of([
        {
          key: 'Shift-Enter',
          run: () => {
            console.log('kuku');
            this.executeQuery();
            return true;
          },
        },
        { key: 'Tab', run: acceptCompletion },
        { key: 'Escape', run: closeCompletion },
        { key: 'ArrowDown', run: moveCompletionSelection(true) },
        { key: 'ArrowUp', run: moveCompletionSelection(false) },
        indentWithTab,
      ])
    ),
  ];

  executeQuery() {
    this.apiService
      .validateMetricaMetricaValidatePost(this.value)
      .subscribe((responce: MetricaApi) => {
        console.log('kuku2');
        this.value = responce.sql;
        this.metrics = Array.from(responce.metrics);
        this.parameters = Array.from(responce.parameters);
        this.base_table = responce.base_table;
        // this.responce_str = JSON.stringify(responce, null, 2);
        console.log(responce);
        console.log('kuku3');
      });
  }
}
