
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
}, 
  ,
{
    keywords: ["vacuum leak", "leakage", "seal"],
    title: "Vacuum Leakage",
    cause: "Vacuum system leakage detected.",
    solution: "Inspect reactor seals, bottle seal, vacuum hoses and fittings."
},

{
    keywords: ["pump", "vacuum pump"],
    title: "Vacuum Pump Fault",
    cause: "Vacuum pump performance is low.",
    solution: "Check pump oil, filters, exhaust, motor and service condition."
},

{
    keywords: ["baratron", "pressure sensor"],
    title: "Baratron Sensor Fault",
    cause: "Pressure sensor reading unstable.",
    solution: "Check Baratron gauge, wiring and sensor calibration."
},

{
    keywords: ["gas flow", "gas"],
    title: "Gas Flow Fault",
    cause: "Gas flow not reaching required value.",
    solution: "Check gas regulator, gas valve, hose and pressure."
},

{
    keywords: ["water flow", "cooling water"],
    title: "Cooling Water Flow Fault",
    cause: "Cooling water flow is low.",
    solution: "Check water pump, filter, valves and cooling line."
},

{
    keywords: ["mouth seal"],
    title: "Mouth Seal Leakage",
    cause: "Bottle mouth seal damaged.",
    solution: "Replace mouth seal and inspect seal alignment."
}, 
    
{
    keywords: ["dn40", "valve dn40"],
    title: "DN40 Valve Fault",
    cause: "DN40 valve not operating correctly.",
    solution: "Check pneumatic air, solenoid coil, valve movement and wiring."
},

{
    keywords: ["dn60", "valve dn60"],
    title: "DN60 Valve Fault",
    cause: "DN60 valve switching failure.",
    solution: "Inspect air supply, valve seal, actuator and reed switch."
},

{
    keywords: ["gas lance", "lance"],
    title: "Gas Lance Fault",
    cause: "Gas lance not sealing or moving correctly.",
    solution: "Check gas lance cylinder, seal, alignment and sensor."
},

{
    keywords: ["gripper", "bottle gripper"],
    title: "Bottle Gripper Fault",
    cause: "Bottle gripper not holding bottle correctly.",
    solution: "Check gripper cylinder, air pressure and mechanical parts."
},

{
    keywords: ["door", "safety door"],
    title: "Safety Door Fault",
    cause: "Safety door open or sensor fault.",
    solution: "Close the door and inspect the safety switch and wiring."
},

{
    keywords: ["emergency", "e-stop"],
    title: "Emergency Stop Active",
    cause: "Emergency stop circuit activated.",
    solution: "Release the E-Stop button and verify the safety circuit."
}, 
  
{
    keywords: ["vacuum chamber", "chamber leak"],
    title: "Vacuum Chamber Leakage",
    cause: "Vacuum chamber leakage detected.",
    solution: "Check chamber O-ring, door seal, vacuum hose and fittings."
},

{
    keywords: ["pressure sensor", "sensor error"],
    title: "Pressure Sensor Fault",
    cause: "Pressure sensor reading is unstable.",
    solution: "Inspect sensor wiring, calibration and replace if necessary."
},

{
    keywords: ["air cylinder", "cylinder"],
    title: "Air Cylinder Fault",
    cause: "Cylinder not moving correctly.",
    solution: "Check pneumatic pressure, cylinder seal and solenoid valve."
},

{
    keywords: ["solenoid", "solenoid valve"],
    title: "Solenoid Valve Fault",
    cause: "Valve not switching.",
    solution: "Check coil voltage, wiring and valve movement."
},

{
    keywords: ["vacuum hose", "hose leak"],
    title: "Vacuum Hose Leakage",
    cause: "Vacuum hose damaged or loose.",
    solution: "Replace hose and tighten all vacuum fittings."
}  
];
