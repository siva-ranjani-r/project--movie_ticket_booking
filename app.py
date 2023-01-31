from flask import Flask,render_template,url_for,redirect,request
import sqlite3 as sql

app=Flask(__name__)

@app.route("/",methods=["post","get"])
def logIn():
    if request.form.get("username")!=None:
        username=request.form.get("username")
        mobile=request.form.get("mobile")
        password=request.form.get("password")

        conn=sql.connect("data.db")
        cur=conn.cursor()

        cur.execute("select mobile from user")
        data=cur.fetchall()

        l=[]
        for i in data:
            l.append(i[0])

        for i in l:
            if i==mobile:
                return redirect(url_for("signUp"))
        cur.execute("insert into user (username,mobile,password) values (?,?,?)",(username,mobile,password))
        conn.commit()

    return render_template("login.html")

@app.route("/signup")
def signUp():
    return render_template("signup.html")

@app.route("/home",methods=["post","get"])
def home():
    username=request.form.get("username")
    mobile=request.form.get("mobile")
    password=request.form.get("password")
    conn=sql.connect("data.db")
    cur=conn.cursor()
    cur.execute("select username,mobile,password from user")
    data=cur.fetchall()

    for i in data:
        if i[0]==username and i[1]==mobile and i[2]==password:
            conn=sql.connect("data.db")
            cur=conn.cursor()
            cur.execute("delete from loginuser")
            conn.commit()
            cur.execute("insert into loginuser (mobile) values (?)",(mobile,))
            conn.commit()
            return render_template("index.html",mobile=mobile)
    else:
        return redirect(url_for("logIn"))

if __name__=="__main__":
    app.run(debug=True)