#Libraries
# import qrcode
# import mysql.connector
from flask import Flask, render_template
import os

#Run Flask
ASSETS_DIR = os.path.dirname(os.path.abspath(__file__))
app = Flask(__name__)

@app.route("/")
def home():
    return render_template("Workbench.html")

if __name__ == "__main__":
    context = ('local.crt', 'local.key')#certificate and key file
    app.run(debug=True, ssl_context='adhoc')

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
