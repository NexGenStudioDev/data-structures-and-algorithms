noOfRow = 4
noOfCol = 4

str = ""

for i in range(noOfRow):
    for j in range(noOfCol):
       
        if i == 0 or i == noOfRow - 1 or j == 0 or j == noOfCol - 1:
            str += '*'
        else:
            str += ' '  # Add space for the interior
    
    str += '\n'  # Newline after each row

print(str)