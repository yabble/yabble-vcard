var nb = require('nanoblocks');

nb.define('link', {
  events: {
    'init': '_oninit'
  },

  _oninit: function() {
    this.$node = $(this.node);
    this.$node.addClass('link_js_inited');
  }
});