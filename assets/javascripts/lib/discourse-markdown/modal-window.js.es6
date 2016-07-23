import { registerOption } from 'pretty-text/pretty-text';

registerOption((siteSettings, opts) => {
  opts.features["modal-window"] = true;
});

export function setup(helper) {
  helper.whiteList(['label[for]']);
  helper.whiteList(['span[style]']);
  helper.whiteList(['label[for]'])(['span[style]']);
}
