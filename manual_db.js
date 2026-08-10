
const manualDB = [

{
    keywords: ["vacuum", "p1", "pressure"],
    title: "PROCESS PRESSURE P1 FAULT OUTSIDE",
    cause: "Vacuum leakage or pressure outside recipe range.",
    solution: "Check bottle seating, reactor seal, pressure sensor, vacuum valve and leakage."
},

{
    keywords: ["p2", "inside pressure"],
    title: "PROCESS PRESSURE P2 INSIDE",
    cause: "Inside pressure not reaching recipe value.",
    solution: "Check mouth seal, gas lance seal, Baratron gauge and vacuum pump."
},

{
    keywords: ["cooling", "water"],
    title: "Cooling Fault",
    cause: "Cooling water flow or temperature abnormal.",
    solution: "Check water pump, filter, chiller and cooling line."
},

{
    keywords: ["reactor", "not closed"],
    title: "Reactor Not Closed",
    cause: "Reactor failed to close completely.",
    solution: "Check bottle position, gripper cylinder and limit sensor."
},

{
    keywords: ["printer"],
    title: "Printer Not Ready",
    cause: "Printer communication failure.",
    solution: "Check printer power, cable and communication."
}, 
    
,
{
    keywords: ["gas valve", "v19xx", "valve"],
    title: "Gas Valve V19XX Fault",
    cause: "Gas valve switching failure.",
    solution: "Check pneumatic air supply, valve coil, wiring, O-ring and reed switch."
},

{
    keywords: ["main air", "air pressure", "compressed air"],
    title: "Main Air Supply Fault",
    cause: "Compressed air pressure below operating limit.",
    solution: "Check compressor, FRL unit, regulator, pressure gauge and air leakage."
},

{
    keywords: ["turning wheel", "wheel", "rotation"],
    title: "Turning Wheel Fault",
    cause: "Turning wheel movement abnormal.",
    solution: "Check motor, clutch, sensor, bearing and mechanical blockage."
},

{
    keywords: ["photo eye", "sensor", "bottle detect"],
    title: "Infeed Photo Eye Fault",
    cause: "Bottle detection sensor failed.",
    solution: "Clean photo eye, check reflector, alignment and sensor wiring."
},

{
    keywords: ["ad fault", "pressure"],
    title: "AD Fault",
    cause: "Process pressure does not match recipe.",
    solution: "Check vacuum pressure, reactor seal and pressure sensor."
},

{
    keywords: ["ba fault", "barrier"],
    title: "BA Fault",
    cause: "Barrier process pressure abnormal.",
    solution: "Check recipe, gas pressure and controller settings."
}
];
