window.costCalculator = {};

window.costCalculator.renderCost = function() {
	if (this.selector === null || this.selector === 'undefined') {
		console.error('No selector defined for deficit calculator.');
		return;
	}

	if (this.total === null || this.total === 'undefined') {
		console.error('No selector defined for total cost.');
		return;
	}

	if (this.setPoint === null || this.setPoint === 'undefined') {
		console.error('No setPoint defined for deficit calculator.');
		return;
	}

	if (this.cost === null || this.cost === 'undefined') {
		console.error('No cost defined for deficit calculator.');
		return;
	}

	// Deficits are displayed as negatives.
	$(this.selector).text(-this.cost);
	$(this.total).text(this.cost - this.setPoint);
};

window.costCalculator.resetCost = function() {
	this.cost = this.setPoint;
	this.renderCost();
};

window.costCalculator.initCost = function(settings) {
	if (settings === null || settings === "undefined") {
		console.log("No settings passed to deficit initCost. Assuming reasonable values.");

		settings = {};
		settings.starting = 0;
		settings.selector = "#deficit";
		settings.total = "#totalCost";
	}

	this.setPoint	= typeof settings.starting	!== "undefined" ? settings.starting : 1000;
	this.selector	= typeof settings.selector	!== "undefined" ? settings.selector : null;
	this.total		= typeof settings.total		!== "undefined" ? settings.total	: null;
	
	this.resetCost();
};

window.costCalculator.updateCost = function(_cost) {
	if (_cost === null || _cost === "undefined") {
		console.error("No cost passed to deficit update. The list items is probably missing a data-cost attribute.");
		return;
	}

	if (this.cost === null || this.cost === "undefined") {
		console.error("Deficit calculator had no defined cost, assuming zero.");
		this.cost = 0;
	}

	var delta = parseFloat(_cost);
	if (isNaN(delta)) {
		console.error("Unable to convert _cost to Number. Assuming zero and continuing.");
		delta = 0;
	}

	this.cost += delta;
	this.renderCost();
};