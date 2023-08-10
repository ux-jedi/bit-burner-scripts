/** @param {NS} ns */
export async function main(ns) {

    // Two Ports Needed - Removed 0 RAM servers: crush-fitness, johnson-ortho.
    var server2Port = ["phantasy", "silver-helix", "omega-net", "crush-fitness", "the-hub", "avmnite-02h"];
    
        while (true) {
            for (var i = 0; i < server2Port.length; ++i) {
                var serv2 = server2Port[i];
    
                await ns.hack(serv2)
                await ns.sleep(10)
            }
        }
    }