// Custom color coding.
const termColor = {
    cyan: "\u001b[36m",
    violet: "\x1b[38;5;93m",
    purple: "\x1b[38;5;129m",
    orange: "\x1b[38;5;209m",
    green: "\x1b[38;5;48m",
    lime: "\x1b[38;5;82m",
    red: "\x1b[38;5;198m",
    blue: "\x1b[38;5;63m",
    indigo: "\x1b[38;5;25m",
    eggshell: "\x1b[38;5;159m",
    yellow: "\x1b[38;5;229m",
    reset: "\u001b[0m"
};



export { termColor };


/** @param {NS} ns */
export async function main(ns) {
    // color test
    // ns.tprint(((b = "Extra text\n") => { //256 colors foreground
    //     for (let i = 0; i < 256; i++) {
    //         b += "\x1b[38;5;" + i + "m" + ns.nFormat(i, "000");
    //         (i + 1) % 16 == 0 ? b += "\n" : null;
    //     }
    //     return b;
    // })());
    // ns.tprint(((b = "Extra text\n New Line:") => {//256 colors background
    //     for (let i = 0; i < 256; i++) {
    //         b += "\x1b[48;5;" + i + "m" + ns.nFormat(i, "000");
    //         (i + 1) % 16 == 0 ? b += "\n New Line:" : null;
    //     }
    //     return b;
    // })());

    // color test 2
    // (ns).tprintf(blue + "blue text");
    // (ns).tprintf(indigo + "indigo text");
    // (ns).tprintf(violet + "violet text");
    // (ns).tprintf(purple + "purple text");
    // (ns).tprintf(red + "red text");
    // (ns).tprintf(orange + "orange text");
    // (ns).tprintf(yellow + "yellow text");
    // (ns).tprintf(green + "green text");
    // (ns).tprintf(lime + "lime text");
    // (ns).tprintf(cyan + "cyan text");
    // (ns).tprintf(eggshell + "eggshell text");
    
}