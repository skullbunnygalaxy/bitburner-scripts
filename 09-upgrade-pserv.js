/** @param {NS} ns */
import { termColor } from "./modules/term-color.js";
export async function main(ns) {
    // Upgrade to this amount of ram.
    var ram = 128;
    // Iterator we'll use for our loop
    var i = 0;
    var success = [];
    var fail = [];

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
            success.push(hostname);
        } else {
            fail.push(hostname);
            await ns.sleep(60000);
        }
        ++i;
    }
    (ns).tprintf(termColor.green + "Bought upgrades for: " + success);
    (ns).tprintf(termColor.red + "Could not upgrade:" + fail + termColor.reset);
}