const fs = require("fs")
const si = require("systeminformation");
const os = require("os")

var sysInfo = "";


Promise.all([
    si.cpu(),
    si.graphics(),
    si.mem(),
    si.osInfo()
]).then(([cpu, gpu, mem, os]) => {
    sysInfo += `CPU: ${cpu.manufacturer} ${cpu.brand} ${cpu.speed}GHz ${cpu.physicalCores} cores; `;
    sysInfo += `GPU: ${gpu.controllers[0].model} VRAM ${gpu.controllers[0].vram}MB; `;
    sysInfo += "RAM: " + Math.round(mem.total / 1073741824) + "GB; ";
    sysInfo += `OS: ${os.platform}, kernel: ${os.kernel};`
    console.log(sysInfo)
    fs.writeFileSync("sysinfo.txt", sysInfo)
})