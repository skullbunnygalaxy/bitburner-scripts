/** @param {NS} ns */
export async function main(ns) {
    // How much RAM each purchased server will have. In this case, it'll
    // be 8GB.
    var ram = 64;
    // Iterator we'll use for our loop
    var i = 0;

    // Continuously try to purchase servers until we've reached the maximum
    // amount of servers
    while (i < ns.getPurchasedServerLimit()) {
        // Check if we have enough money to purchase a server
        var hostname = ("pserv-" + i);
        // ns.tprint(hostname);
        var cost = ns.getPurchasedServerUpgradeCost(hostname, ram);
        //ns.tprint(cost);
        if (ns.getServerMoneyAvailable("home") > cost) {
            // If we have enough money, then:
            //  1. Purchase upgrade
            ns.upgradePurchasedServer(hostname, ram);
            ns.tprint("Buying upgrade for " + hostname + " for $" + cost);
            ++i;
        } else {
            ns.tprint("Cannot afford upgrade for " + hostname + "; $" + cost);
        }
    }
}