from datetime import datetime
import os
from flask import Flask, render_template, request, redirect, url_for, send_from_directory, jsonify
from flask_cors import CORS
import pyodbc

app = Flask(__name__)
CORS(app, resources={r'/*': {'origins': '*'}})


cnxn = pyodbc.connect("DRIVER={ODBC Driver 17 for SQL Server};Server=tcp:dbserver-ryanjeroen.database.windows.net,1433;DATABASE=400db;UID=ryanjeroen;PWD=1password!")
cursor = cnxn.cursor()


# Gets HSHD of num
def get_household(num):
    rows = cursor.execute("""
    SELECT HSHD_NUM, BASKET_NUM, PURCHASE, PRODUCT_NUM, SPEND, UNITS, STORE_R, WEEK_NUM, YEAR FROM [400_transactions]
        WHERE HSHD_NUM = ?
    """, num).fetchall()
    out = None
    if len(rows) > 0:
        out = {}
        out["HSHD_NUM"] = num
        out["columns"] = [t[0] for t in rows[0].cursor_description][1:]
        print(out["columns"])
        out["data"] = [list(row)[1:] for row in rows]
    return out

@app.route('/')
def index():
   print('Request for index page received')
   return render_template('index.html')

@app.route('/favicon.ico')
def favicon():
    return send_from_directory(os.path.join(app.root_path, 'static'),
                               'favicon.ico', mimetype='image/vnd.microsoft.icon')

@app.route('/hello', methods=['POST'])
def hello():
   username = request.form.get('username')

   if username:
       print('Request for hello page received with name=%s' % username)
       return render_template('hello.html', username = username)
   else:
       print('Request for hello page received with no name or blank name -- redirecting')
       return redirect(url_for('index'))

@app.route('/data/HSHD/<HSHD_NUM>', methods=['GET'])
def data(HSHD_NUM):
    return jsonify(
        get_household(int(HSHD_NUM))
    )

if __name__ == '__main__':
   app.run()