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

  buttonStyling() {
    // if (this.count >= 18) return 'clicks-eighteen';
    // if (this.count >= 15) return 'clicks-fifteen';
    // if (this.count >= 12) return 'clicks-twelve';
    // if (this.count >= 9) return 'clicks-nine';
    // if (this.count >= 6) return 'clicks-six';
    if (this.count === 3) return 'clicks-three';
  }
}
