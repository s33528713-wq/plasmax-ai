
const faults = {

  "P1_OUTSIDE": {
    title: "PROCESS PRESSURE P1 FAULT OUTSIDE",
    cause: "Vacuum leakage from outside bottle area.",
    solution: "Check reactor seals, bottle seating, pressure sensor, solenoid valve and vacuum leakage."
  },

  "P2_INSIDE": {
    title: "PROCESS PRESSURE P2 INSIDE",
    cause: "Inside pressure out of recipe range.",
    solution: "Check mouth seal, gas lance seal, Baratron gauge, DN60/DN40 valves and vacuum pump."
  },

  "P3_INSIDE": {
    title: "PROCESS PRESSURE P3 INSIDE",
    cause: "Process pressure unstable.",
    solution: "Inspect pressure sensor, valves and vacuum system."
  },

  "AD_FAULT": {
    title: "AD Fault",
    cause: "Pressure not matching recipe.",
    solution: "Inspect reactor pressure, vacuum system and sensor calibration."
  },

  "BA_FAULT": {
    title: "BA Fault",
    cause: "Barrier process pressure abnormal.",
    solution: "Check recipe, pressure controller and gas flow."
  },

  "GAS_VALVE_V19XX": {
    title: "Gas Valve V19XX Fault",
    cause: "Valve switching failure.",
    solution: "Check wiring, O-ring, spring, pneumatic supply and reed switch."
  },

  "REACTOR_NOT_CLOSED": {
    title: "Reactor Not Closed",
    cause: "Bottle or reactor mechanism problem.",
    solution: "Check bottle position, gripper, gas lance and reactor movement."
  },

  "TURNING_WHEEL": {
    title: "Turning Wheel Fault",
    cause: "Mechanical jam or clutch trip.",
    solution: "Inspect gripper, bearings and clutch."
  },

  "PHOTO_EYE": {
    title: "Infeed Photo Eye Fault",
    cause: "Sensor cannot detect bottle.",
    solution: "Clean photo eye, reflector and check wiring."
  },

  "MAIN_AIR": {
    title: "Main Air Supply Fault",
    cause: "Air pressure below required value.",
    solution: "Check FRL, regulator, leakage and pressure gauge."
  },

  "PRINTER": {
    title: "Printer Not Ready",
    cause: "Printer communication or hardware issue.",
    solution: "Check printer status, communication cable and HMI."
  },

  "COOLING": {
    title: "Cooling Fault",
    cause: "Cooling water problem.",
    solution: "Check water pump, flow, temperature and filters."
  },

  "CHILLER": {
    title: "Chiller Fault",
    cause: "Chiller alarm or low cooling capacity.",
    solution: "Check chiller alarm, water level and temperature."
  }, 
"VACUUM_FAULT": {
  title: "Vacuum Fault",
  cause: "Vacuum pressure is too low.",
  solution: "Check vacuum pump, leakage and vacuum valve."
},

"SENSOR_FAULT": {
  title: "Sensor Fault",
  cause: "Sensor is not responding.",
  solution: "Check sensor wiring and replace if necessary."
},

"GAS_PRESSURE": {
  title: "Gas Pressure Fault",
  cause: "Gas pressure is below the limit.",
  solution: "Check gas cylinder, regulator and gas line."
},

"PLC_ERROR": {
  title: "PLC Communication Error",
  cause: "PLC communication failed.",
  solution: "Check Ethernet cable and PLC power."
},

"EMERGENCY_STOP": {
  title: "Emergency Stop Active",
  cause: "Emergency stop button is pressed.",
  solution: "Release the emergency stop and reset the machine."
}
};
