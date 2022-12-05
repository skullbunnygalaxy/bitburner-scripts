/** @param {NS} ns */
export async function main(ns) {
    var serverarray = [
        "n00dles",
        "foodnstuff",
        "sigma-cosmetics",
        "joesguns",
        "nectar-net",
        "hong-fang-tea",
        "harakiri-sushi",
        "neo-net",
        "zer0",
        "max-hardware",
        "iron-gym",
        "phantasy",
        "silver-helix",
        "johnson-ortho",
        "summit-uni",
        "the-hub",
        "crush-fitness",
        "aevum-police",
        "computek",
        "omega-net",
        "netlink",
        "millenium-fitness",
        "syscore",
        "rho-construction",
        "catalyst",
        "alpha-ent"
    ];

    while (true) {
        for (var i = 0; i < serverarray.length; i) {
            var target = serverarray[i];
            //ns.tprint(target);
            if (ns.getServerSecurityLevel(target) > (ns.getServerMinSecurityLevel(target) + 3)) {
                await ns.weaken(target);
            } else if (ns.getServerMoneyAvailable(target) < (ns.getServerMaxMoney(target) * 0.75)) {
                await ns.grow(target);
            } else {
                i++;
                await ns.sleep(10000)
            }
        }
        await ns.sleep(10000)
    }
}