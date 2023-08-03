import Component from '@glimmer/component';

export default class FileStatus extends Component {
  get isAvailable() {
    return this.args.currentStatus === 'available';
  }

  get formattedStatus() {
    // force everything to lowercase first
    const lowerCaseStatus = this.args.currentStatus.toLocaleLowerCase();

    // then capitalize just the first character
    const titleCaseStatus = lowerCaseStatus[0].toLocaleUpperCase() + lowerCaseStatus.slice(1);

    return titleCaseStatus;
  }
}
