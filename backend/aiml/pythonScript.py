# pythonScript.py
import sys

def square(number):
    try:
        number = float(number)
        result = number ** 2
        return result
    except ValueError:
        return "Invalid input. Please provide a number."

if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("Please provide a number as an argument.")
    else:
        input_number = sys.argv[1]
        result = square(input_number)
        print(result)
