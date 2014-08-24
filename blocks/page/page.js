var nb = require('nanoblocks');

nb.define('page', {
  events: {
    'init': '_oninit'
  },

  _oninit: function() {
    this.$node = $(this.node);
    this.$node.addClass('page_js_inited');
  }
});

$(function() {
  nb.init();
});