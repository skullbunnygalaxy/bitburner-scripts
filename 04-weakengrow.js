/** @param {NS} ns */
import { termColor } from "./modules/term-color.js";
import { list_servers } from "./modules/list-servers.js";

export async function main(ns) {
    const servers = list_servers(ns).filter(s => ((ns.getServerRequiredHackingLevel(s) <= ns.getHackingLevel()) && (ns.getServerMaxMoney(s) != 0) && (ns.hasRootAccess(s))));

    while (true) {
        for (var i = 0; i < servers.length; i) {
            var target = servers[i];
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