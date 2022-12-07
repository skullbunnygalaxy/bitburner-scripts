/** @param {NS} ns */
import { termColor } from "./modules/term-color.js";

export async function main(ns) {
    // Defines the "target server" to hack.
    var serv = ns.args[0];
    var target = ns.args[1];
    const ram = ns.getServerMaxRam(serv)
    const script = "02-mid-hack.js"
    let thd = (Math.floor(ram / 2.4)); // defines based on ram
    (ns).tprintf(termColor.cyan + serv + termColor.reset + " changing target to " + termColor.purple + target + termColor.reset + "; " + thd + " threads with " + ram + "ram.");
    ns.killall(serv);
    ns.exec(script, serv, thd, target);
}