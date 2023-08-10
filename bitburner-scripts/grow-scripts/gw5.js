/** @param {NS} ns */
export async function main(ns) {

    // Five Ports Needed - Removed 0 RAM servers: 4sigma, aerocorp, b-and-a, clarkinc, defcomm, deltaone, ecorp, fulcrumassets, galactic-cyber, icarus, kuai-gong, megacorp, nwo, stormtech, taiyang-digital, The-Cave, darkweb, zeus-med.
    var server5Port = ["zb-institute", "vitalife", "titan-labs", "solaris", "microdyne", "helios", "omnia", "infocomm", "clarkinc", "omnitek", "blade", "fulcrumtech", "powerhouse-fitness"];
    
        while (true) {
            for (var i = 0; i < server5Port.length; ++i) {
                var serv5 = server5Port[i];
                var security = ns.getServerSecurityLevel(serv5)
                var money = ns.getServerMoneyAvailable(serv5)
                var maxMoney = ns.getServerMaxMoney(serv5)
                var halfMoney = (maxMoney*.5)
    
                if (security >= 10 && money >= halfMoney) {
                    await ns.weaken(serv5)
                } else if (money <= halfMoney){
                    ns.print("Not worth hacking yet...")
                    await ns.grow(serv5)
                }
                await ns.sleep(10)		
            } 	
        }
    }