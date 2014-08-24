var nb = require('nanoblocks');

nb.define('link', {
  events: {
    'init': '_oninit',
    'click': '_setCurrent'
  },

  _oninit: function() {
    this.$node = $(this.node);
    this.$node.addClass('link_js_inited');
  },

  /**
   * Выполняется при клике на ссылку
   * @fires 'link.selected'
   * @private
   */
  _setCurrent: function() {
    if (this.$node.hasClass('link_current')) {
      return;
    }
    this.$node.addClass('link_current');
    this.trigger('link.selected', this);
  },

  /**
   * Автивирует ссылку
   */
  select: this._setCurrent,

  /**
   * Деактивирует ссылку
   */
  deselect: function() {
    this.$node.removeClass('link_current');
  }
});