/** @param {NS} ns */
export async function main(ns) {
    // take server, and opt thread count, as args
    const serv = ns.args[0];
    const ram = ns.getServerMaxRam(serv)
    ns.tprint("ram = " + ram);
    let thd;
    // find out port requirements
    const ports = ns.getServerNumPortsRequired(serv);
    ns.tprint(serv + " ports: " + ports);
    // run loop based on port requirements
    for (var i = ports; i > 0; i--) {
        // in loop, depending on number do different port hacks
        if (i == 2) {
            ns.ftpcrack(serv);
        } else if (i == 3) {
            ns.relaysmtp(serv);
        } else if (i == 4) {
            ns.httpworm(serv);
        } else if (i == 5) {
            ns.sqlinject(serv);
        } else {
            ns.brutessh(serv);
        }
    }
    // auto populate thd with relevant number
    if (ns.args[1] !== undefined) {
        thd = ns.args[1]; // defines with optional argument
    } else {
        thd = (Math.floor(ram / 2.6)); // defines based on ram
        ns.tprint("thd = " + thd);
    }
    // hack server with current thread count
    ns.scp("mid-hack.js", serv);
    ns.nuke(serv);
    if (ns.scriptRunning("mid-hack.js", serv)) {
        ns.kill("mid-hack.js", serv);
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
        ns.exec("mid-hack.js", serv, thd);
    } else {
        ns.tprint("Cannot run hack. Ram: " + ram);
    }
}