import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class HotButtonComponent extends Component {
  @tracked
  count = 0;

  @action
  handleClick() {}
}
