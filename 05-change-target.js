/** @param {NS} ns */
export async function main(ns) {
    // Defines the "target server" to hack.
    var serv = ns.args[0];
    var target = ns.args[1];
    const ram = ns.getServerMaxRam(serv)
    ns.tprint("ram = " + ram);
    let thd = (Math.floor(ram / 2.4)); // defines based on ram
    ns.tprint("thd = " + thd);
    ns.tprint(serv + " changing target to " + target);

    ns.killall(serv);
    ns.exec("mid-hack.js", serv, thd, target);
}