/** @param {NS} ns */
export async function main(ns) {

    // Four Ports Needed - Removed 0 RAM servers: applied-energetics, nova-med, snap-fitness, syscore, zb-def.
    var server4Port = ["aevum-police", "alpha-ent", "syscore", "lexo-corp", "snap-fitness", "global-pharm", "unitalife", "univ-energy", "nova-med", ".", "run4theh111z"];
    
        // Move scripts to 0 port Servers, Nuke, Hack
        while (true) {
            for (var i = 0; i < server4Port.length; ++i) {
                var serv4 = server4Port[i];
    
                await ns.hack(serv4)
                await ns.sleep(10)
            }
        }
    }