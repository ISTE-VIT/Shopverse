from flask import Flask, request,jsonify
from match import *

app = Flask(__name__)
@app.route("/", methods=['POST'])
def home():
    f = request.json['url']
    out=call(f)
    response={}
    response['name1'],response['name2']=out[0],out[1]
    return jsonify(response)

if __name__=="__main__":
    app.run(debug=True)