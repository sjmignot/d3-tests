from flask import Flask, render_template
import pandas as pd
import json

app = Flask(__name__)
DATA_PATH = "static/data/"

@app.route("/project/<name>/")
def index(name):
    return render_template("project.html", name=name)

if __name__ == "__main__":
    app.run(debug=True)
