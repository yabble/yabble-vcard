var nb = require('nanoblocks');

nb.define('card', {
  events: {
    'init': '_oninit'
  },

  _oninit: function() {
    this.$node = $(this.node);
    this.$node.addClass('card_js_inited');

    this.$sides = this.$node.find('.card-layout');

    this.links = [];

    var card = this;
    this.$node.find('[data-nb="link"]').each(function() {
      var link = nb.block(this);
      card.links.push(link);
      link.on('link.selected', card._onClickLink.bind(card));
    });
  },

  /**
   * Обработчик выполняется при смене состояния ссылки
   * Событие не всплывает при нажатии на активную ссылку
   */
  _onClickLink: function(e, current) {
    this.links.forEach(function(link) {
      if (link !== current) {
        link.deselect();
        this.flipCard(
          'ru' === link.$node.data('params').lang ? 'en' : 'ru'
        );
      }
    }.bind(this));
  },

  /**
   * Переворачивает карточку
   * @param  {String} lang язык, на который переключаем
   */
  flipCard: function(lang) {
    this.$sides
          .removeClass('card__side_state_closed')
          .addClass('card__side_state_opened')
          .filter('.card-layout_lang_' + lang)
          .end()
          .filter('.card-layout_lang_' + (('ru' === lang) ? 'en' : 'ru'))
          .removeClass('card__side_state_opened')
          .addClass('card__side_state_closed');
  }
});