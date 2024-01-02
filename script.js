function processExpressions() {
	const regex = new RegExp('^|$', 'gm');

	state = Calc.getState();
	outText = "";

	for (let item of state.expressions.list) {

    	if (typeof item["type"] !== "undefined") {
			if (item.type === "expression") outText += item.latex + "\n";
		}
  	}
	const subst = `$$$$`;

	const result = outText.replace(regex, subst);

	copy(result);
}

processExpressions();

