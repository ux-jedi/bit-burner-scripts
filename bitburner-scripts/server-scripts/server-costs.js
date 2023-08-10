export async function main(ns) {
	var choice = await ns.prompt("What size server?", { type: "select", choices: ["2GB", "4GB", "8GB", "16GB", "32GB", "64GB", "128GB", "256GB", "512GB", "1TB", "2TB", "4TB", "8TB", "16TB", "32TB", "64TB", "131TB", "262TB", "524TB", "1PB"] });

	var ogChoice = choice;

	if (["2GB", "4GB", "8GB", "16GB", "32GB", "64GB", "128GB", "256GB", "512GB"].includes(choice)) {
		var choice = choice.replace("GB", "");
	} else if (choice == "1TB") {
		var choice = choice.replace("1TB", "1024");
	} else if (choice == "2TB") {
		var choice = choice.replace("2TB", "2048");
	} else if (choice == "4TB") {
		var choice = choice.replace("4TB", "4096");
	} else if (choice == "8TB") {
		var choice = choice.replace("8TB", "8192");
	} else if (choice == "16TB") {
		var choice = choice.replace("16TB", "16384");
	} else if (choice == "32TB") {
		var choice = choice.replace("32TB", "32768");
	} else if (choice == "64TB") {
		var choice = choice.replace("64TB", "65536");
	} else if (choice == "131TB") {
		var choice = choice.replace("131TB", "131072");
	} else if (choice == "262TB") {
		var choice = choice.replace("262TB", "262144");
	} else if (choice == "524TB") {
		var choice = choice.replace("524TB", "524288");
	} else if (choice == "1PB") {
		var choice = choice.replace("1PB", "1048576");
	}

	var servPrice = ns.getPurchasedServerCost(choice);
	var allServerPrice = (servPrice * 25);
	var convertPrice = servPrice.toLocaleString("en-US");
	var convertAllPrice = allServerPrice.toLocaleString("en-US");

	ns.tprint("The ", ogChoice, " server will cost:");
	ns.tprint("One Server will cost $", convertPrice);
	ns.tprint("25 Servers will cost $", convertAllPrice);
};