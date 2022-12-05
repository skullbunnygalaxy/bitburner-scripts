/** @param {NS} ns */
export async function main(ns) {
    // Array of personal servers
    var pservers = ["pserv-0",
        "pserv-1",
        "pserv-2",
        "pserv-3",
        "pserv-4",
        "pserv-5",
        "pserv-6",
        "pserv-7",
        "pserv-8",
        "pserv-9",
        "pserv-10",
        "pserv-11",
        "pserv-12",
        "pserv-13",
        "pserv-14",
        "pserv-15",
        "pserv-16",
        "pserv-17",
        "pserv-18",
        "pserv-19",
        "pserv-20",
        "pserv-21",
        "pserv-22",
        "pserv-23",
        "pserv-24"];


    // kill current script and run new one
    for (var i = 0; i < pservers.length; ++i) {
        var serv = pservers[i];

        const ram = ns.getServerMaxRam(serv)
        ns.tprint("ram = " + ram);
        let thd;

        // auto populate thd with relevant number
        if (ns.args[1] !== undefined) {
            thd = ns.args[1]; // defines with optional argument
        } else {
            thd = (Math.floor(ram / 2.6)); // defines based on ram
            ns.tprint("thd = " + thd);
        }

        ns.scp("mid-hack.js", serv);
        ns.killall(serv);
        ns.exec("mid-hack.js", serv, thd);
    }

}