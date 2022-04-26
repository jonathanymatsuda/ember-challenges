import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class HotButtonComponent extends Component {
  @tracked
  count = 0;

  @tracked
  classColorUpdates = '';

  @action
  handleClick() {
    this.count++;
    if (this.count < 3) {
      this.classColorUpdates = 'bg-inherit';
    } else if (this.count < 6) {
      this.classColorUpdates = 'bg-yellow-200';
    } else if (this.count < 9) {
      this.classColorUpdates = 'bg-yellow-400';
    } else if (this.count < 12) {
      this.classColorUpdates = 'bg-yellow-600';
    } else if (this.count < 15) {
      this.classColorUpdates = 'bg-red-700';
    } else {
      this.classColorUpdates = 'bg-blue-900';
    }
  }
}
