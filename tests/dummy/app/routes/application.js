import Route from "@ember/routing/route";
import { inject as service } from "@ember/service";

import createServer from "dummy/mirage/config";

export default class ApplicationRoute extends Route {
  @service intl;

  constructor(...args) {
    super(...args);

    createServer({});
  }

  beforeModel() {
    this.intl.setLocale(["de"]);
  }
}
