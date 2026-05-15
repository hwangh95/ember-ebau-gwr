import { A } from "@ember/array";
import { action } from "@ember/object";
import Component from "@glimmer/component";
import { tracked } from "@glimmer/tracking";

export default class ModelFormSubmitErrorsComponent extends Component {
  @tracked errorIndex = 0;

  getErrorObject = (index) => A(this.args.errors).objectAt(index);

  get visualErrorIndex() {
    return this.errorIndex + 1;
  }

  @action
  updateCurrentIndex() {
    if (this.args.errors.length) {
      this.errorIndex = (this.errorIndex + 1) % this.args.errors.length;
    }
  }
}
