/** @param {NS} ns */
export async function main(ns) {

    // Three Ports Needed - Removed 0 RAM servers: computek.
    var server3Port = ["netlink", "rothman-uni", "catalyst", "summit-uni", "rho-construction", "millenium-fitness", "I.I.I.I"];
    
        while (true) {
            for (var i = 0; i < server3Port.length; ++i) {
                var serv3 = server3Port[i];
                var security = ns.getServerSecurityLevel(serv3)
                var money = ns.getServerMoneyAvailable(serv3)
                var maxMoney = ns.getServerMaxMoney(serv3)
                var halfMoney = (maxMoney*.5)
    
                if (security >= 10 && money >= halfMoney) {
                    await ns.weaken(serv3)
                } else if (money <= halfMoney){
                    ns.print("Not worth hacking yet...")
                    await ns.grow(serv3)
                }
                await ns.sleep(10)		
            } 	
        }
    }