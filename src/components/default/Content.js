import template from 'template/default/content.html';
import initUI from 'components/default/initUI.js';

export default {
  name: 'content',
  template,
  mounted() {
    initUI();
  }
}
