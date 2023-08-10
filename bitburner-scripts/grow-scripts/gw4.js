/** @param {NS} ns */
export async function main(ns) {

    // Four Ports Needed - Removed 0 RAM servers: applied-energetics, nova-med, snap-fitness, syscore, zb-def.
    var server4Port = ["aevum-police", "alpha-ent", "syscore", "lexo-corp", "snap-fitness", "global-pharm", "unitalife", "univ-energy", "nova-med", ".", "run4theh111z"];
    
        while (true) {
            for (var i = 0; i < server4Port.length; ++i) {
                var serv4 = server4Port[i];
                var security = ns.getServerSecurityLevel(serv4)
                var money = ns.getServerMoneyAvailable(serv4)
                var maxMoney = ns.getServerMaxMoney(serv4)
                var halfMoney = (maxMoney*.5)
    
                if (security >= 10 && money >= halfMoney) {
                    await ns.weaken(serv4)
                } else if (money <= halfMoney){
                    ns.print("Not worth hacking yet...")
                    await ns.grow(serv4)
                }
                await ns.sleep(10)		
            } 	
        }
    }