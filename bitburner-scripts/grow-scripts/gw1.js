/** @param {NS} ns */
export async function main(ns) {

    // One Port Needed
    var server1Port = ["neo-net", "zer0", "max-hardware", "iron-gym", "CSEC"];
    
        while (true) {
            for (var i = 0; i < server1Port.length; ++i) {
                var serv1 = server1Port[i];
                var security = ns.getServerSecurityLevel(serv1)
                var money = ns.getServerMoneyAvailable(serv1)
                var maxMoney = ns.getServerMaxMoney(serv1)
                var halfMoney = (maxMoney*.5)
    
                if (security >= 10 && money >= halfMoney) {
                    await ns.weaken(serv1)
                } else if (money <= halfMoney){
                    ns.print("Not worth hacking yet...")
                    await ns.grow(serv1)
                }
                await ns.sleep(10)		
            } 	
        }
    }