/** @param {NS} ns */
export async function main(ns) {

    // Five Ports Needed - Removed 0 RAM servers: 4sigma, aerocorp, b-and-a, clarkinc, defcomm, deltaone, ecorp, fulcrumassets, galactic-cyber, icarus, kuai-gong, megacorp, nwo, stormtech, taiyang-digital, The-Cave, darkweb, zeus-med.
    var server5Port = ["zb-institute", "vitalife", "titan-labs", "solaris", "microdyne", "helios", "omnia", "infocomm", "clarkinc", "omnitek", "blade", "fulcrumtech", "powerhouse-fitness"];
    
        while (true) {
            for (var i = 0; i < server5Port.length; ++i) {
                var serv5 = server5Port[i];
    
                await ns.hack(serv5)
                await ns.sleep(10)
            }
        }
    }