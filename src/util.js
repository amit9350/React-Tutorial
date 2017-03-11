module.exports = function bindFunctions (functions) {
	functions.forEach(f => (this[f] = this[f].bind(this)));
};