import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action, computed } from '@ember/object';

export default class DataGrid extends Component {
  @tracked selectedFileIds = new Set();

  @computed('selectedFileIds')
  get selectedCount() {
    return this.selectedFileIds.size;
  }

  get allSelected() {
    if (this.selectedFileIds.size === 0) {
      return false;
    } else if (this.selectedFileIds.size === this.args.content.length) {
      return true;
    }
  }

  set allSelected(value) {
    if (value === true) {
      this.args.content.forEach((file) => {
        this.selectedFileIds.add(file.id);

        // todo: track this more cleanly to not require overwrites
        this.selectedFileIds = this.selectedFileIds;
      });
    } else {
      this.selectedFileIds = new Set();
    }
  }

  // "indeterminate" has to be set separately from "checked" so we have to calculate
  // both allSelected and isIndeterminateSelected
  get isIndeterminateSelected() {
    return (
      this.selectedFileIds.size > 0 &&
      this.selectedFileIds.size < this.args.content.length
    );
  }

  @action
  selectFile(id, value) {
    if (value === true) {
      this.selectedFileIds.add(id);
    } else {
      this.selectedFileIds.delete(id);
    }

    // todo: track this more cleanly to not require overwrites
    this.selectedFileIds = this.selectedFileIds;
  }

  @action
  downloadFiles() {
    let selectedFiles = this.args.content.filter((file) => {
      return this.selectedFileIds.has(file.id) && file.status === 'available';
    });

    let output = selectedFiles
      .map((file) => {
        return `device: ${file.device}, path: ${file.path}`;
      })
      .join('\n');

    alert(output);
  }
}
