from flask import Flask
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route("/main")
def main():
    return {'message':"The server is working"}

if __name__ == "__main__":
    # Executing will make the API available in
    # localhost:5000/main
    app.run(debug=True)
