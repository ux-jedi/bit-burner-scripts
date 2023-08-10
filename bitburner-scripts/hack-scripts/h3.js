/** @param {NS} ns */
export async function main(ns) {

    // Three Ports Needed - Removed 0 RAM servers: computek.
    var server3Port = ["netlink", "rothman-uni", "catalyst", "summit-uni", "rho-construction", "millenium-fitness", "I.I.I.I"];
    
        // Move scripts to 3 port Servers, Nuke, Hack
        while (true) {
            for (var i = 0; i < server3Port.length; ++i) {
                var serv3 = server3Port[i];
    
                await ns.hack(serv3)
                await ns.sleep(10)
            }
        }
    }