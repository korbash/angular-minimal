import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CodeEditor, Setup } from '@acrodata/code-editor';
import { languages } from '@codemirror/language-data';
import { keymap, EditorView } from '@codemirror/view';
import { Prec } from '@codemirror/state';
import { indentMore, indentLess, indentWithTab } from '@codemirror/commands';
import { acceptCompletion, completionStatus, autocompletion, closeCompletion, moveCompletionSelection } from '@codemirror/autocomplete';
import { basicSetup } from 'codemirror';

@Component({
  selector: 'app-query',
  templateUrl: './query.component.html',
  standalone: true,
  imports: [FormsModule, CodeEditor],
})
export class QueryComponent {
  value = 'SELECT * FROM table';
  language = "SQL";
  languages = languages;

  // Кастомная конфигурация с сохранением встроенного автодополнения                         
  extensions = [
    basicSetup,
    autocompletion({ defaultKeymap: false }),
    Prec.highest(keymap.of([
      { key: 'Tab', run: acceptCompletion },
      { key: 'Escape', run: closeCompletion },
      { key: 'ArrowDown', run: moveCompletionSelection(true) },
      { key: 'ArrowUp', run: moveCompletionSelection(false) },
      { key: 'PageDown', run: moveCompletionSelection(true, "page") },
      { key: 'PageUp', run: moveCompletionSelection(false, "page") },
      indentWithTab,
    ]))]
}