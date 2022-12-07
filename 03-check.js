/** @param {NS} ns */
import { termColor } from "./modules/term-color.js";
import { list_servers } from "./modules/list-servers.js";

export async function main(ns) {    
    const servers = list_servers(ns).filter(s => (ns.getServerMaxMoney(s)!=0));

    for (var i = 0; i < servers.length; ++i) {
        var serv = servers[i];
        var moneyAvail = Math.round(ns.getServerMoneyAvailable(serv));
        (ns).tprintf(
            "Money (Max): $" +
            termColor.green +
            moneyAvail +
            termColor.reset +
            " ($" +
            termColor.orange +
            ns.getServerMaxMoney(serv) +
            termColor.reset +
            ") ... " +
            termColor.reset +
            termColor.cyan + 
            serv +
            termColor.reset
        );
    }
}