/** @param {NS} ns */
import { termColor } from "./modules/term-color.js";
import { list_servers } from "./modules/list-servers.js";
import { getThreads } from "./modules/get-threads";
import { portCheck } from "./modules/port-check";

export async function main(ns) {

    const servers = list_servers(ns).filter(s => (ns.getServerRequiredHackingLevel(s) <= ns.getHackingLevel()));

    for (var i = 0; i < servers.length; ++i) {
        var serv = servers[i];
        const script = "02-mid-hack.js"
        const thd = getThreads(ns, serv);
        ns.killall(serv);
        await ns.sleep(6000);
        ns.scp(script, serv);
        portCheck(ns, serv);
        ns.nuke(serv);
        if (thd > 0) {
            ns.exec(script, serv, thd);
            ns.tprintf(termColor.green + "Running " + termColor.purple + script + termColor.green + " on " + termColor.eggshell + serv + "." + termColor.reset);
        } else {
            ns.tprintf(termColor.purple + serv + termColor.red + " does not have enough ram to run script." + termColor.reset);
        }
    }
}