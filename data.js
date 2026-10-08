// =====================================================================
//  JOURNEY DATA  -  this is the only file you ever need to edit
// =====================================================================
//
//  HOW TO ADD AN ENTRY
//    1. Copy the last line that starts with  { date:
//    2. Paste it on a new line right below it (but ABOVE the  ];  at the bottom)
//    3. Change the date, and paste in the code from the final screen
//    Keep the quotes " ", the curly braces { }, and the comma at the end of the line.
//
//  HOW THE CODE IS READ
//    Each character is one column, left to right, in the same order as the survey:
//      1 nihilism   2 altruism   3 happiness   4 productivity   5 purpose   6 theism   7 overall
//      8 arrow down   9 arrow down-right   10 arrow right   11 arrow up   (1 = yes, 0 = no)
//    A "!" means 10.
//    Older entries with no arrow answers can just be 7 characters - the arrow cells stay blank.
//
//  Entry numbers are automatic: the first line is "entry number 1", the second is "entry number 2", etc.
//  The date only shows up when you hover over the entry number. Any format works ("2026-09-25", "sept 25", ...).
//
//  The three lines below are EXAMPLES - delete them and put your own.
// =====================================================================

const journalEntries = [

  { date: "2026-09-28", code: "79363551010#ffffff", notes: "first one" },
  { date: "2026-09-29", code: "88865570001#ffffff", notes: "horrible 1:3 study ratio before practice but stayed up studying until one" },
  { date: "2026-09-30", code: "76646341110#ffffff", notes: "" },
  { date: "2026-10-04", code: "77676671010#ffffff", notes: "45 pages ocad + 20 pages apush" },
  { date: "2026-10-05", code: "98226251110#ffffff", notes: "" },
  { date: "2026-10-06", code: "67444541010#ffffff", notes: "" },
];
