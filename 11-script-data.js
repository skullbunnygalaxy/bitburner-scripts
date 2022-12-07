/** @param {NS} ns */
import { termColor } from "./modules/term-color.js";
export async function main(ns) {
    // Provides script threads and args.
    const serv = ns.args[0];
    const ps = ns.ps(ns.args[0]);
    for (let script of ps) {
        (ns).tprintf(
            termColor.cyan +
            serv +
            termColor.purple +
            " > " + 
            `${script.filename}` + 
            " [" + `${script.threads}` + 
            " threads] >> " + 
            termColor.cyan +
            script.args +
            termColor.reset
            );
    }
}