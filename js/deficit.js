var costCalculator = {};

costCalculator.renderCost = function() {
	if (this.selector === null || this.selector === "undefined") {
		console.error("No selector defined for deficit calculator.");
		return;
	}

	if (this.cost === null || this.cost === "undefined") {
		console.error("No cost defined for deficit calculator.");
		return;
	}

	$(this.selector).text(this.cost);
};

costCalculator.init = function(settings) {
	if (settings === null || settings === "undefined") {
		console.log("No settings passed to deficit init. Assuming reasonable values.");

		settings = {};
		settings.starting = 0;
		settings.selector = "#deficit";
	}

	this.cost 		= typeof settings.starting !== "undefined" ? settings.starting : 1000;
	this.selector	= typeof settings.selector !== "undefined" ? settings.selector : null;
	this.renderCost();
};

costCalculator.updateCost = function(_cost) {
	if (_cost === null || _cost === "undefined") {
		console.error("No cost passed to deficit update. The list items is probably missing a data-cost attribute.");
		return;
	}

	if (this.cost === null || this.cost === "undefined") {
		console.log("Deficit calculator had no defined cost, assuming zero.");
		this.cost = 0;
	}

	this.cost += parseFloat(_cost);
	this.renderCost();
};