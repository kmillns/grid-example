import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

export default class GridRow extends Component {
  @tracked selectedFileIds;

  get selected() {
    return this.args.selectedFileIds.has(this.args.file.id);
  }

  set selected(value) {
    this.args.selectFile(this.args.file.id, value);
  }
}
