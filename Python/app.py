#Libraries
# import qrcode
# import mysql.connector
from flask import Flask, render_template

#Run Flask
app = Flask(__name__, template_folder='../HTML')
@app.route("/")
def home():
    return render_template("Workbench.html")

if __name__ == "__main__":
    app.run(debug=True)

# #Python Connect to mysql Database
# cnx = mysql.connector.connect(user='root', password='Tdcgid2021!',
#                               host='127.0.0.1',
#                               database='qrcode')
# cursor = cnx.cursor()
# query = ("SELECT * FROM qrcode.ingredientslist")                             
# cursor.execute(query)
# for (Ingredient2) in cursor:
#   dataStored = Ingredient2
# cursor.close()
# cnx.close()

<<<<<<< HEAD
# #Create QR Code
# website = "https://google.com"
# qr = qrcode.QRCode(
#     version=1,
#     error_correction=qrcode.constants.ERROR_CORRECT_L,
#     box_size=10,
#     border=4,
# )
# qr.add_data(website)
# qr.make(fit=True)
# img = qr.make_image(fill='black', back_color='white')
# img.save("Test.png")
=======
#Create QR Code
website = "https://google.com"
qr = qrcode.QRCode(
    version=1,
    error_correction=qrcode.constants.ERROR_CORRECT_L,
    box_size=10,
    border=4,
)
qr.add_data(website)
qr.make(fit=True)
img = qr.make_image(fill='black', back_color='white')
img.save("Test.png")

#Test Push
>>>>>>> 97d46aa34cd35d171fc7b14335f33139e4dc77db
