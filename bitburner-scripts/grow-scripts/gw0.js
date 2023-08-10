/** @param {NS} ns */
export async function main(ns) {

	// Zero Ports Needed
	var server0Port = ["joesguns", "sigma-cosmetics", "n00dles", "harakiri-sushi", "foodnstuff", "hong-fang-tea", "nectar-net"];

	while (true) {
		for (var i = 0; i < server0Port.length; ++i) {
			var serv0 = server0Port[i];
			var security = ns.getServerSecurityLevel(serv0)
			var money = ns.getServerMoneyAvailable(serv0)
			var maxMoney = ns.getServerMaxMoney(serv0)
			var halfMoney = (maxMoney*.5)

			if (security >= 10 && money >= halfMoney) {
				await ns.weaken(serv0)
			} else if (money <= halfMoney){
				ns.print("Not worth hacking yet...")
				await ns.grow(serv0)
			}
			await ns.sleep(10)		
		} 	
	}
}