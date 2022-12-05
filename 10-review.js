/** @param {NS} ns */
export async function main(ns) {
    var phacklevel = ns.getHackingLevel();
    let hackable = [];
    let nothackable = [];
    // Defines the "host" to scan for connections.
    var host;
    if (ns.args[0] !== undefined) {
        host = ns.args[0]; // defines with optional argument
    } else {
        host = "home";
    }
    // ns.tprint("host = " + host);
    const conservers = ns.scan(host);
    const secondtier = [];

    // count number of conservers, 
    // then for each one, check hack level and compare to phacklevel
    for (var i = 0; i < conservers.length; i++) {
        let current = conservers[i];
        var level = ns.getServerRequiredHackingLevel(current);
        // ns.tprint("Server: " + current + " | Hack level: " + level);
        if (level < phacklevel) {
            hackable.push(current);
            let checkNextHop = ns.scan(current)
            for (var h = 0; h < checkNextHop.length; h++) {
                if (checkNextHop[h] != "home" && checkNextHop[h] != host) {
                    secondtier.push(checkNextHop[h]);
                }
            }
        } else {
            nothackable.push(current);
        }
    }
    ns.tprint("Hackable: " + hackable);
    ns.tprint("Two hops down: " + secondtier);
    ns.tprint("Not Hackable: " + nothackable);
}