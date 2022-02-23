import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class HotButtonComponent extends Component {
  @tracked
  count = 0;

  @tracked
  classStyling = null;

  @action
  handleClick() {
    this.count++;
    if (this.count < 3) {
      this.classStyling;
    } else if (this.count < 6) {
      this.classStyling = 'clicks-three';
    } else if (this.count < 9) {
      this.classStyling = 'clicks-six';
    } else if (this.count < 12) {
      this.classStyling = 'clicks-nine';
    } else if (this.count < 15) {
      this.classStyling = 'clicks-twelve';
    } else if (this.count < 18) {
      this.classStyling = 'clicks-fifteen';
    } else {
      this.classStyling = 'clicks-nuclear';
    }
  }
}
