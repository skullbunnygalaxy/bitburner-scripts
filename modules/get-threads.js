/** @param {NS} ns */
// Used in multiple scripts. Need to turn into module with named function to call in those scripts instead.
export function getThreads(ns, serv) {
    // take server, and opt thread count, as args
    const ram = ns.getServerMaxRam(serv)
    // ns.tprint("ram = " + ram);
    let thd;
    // auto populate thd with relevant number
    if (ns.args[2] !== undefined) {
        thd = ns.args[2]; // defines with optional argument
    } else {
        thd = (Math.floor(ram / 2.6)); // defines based on ram
        //ns.tprint("thd = " + thd);
    }
    return thd;
}