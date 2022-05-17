import calendar

print ('Welcome to the Calendar\n')

year = int(input("Please, enter year: "))
month = int(input("Please, enter month: "))

print(calendar.month(year, month))

print("Good luck human!")