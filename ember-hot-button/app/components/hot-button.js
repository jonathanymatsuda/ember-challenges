import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class HotButtonComponent extends Component {
  @tracked
  count = 0;

  @action
  incrementClick() {
    this.count++;
  }
}
