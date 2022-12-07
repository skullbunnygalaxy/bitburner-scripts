/** @param {NS} ns */
import { termColor } from "./modules/term-color.js";
import { list_servers } from "./modules/list-servers.js";

export async function main(ns) {
    const mark = list_servers(ns).filter(s => ((ns.getServerMaxMoney(s) != 0) && (ns.hasRootAccess(s))));

    const servers = list_servers(ns);
    const tservers = [];
    for (const server of servers) {
        const ps = ns.ps(server);
        for (let script of ps) {
            let target = script.args[0];
            if (target == null) {
                (ns).tprintf(
                    termColor.cyan +
                    server +
                    termColor.purple +
                    " > " +
                    `${script.filename}` +
                    " [" + `${script.threads}` +
                    " threads]" +
                    termColor.reset
                );
            } else if ((target != null) && true != tservers.includes(target)) {
                tservers.push(target);
            }
        }
    }

    // compare mark list to tservers list 
    // return marks not on tservers list
    let filtered = mark.filter(x => !tservers.includes(x));
    ns.tprint(filtered);

}