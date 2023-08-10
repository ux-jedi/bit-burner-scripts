/** @param {NS} ns */
export async function main(ns) {

    var allServers = ["joesguns", "sigma-cosmetics", "n00dles", "harakiri-sushi", "foodnstuff", "hong-fang-tea", "nectar-net", "neo-net", "zer0", "max-hardware", "iron-gym", "CSEC", "phantasy", "silver-helix", "omega-net", "crush-fitness", "the-hub", "avmnite-02h", "crush-fitness", "johnson-ortho", "netlink", "rothman-uni", "catalyst", "summit-uni", "rho-construction", "millenium-fitness", "I.I.I.I", "computek", "aevum-police", "alpha-ent", "syscore", "lexo-corp", "snap-fitness", "global-pharm", "unitalife", "univ-energy", "nova-med", ".", "run4theh111z", "applied-energetics", "nova-med", "snap-fitness", "syscore", "zb-def", "zb-institute", "vitalife", "titan-labs", "solaris", "microdyne", "helios", "omnia", "infocomm", "clarkinc", "omnitek", "blade", "fulcrumtech", "powerhouse-fitness", "4sigma", "aerocorp", "b-and-a", "clarkinc", "defcomm", "deltaone", "ecorp", "fulcrumassets", "galactic-cyber", "icarus", "kuai-gong", "megacorp", "nwo", "stormtech", "taiyang-digital", "The-Cave", "darkweb", "zeus-med", "w0r1d_d43m0n"];
    
    // Move scripts to 0 port Servers, Nuke, Hack
        for (var i = 0; i < allServers.length; ++i) {
            var allSer = allServers[i];
    
            try { ns.brutessh(allSer); } catch { }
            try { ns.ftpcrack(allSer); } catch { }
            try { ns.relaysmtp(allSer); } catch { }
            try { ns.httpworm(allSer); } catch { }
            try { ns.sqlinject(allSer); } catch { }
            try { ns.nuke(allSer); } catch {}
        }
    }