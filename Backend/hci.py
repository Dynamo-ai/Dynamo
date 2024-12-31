from tkinter import *
from tkinter import ttk
import webbrowser
root = Tk()
root.title("Sign-up")
root.config(bg="grey")

# Creating Menubar
menubar = Menu(root)

def fun():  
    webbrowser.open("https://www.javatpoint.com/python-tkinter-button")

# Adding File Menu and commands
file = Menu(menubar, tearoff = 0)
menubar.add_cascade(label ='File', menu = file)
file.add_command(label ='New File', command = None)
file.add_command(label ='Open...', command = None)
file.add_command(label ='Save', command = None)
file.add_separator()
file.add_command(label ='Exit', command = root.destroy)

# Adding Edit Menu and commands
edit = Menu(menubar, tearoff = 0)
menubar.add_cascade(label ='Edit', menu = edit)
edit.add_command(label ='Cut', command = None)
edit.add_command(label ='Copy', command = None)
edit.add_command(label ='Paste', command = None)
edit.add_command(label ='Select All', command = None)
edit.add_separator()
edit.add_command(label ='Find...', command = None)
edit.add_command(label ='Find again', command = None)

# Adding Help Menu
help_ = Menu(menubar, tearoff = 0)
menubar.add_cascade(label ='Help', menu = help_)
help_.add_command(label ='Tk Help', command = None)
help_.add_command(label ='Demo', command = None)
help_.add_separator()
help_.add_command(label ='About Tk', command = None)

# display Menu
root.config(menu = menubar)

Label(root, text="Name", fg="blue").grid(row=0, column=0,  pady=10)
Entry(root).grid(row=0, column=1)
Label(root, text="Email", fg="blue").grid(row=1, column=0,  pady=10)
Entry(root, width= 30).grid(row=1, column=1,  pady=10)
Label(root, text="Gender", fg="blue").grid(row=2, column=0,  pady=10)

v=IntVar()
Radiobutton(root, text="Female", activebackground="pink", fg="purple", variable=v, value=1).grid(row=2, column=1)
Radiobutton(root, text="Male", activebackground="lightblue", fg="purple", variable=v, value=2).grid(row=2, column=2)
Label(root, text="Languages familiar with", fg="blue").grid(row=3, column=0, pady=5)
v1=IntVar()
Checkbutton(root, text="C", activebackground="orange", fg="purple", variable=v1).grid(row=4, column=0, pady=5)
v2=IntVar()
Checkbutton(root, text="C++", activebackground="orange", fg="purple", variable=v2).grid(row=4, column=1, pady=5)
v3=IntVar()
Checkbutton(root, text="Java", activebackground="orange", fg="purple", variable=v3).grid(row=5, column=0, pady=5)
v4=IntVar()
Checkbutton(root, text="Python", activebackground="orange", fg="purple", variable=v4).grid(row=5, column=1, pady=5)
Label(root, text="Country", fg="blue").grid(row=6, column=0)
ttk.Combobox(root, values=["select","India", "Spain", "France", "LA", "Israel","Iran","Afghanistan","Palestine"]).grid(row=6, column=1, pady=10)

Label(root, text="Password", fg="blue", font="bold").grid(row=7, column=0,  pady=10)
Entry(root, show="•").grid(row=7, column=1,  pady=10)
Label(root, text="Confirm Password", fg="blue").grid(row=8, column=0,  pady=10)
Entry(root, show="•").grid(row=8, column=1,  pady=10)
Button(root, text="Submit", fg="green", font="bold", command=fun).grid(row=9, column=1,  pady=10)
root.mainloop()