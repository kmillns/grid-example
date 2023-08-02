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
}
