/** @param {NS} ns */
import { termColor } from "./modules/term-color.js";

export async function main(ns) {
    // How much RAM each purchased server will have. 
    var ram = 8;
    // Iterator we'll use for our loop
    var i = 0;
    const script = "02-mid-hack.js"
    // Continuously try to purchase servers until we've reached the maximum
    // amount of servers
    while (i < ns.getPurchasedServerLimit()) {
        // Check if we have enough money to purchase a server
        if (ns.getServerMoneyAvailable("home") > ns.getPurchasedServerCost(ram)) {
            // If we have enough money, then:
            //  1. Purchase the server
            //  2. Copy our hacking script onto the newly-purchased server
            //  3. Run our hacking script on the newly-purchased server with 3 threads
            //  4. Increment our iterator to indicate that we've bought a new server
            var hostname = "pserv-" + i;
            ns.purchaseServer(hostname, ram);
            ns.scp(script, hostname);
            ns.exec(script, hostname, 3);
            ++i;
        }
    }
}