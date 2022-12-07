/** @param {NS} ns */
import { termColor } from "./modules/term-color.js";
import { list_servers } from "./modules/list-servers.js";
import { getThreads } from "./modules/get-threads";
import { portCheck } from "./modules/port-check";

export async function main(ns) {
    // take server input, and request threadcount
    const serv = ns.args[0];
    const thd = getThreads(ns, serv);
    const script = "02-mid-hack.js"
    // deal with ports
    portCheck(ns, serv);

    // hack server with current thread count
    ns.scp(script, serv);
    ns.nuke(serv);
    if (ns.scriptRunning(script, serv)) {
        ns.kill(script, serv);
        await ns.sleep(6000); // to ensure full ram access
        ns.tprint("sleep");
    } else {
        ns.tprint("No prior hack running.");
    }
    if (thd == undefined) {
        ns.tprint("Waiting on Threads: " + thd);
        await ns.sleep(3000);
    } else if (thd != 0) {
        ns.tprint("serv: " + serv + " threads: " + thd);
        ns.exec(script, serv, thd);
    } else {
        ns.tprint(termColor.red + "Cannot run hack. No Ram." + termColor.reset);
    }
}