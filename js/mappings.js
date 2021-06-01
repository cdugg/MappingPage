var mappings = {"A" : ["B"], 
"B" : ["A", "C"], 
"C" : ["B", "D", "U"], 
"D" : ["C", "E"], 
"E" : ["D", "F", "G"], 
"F" : ["E", "G", "H", "X"], 
"G" : ["F", "H", "E", "I"], 
"H" : ["G", "F", "X", "I"], 
"I" : ["H", "J", "G"], 
"J" : ["I", "K"], 
"K" : ["J", "L"], 
"L" : ["K", "M", "Q"], 
"M" : ["L", "N", "Q"], 
"N" : ["M", "O"], 
"O" : ["N", "P"], 
"P" : ["O"], 
"Q" : ["L", "M", "S"], 
"R" : ["S"], 
"S" : ["Q", "R", "T"], 
"T" : ["S", "U", "V", "Y"], 
"U" : ["C", "T"], 
"V" : ["T", "W", "X"], 
"W" : ["V", "X"], 
"X" : ["F", "H", "V", "W"], 
"Y" : ["T", "Z"], 
"Z" : ["Y", "A1", "D1", "L1"], 
"A1" : ["Z", "B1", "E5"], 
"B1" : ["A1", "C1"], 
"C1" : ["B1", "D1", "E1", "F1"], 
"D1" : ["Z", "C1"], 
"E1" : ["C1", "F1"], 
"F1" : ["C1", "E1", "G1"], 
"G1" : ["F1", "H1"], 
"H1" : ["G1", "I1"], 
"I1" : ["H1", "J1", "G5"], 
"J1" : ["I1", "K1"], 
"K1" : ["J1"], 
"L1" : ["Z", "M1"], 
"M1" : ["L1", "N1"], 
"N1" : ["M1", "O1"], 
"O1" : ["N1", "P1"], 
"P1" : ["O1", "Q1"], 
"Q1" : ["P1", "R1"], 
"R1" : ["Q1", "S1"], 
"S1" : ["R1", "T1", "W1", "A2", "B2"], 
"T1" : ["S1", "U1"], 
"U1" : ["T1", "V1", "X1"], 
"V1" : ["U1", "W1", "Z1"], 
"W1" : ["S1", "V1"], 
"X1" : ["U1", "Y1", "G2"], 
"Y1" : ["Z1", "X1", "F2"], 
"Z1" : ["V1", "Y1", "A2", "C2"], 
"A2" : ["S1", "Z1", "B2"], 
"B2" : ["A2", "C2", "O4", "S1"], 
"C2" : ["Z1", "D2", "B2"], 
"D2" : ["C2", "E2", "B4"], 
"E2" : ["D2", "F2", "I2"], 
"F2" : ["Y1", "E2"], 
"G2" : ["X1", "H2"], 
"H2" : ["G2", "I2", "M2"], 
"I2" : ["E2", "H2", "J2", "Q3"], 
"J2" : ["I2", "K2"], 
"K2" : ["J2", "L2", "P2", "O2"], 
"L2" : ["K2", "M2", "N2", "O2"], 
"M2" : ["H2", "L2"], 
"N2" : ["L2", "O2"], 
"O2" : ["K2", "L2", "N2", "P2"], 
"P2" : ["K2", "O2", "Q2", "P3"], 
"Q2" : ["P2", "R2", "U2"], 
"R2" : ["Q2", "S2"], 
"S2" : ["R2", "T2"], 
"T2" : ["S2", "U2", "V2"], 
"U2" : ["Q2", "T2"], 
"V2" : ["T2", "W2"], 
"W2" : ["V2", "X2", "F3"], 
"X2" : ["W2", "Y2"], 
"Y2" : ["X2", "Z2"], 
"Z2" : ["Y2", "A3", "C3"], 
"A3" : ["Z2", "B3"], 
"B3" : ["A3", "C3", "D3", "J5"], 
"C3" : ["Z2", "B3"], 
"D3" : ["B3", "E3", "K3"], 
"E3" : ["D3", "F3", "G3"], 
"F3" : ["W2", "E3"], 
"G3" : ["E3", "H3"], 
"H3" : ["G3", "I3", "O3"], 
"I3" : ["H3", "J3", "K3", "L3"], 
"J3" : ["I3", "K3", "L3"], 
"K3" : ["I3", "J3", "D3"], 
"L3" : ["I3", "J3", "M3"], 
"M3" : ["L3", "S3", "T3"], 
"N3" : ["S3", "O3", "Q3"], 
"O3" : ["N3", "P3", "H3"], 
"P3" : ["P2", "O3"], 
"Q3" : ["I2", "R3", "N3"], 
"R3" : ["W3", "Q3", "S3"], 
"S3" : ["R3", "M3", "N3"], 
"T3" : ["U3", "M3"], 
"U3" : ["T3", "V3"], 
"V3" : ["X3", "Y3", "H4", "U3"], 
"W3" : ["R3", "X3", "Z3"], 
"X3" : ["V3", "W3", "Y3"], 
"Y3" : ["V3", "X3", "C4", "D4"], 
"Z3" : ["A4", "W3"], 
"A4" : ["Z3", "B4", "C4"], 
"B4" : ["D2", "A4"], 
"C4" : ["Y3", "A4", "D4"], 
"D4" : ["Y3", "C4", "E4"], 
"E4" : ["K4", "J4", "D4", "F4"], 
"F4" : ["I4", "E4", "G4", "Z4"], 
"G4" : ["F4", "H4"], 
"H4" : ["G4", "V3"], 
"I4" : ["M4", "F4"], 
"J4" : ["L4", "E4"], 
"K4" : ["L4", "E4"], 
"L4" : ["N4", "M4", "J4", "K4"], 
"M4" : ["Q4", "R4", "L4", "I4"], 
"N4" : ["P4", "O4", "L4"], 
"O4" : ["B2", "N4"], 
"P4" : ["Q4", "N4"], 
"Q4" : ["R4", "V4", "M4", "P4", "S4"], 
"R4" : ["Q4", "M4", "S4", "V4"], 
"S4" : ["T4", "R4", "Q4", "X4"], 
"T4" : ["U4", "S4"], 
"U4" : ["T4", "V4", "W4", "D5"], 
"V4" : ["Q4", "R4", "U4"], 
"W4" : ["U4"], 
"X4" : ["S4", "Y4", "A5"], 
"Y4" : ["X4", "Z4"], 
"Z4" : ["F4", "Y4"], 
"A5" : ["X4", "B5"], 
"B5" : ["A5", "C5"], 
"C5" : ["B5", "D5", "F5"], 
"D5" : ["U4", "E5", "C5"], 
"E5" : ["A1", "D5"], 
"F5" : ["C5", "G5", "H5"], 
"G5" : ["I1", "F5"], 
"H5" : ["F5", "I5"], 
"I5" : ["H5", "K5", "J5"], 
"J5" : ["B3", "I5"], 
"K5" : ["I5", "L5"], 
"L5" : ["K5", "M5"], 
"M5" : ["L5", "N5", "A6"], 
"N5" : ["M5", "O5"], 
"O5" : ["N5", "P5"], 
"P5" : ["O5", "Q5"], 
"Q5" : ["P5", "R5", "U5"], 
"R5" : ["Q5", "S5"], 
"S5" : ["R5", "T5"], 
"T5" : ["S5"], 
"U5" : ["Q5", "V5", "E6"], 
"V5" : ["U5", "W5", "E6"], 
"W5" : ["V5", "X5"], 
"X5" : ["W5", "Y5"], 
"Y5" : ["X5", "Z5"], 
"Z5" : ["Y5", "A6"], 
"A6" : ["M5", "Z5", "B6", "C6"], 
"B6" : ["A6", "C6"], 
"C6" : ["A6", "B6", "D6"], 
"D6" : ["C6", "E6"], 
"E6" : ["U5", "V5", "D6"]
};
