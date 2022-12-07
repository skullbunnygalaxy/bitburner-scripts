/** @param {NS} ns */
import { termColor } from "./modules/term-color.js";
import { list_servers } from "./modules/list-servers.js";

export async function main(ns) {
    const servers = list_servers(ns).filter(s => (ns.getServerRequiredHackingLevel(s) <= ns.getHackingLevel())); //.concat(['home'])
    let zeroRam = [];
    let needAccess = [];
    let noScript = [];
    for (const server of servers) {
        const used = ns.getServerUsedRam(server);
        const max = ns.getServerMaxRam(server);
        const access = ns.hasRootAccess(server);
        const percentage = ((100 * used / max).toFixed(2));
        if (access == false) {
            needAccess.push(server);
        } else if (max == 0) {
            zeroRam.push(server);
        } else if (used == 0) {
            noScript.push(server);
        } else {
            (ns).tprintf(
                termColor.green +
                server +
                " " +
                termColor.cyan +
                used +
                "/" +
                max +
                "GB" +
                termColor.reset);
        }
    }
    (ns).tprintf(
        termColor.yellow +
        "Require Access: " +
        termColor.green +
        needAccess +
        termColor.reset);
    (ns).tprintf(
        termColor.orange +
        "No scripts running: " +
        termColor.green +
        noScript +
        termColor.reset);
    (ns).tprintf(
        termColor.red +
        "No ram: " +
        termColor.green +
        zeroRam +
        termColor.reset);
}
