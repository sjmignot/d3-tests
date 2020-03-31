from flask import Flask, render_template
import pandas as pd
import json

app = Flask(__name__)
DATA_PATH = "data/"


@app.route("/posts/<name>/")
def index(name):
    df = pd.read_csv(f'{DATA_PATH}{name}.csv')
    chart_data = df.to_dict(orient='records')
    chart_data = json.dumps(chart_data, indent=2)
    data = {'data': chart_data}
    return render_template("project.html", data=data)


if __name__ == "__main__":
    app.run(debug=True)
