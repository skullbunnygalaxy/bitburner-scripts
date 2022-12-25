/** @param {NS} ns */
import { termColor } from "./modules/term-color.js";
import { list_servers } from "./modules/list-servers.js";

export async function main(ns) {    
    const servers = list_servers(ns).filter(s => (ns.getServerMaxMoney(s)!=0));

    for (var i = 0; i < servers.length; ++i) {
        var serv = servers[i];
        var moneyAvail = Math.round(ns.getServerMoneyAvailable(serv));
        var moneyMax = ns.getServerMaxMoney(serv);
        var moneyPercent = (((moneyAvail / moneyMax) * 100).toFixed(2) + '%%');
        (ns).tprintf(
            "Money (Max): " +
            termColor.green +
            ns.nFormat(moneyAvail, "$0.000a") +
            termColor.reset +
            " /" +
            termColor.orange +
            ns.nFormat(moneyMax, "$0.000a") +
            termColor.reset +
            " [" + 
            termColor.yellow +
            moneyPercent +
            termColor.reset +
            "] ... " +
            termColor.reset +
            termColor.cyan + 
            serv + 
            termColor.reset
        );
    }
}