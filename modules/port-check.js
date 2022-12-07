/** @param {NS} ns */


// todo: check if ports not open, then run port hacks

// run loop based on port requirements
export async function portCheck(ns, serv) {
    // find out port requirements
    const ports = ns.getServerNumPortsRequired(serv);
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
            // Wait until we acquire the "BruteSSH.exe" program
            while (!ns.fileExists("BruteSSH.exe")) {
                await ns.sleep(60000);
            }
            ns.brutessh(serv);
        }
    }
}