import {AppInfo} from '../constants.js'
export default {
    created () {
      const title = this.$options.title;
      document.title = title ?  (typeof(title)=='function' ? title(this) : title) : (AppInfo.DocumentTitle || "Portfolio! My first app..");
    }
}