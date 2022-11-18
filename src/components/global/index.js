import cardTitle from "./cardTitle.vue";
import zSelect from "./zSelect.vue";
import cal from "./cal.vue";

export default function install(app) {
  app.component('zTitle', cardTitle)
  app.component('zSelect', zSelect)
  app.component('cal', cal)
}

