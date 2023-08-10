/** @param {NS} ns */
export async function main(ns) {

    // Two Ports Needed - Removed 0 RAM servers: crush-fitness, johnson-ortho.
    var server2Port = ["phantasy", "silver-helix", "omega-net", "crush-fitness", "the-hub", "avmnite-02h"];
    
        while (true) {
            for (var i = 0; i < server2Port.length; ++i) {
                var serv2 = server2Port[i];
                var security = ns.getServerSecurityLevel(serv2)
                var money = ns.getServerMoneyAvailable(serv2)
                var maxMoney = ns.getServerMaxMoney(serv2)
                var halfMoney = (maxMoney*.5)
    
                if (security >= 10 && money >= halfMoney) {
                    await ns.weaken(serv2)
                } else if (money <= halfMoney){
                    ns.print("Not worth hacking yet...")
                    await ns.grow(serv2)
                }
                await ns.sleep(10)		
            } 	
        }
    }