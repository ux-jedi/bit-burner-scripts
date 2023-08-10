/** @param {NS} ns */
export async function main(ns) {

    // One Port Needed
    var server1Port = ["neo-net", "zer0", "max-hardware", "iron-gym", "CSEC"];
    
        while (true) {
            for (var i = 0; i < server1Port.length; ++i) {
                var serv1 = server1Port[i];
    
                await ns.hack(serv1)
                await ns.sleep(10)
            }
        }
    }