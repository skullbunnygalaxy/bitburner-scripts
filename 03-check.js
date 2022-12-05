/** @param {NS} ns */
export async function main(ns) {
    // Array of servers to check
    var servers0Port = [
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

    for (var i = 0; i < servers0Port.length; ++i) {
        var serv = servers0Port[i];
        var moneyAvail = Math.round(ns.getServerMoneyAvailable(serv));
        ns.tprint(
            "Max Money: " +
            ns.getServerMaxMoney(serv) +
            " ... Money available: " +
            moneyAvail +
            " ... " +
            serv
        );
    }
}