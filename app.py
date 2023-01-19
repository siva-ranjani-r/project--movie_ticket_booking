from flask import Flask,render_template,url_for,redirect,request
import sqlite3 as sql

app=Flask("__name__")


@app.route("/",methods=["POST","GET"])
def fun():
    if request.form.get("username")!=None:
        Username=request.form.get("Username")
        Mobile_number=request.form.get("Mobile_number")
        password=request.form.get("password")

        conn=sql.connect("data.db")
        cur=conn.cursor()

        cur.execute("select username from data1")
        data=cur.fetchall()

        l=[]
        for i in data:
            l.append(i[0])

        for i in l:
            if i==Username:
                return redirect(url_for("signUp"))

        cur.execute("insert into data1 (Username,Mobile_number,password) values (?,?,?)",(Username,Mobile_number,password))
        conn.commit()

    return render_template("login.html")

@app.route("/signUp",methods=['POST','GET'])
def signUp():
    return render_template("signUp.html")

@app.route("/logIn",methods=['POST','GET'])
def logIn():
    return render_template("login.html")

@app.route("/home",methods=['POST','GET'])
def fun1():
    return render_template("index.html")

if __name__=="__main__":
    app.run(debug=True)