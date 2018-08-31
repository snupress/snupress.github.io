//temporarily cached due to error 404 on 31st August 2018 at https://web.archive.org/web/20130403012523js_/http://mitya.co.uk/scripts/source/164.js
String.prototype.match2 = function(rgxp, lba) {
	if (!rgxp || !rgxp instanceof RegExp) return null;
	if (!lba || !/\(\?<[=!].+\)/.test(lba)) return this.match(rgxp);
	var posOrNeg = lba.charAt(3) == '=' ? 'pos' : 'neg';
	var lba_asGroup = lba.toString().replace(/\(\?<[=!]/, '(');
	var flags = rgxp.toString().match(/[igm]{0,3}$/);
	var matches = this.match(eval('/'+lba_asGroup+rgxp.toString().replace(/^\//, '')));
	if (matches) {
		if (posOrNeg == 'pos') {
			for(var u in matches) matches[u] = matches[u].toString().replace(eval('/^'+lba_asGroup+'/'+flags), '');
			return matches;
		} else {
			var noPos = this.replace(eval('/'+matches.join('|')+'/g'), '');
			return noPos.match(rgxp);
		}
	} else if (posOrNeg == 'neg')
		return this.match(rgxp);
	else
		return null;
}

String.prototype.replace2 = function(rgxp, repl, lba) {
	if (!rgxp || !rgxp instanceof RegExp) return null;
	var rgxp_str = rgxp.toString();
	var pattern_only = rgxp_str.match(/\/(.+)\/[igm]{0,3}/);
	pattern_only = pattern_only[1];
	if (!lba || !/\(\?<[=!].+\)/.test(lba)) return this.match(rgxp);
	var lba_asGroup = lba.toString().replace(/\(\?<[=!]/, '(');
	var flags = rgxp.toString().match(/[igm]{0,3}$/).toString();
	if (lba.charAt(3) == '=')
		return this.replace(new RegExp(lba_asGroup+pattern_only, flags), '$1'+repl);
	else {
		var rgxp2 = new RegExp('(|.+?)'+pattern_only, flags+(flags.indexOf('g') == -1 ? 'g' : ''));
		var matches = this.match(rgxp2);
		if (matches) {
			var i = 0;
			var ret = this.replace(rgxp2, function($0) { var ret = $0+'***'+i; i++; return ret; }), changed = 0;
			for (var h in matches) {
				if (typeof matches[h] != 'string') continue;
				if (!new RegExp(lba_asGroup+'$').test(on = matches[h].replace(new RegExp(pattern_only+'$'), '')) && (changed == 0 || flags.indexOf('g') != -1)) {
					ret = ret.replace(matches[h]+'***'+h, matches[h].replace(new RegExp(pattern_only+'$', flags), repl));
					changed++;
				}
			}
			return ret.replace(/\*{3}\d+/g, '');
		} else
			return this;
	}
}

RegExp.prototype.test2 = function(str, lba) { return str.match2(this, lba) ? true : false; }
