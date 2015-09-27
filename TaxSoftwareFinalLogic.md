**Form 1040NR-EZ Tax Software Logic:**

**Reference:**

IRS Form 1040NR-EZ Instructions

http://www.irs.gov/pub/irs-pdf/i1040nre.pdf

**Form 1040NR-EZ Final Logic**

Line 1: Single

Line 2: Married

Line 3: Round (Sum(W2 Box 8) + Sum(W2 Box 1) - Line 6)

Line 4: Round (Sum (1099G Box 2))

Line 5: Round (Sum (1042S Box 2))

Line 6: Tax Treaty Function

Line 7: Line 3 + Line 4 + Line 5

Line 8: 0

Line 9: Student Interest Function

Line 10: Line 7 - Line 9

Line 11: itemized\_deductions Function

Line 12: Line 10 - Line 11

Line 13: 3500

Line 14: Line 12 - Line 13

Line 15: Calculate Tax Function

Line 16: 0

Line 17: Line 15

Line 18: Round (Sum (W2 Box 2) + Sum (1042S Box 2) + Sum (1099G Box 4))

Line 19: 0

Line 20: 0

Line 21: Line 18

Line 22: Line 21 - Line 17

Line 25: Line 17 - Line 21