import LyButton from './src/button';

/* istanbul ignore next */
LyButton.install = function(Vue) {
  Vue.component(LyButton.name, LyButton);
};

export default LyButton;
