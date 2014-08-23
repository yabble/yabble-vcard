(function(yr) {
  yr.externals._wrap = function(name, options){
    var data = {};
    if (options && options.length) {
        data[name] = options.length == 1
            ? options[0].data
            : pluck(options, 'data');
    }
    return [{
        data: data,
        name: '',
        parent: null,
        doc: options[0].doc
    }];
  };

  function pluck(list, popertyName) {
    var result = [];
    for (var i = 0, c = list.length; i < c; i++) {
      var item = list[i];
      var value = item && item[popertyName];

      if (value) {
        result.push(value);
      }
    }
    return result;
  }
}(yr));