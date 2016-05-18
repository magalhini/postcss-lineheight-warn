var postcss = require('postcss');

module.exports = postcss.plugin('postcss-lineheight-warn', function (opts) {
    opts = opts || {
        break: false
    };

    var matchUnit = function(data) {
		return data.match(/px|em|rem|%/) || [];
    }

    var warnInvalid = function(data) {
    	data.warning.warn('line-height should be unitless: line-height: ' + data.value + '; at line ' + data.at)
    }

    return function (css, result) {
        css.walkDecls('line-height', function(rule) {
        	var units = matchUnit(rule.value);

        	units.map(function(unit) {
        		warnInvalid({
                    warning: result,
        			value: rule.value,
        			at: rule.source.start.line
        		});

                if (opts.break) throw new Error('Invalid CSS: line-height is not unitless at line ' + rule.source.start.line);
        	});
        });
    };
});
