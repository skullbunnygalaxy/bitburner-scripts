/** @param {NS} ns */
import { termColor } from "./modules/term-color.js";

export async function main(ns) {
    // Iterator we'll use for our loop
    var i = 0;
    const script = "02-mid-hack.js"
    // loop through personal servers
    while (i < ns.getPurchasedServerLimit()) {
        var serv = ("pserv-" + i);
        const ram = ns.getServerMaxRam(serv);
        let thd;
        // auto populate thd with relevant number
        if (ns.args[1] !== undefined) {
            thd = ns.args[1]; // defines with optional argument
        } else {
            thd = (Math.floor(ram / 2.6)); // defines based on ram
            //ns.tprint("thd = " + thd);
        }
        
        if (ns.scriptRunning(script, serv)) {
            // kill current script and run new one
            ns.kill(script, serv);
            await ns.sleep(6000); // to ensure full ram access
            ns.tprint("sleep");
        } else {
            ns.tprint("No prior hack running.");
        }
        ns.exec(script, serv, thd);
        i++;
    }
}