/** @param {NS} ns */
export async function main(ns) {

    // Zero Ports Needed
    var server0Port = ["joesguns", "sigma-cosmetics", "n00dles", "harakiri-sushi", "foodnstuff", "hong-fang-tea", "nectar-net"];

    // One Port Needed
    var server1Port = ["neo-net", "zer0", "max-hardware", "iron-gym", "CSEC"];

    // Two Ports Needed - 0 RAM servers: crush-fitness, johnson-ortho.
    var server2Port = ["phantasy", "silver-helix", "omega-net", "crush-fitness", "the-hub", "avmnite-02h", "crush-fitness", "johnson-ortho"];

    // Three Ports Needed - 0 RAM servers: computek.
    var server3Port = ["netlink", "rothman-uni", "catalyst", "summit-uni", "rho-construction", "millenium-fitness", "I.I.I.I", "computek"];

    // Four Ports Needed - 0 RAM servers: applied-energetics, nova-med, snap-fitness, syscore, zb-def.
    var server4Port = ["aevum-police", "alpha-ent", "syscore", "lexo-corp", "snap-fitness", "global-pharm", "unitalife", "univ-energy", "nova-med", ".", "run4theh111z", "applied-energetics", "nova-med", "snap-fitness", "syscore", "zb-def"];

    // Five Ports Needed - 0 RAM servers: 4sigma, aerocorp, b-and-a, clarkinc, defcomm, deltaone, ecorp, fulcrumassets, galactic-cyber, icarus, kuai-gong, megacorp, nwo, stormtech, taiyang-digital, The-Cave, darkweb, zeus-med.
    var server5Port = ["zb-institute", "vitalife", "titan-labs", "solaris", "microdyne", "helios", "omnia", "infocomm", "clarkinc", "omnitek", "blade", "fulcrumtech", "powerhouse-fitness", "4sigma", "aerocorp", "b-and-a", "clarkinc", "defcomm", "deltaone", "ecorp", "fulcrumassets", "galactic-cyber", "icarus", "kuai-gong", "megacorp", "nwo", "stormtech", "taiyang-digital", "The-Cave", "darkweb", "zeus-med"];

    // Personal Servers
    var personalServers = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y"];

    // Move scripts to 0 port Servers, Nuke, Hack
    for (var i = 0; i < server0Port.length; ++i) {
        var serv0 = server0Port[i];

        ns.scp('h0.js', serv0);
        ns.exec('h0.js', serv0);
    }

    // Move scripts to 1 port Servers, Nuke, Hack
    for (var i = 0; i < server1Port.length; ++i) {
        var serv1 = server1Port[i];

        ns.scp('h1.js', serv1);
        ns.exec('h1.js', serv1, 3);
    }

    // Move scripts to 2 port Servers, Nuke, Hack
    for (var i = 0; i < server2Port.length; ++i) {
        var serv2 = server2Port[i];

        ns.scp('h2.js', serv2);
        ns.exec('h2.js', serv2, 10);
    }

    // Move scripts to 3 port Servers, Nuke, Hack
    for (var i = 0; i < server3Port.length; ++i) {
        var serv3 = server3Port[i];

        ns.scp('h3.js', serv3);
        ns.exec('h3.js', serv3, 10);
    }

    // Move scripts to 4 port Servers, Nuke, Hack
    for (var i = 0; i < server4Port.length; ++i) {
        var serv4 = server4Port[i];

        ns.scp('h4.js', serv4);
        ns.exec('h4.js', serv4, 10);
    }

    // Move scripts to 5 port Servers, Nuke, Hack
    for (var i = 0; i < server5Port.length; ++i) {
        var serv5 = server5Port[i];

        ns.scp('h5.js', serv5);
        ns.exec('h5.js', serv5, 10);
    }

    // Move scripts to Personal Servers, Nuke, Hack
    for (var i = 0; i < personalServers.length; ++i) {
        var perServs = personalServers[i];

        ns.scp('gw0.js', perServs);
        ns.scp('gw1.js', perServs);
        ns.scp('gw2.js', perServs);
        ns.scp('gw3.js', perServs);
        ns.scp('gw4.js', perServs);
        ns.scp('gw5.js', perServs);
        
        ns.exec("gw0.js", perServs, 400);
        ns.exec("gw1.js", perServs, 400);
        ns.exec("gw2.js", perServs, 400);
        ns.exec("gw3.js", perServs, 400);
        ns.exec("gw4.js", perServs, 400);
        ns.exec("gw5.js", perServs, 400);
    }
}