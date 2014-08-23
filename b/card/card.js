var nb = require('nanoblocks');

nb.define('card', {
  events: {
    'init': '_oninit'
  },

  _oninit: function() {
    this.$node = $(this.node);
    this.$node.addClass('card_js_inited');
  }
});