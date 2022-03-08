import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class ToggleSwitchComponent extends Component {
  @tracked
  isClicked = false;

  @action
  handleClick() {
    this.isClicked = !this.isClicked;
  }
}
