import LyButton from "./button/index.js";

const components = [
  LyButton
]

// 批量组件注册
const install = function (Vue) {
  components.forEach((component) => {
    Vue.component(com.name, component);
  });
};

export default { install }; 