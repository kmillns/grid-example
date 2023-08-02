import Component from '@glimmer/component';

export default class FileStatus extends Component {
  get isAvailable() {
    return this.args.currentStatus === 'available';
  }
}
