from app import app


@app.route("/")
def index():
    return "Hello world - I'm a flask api"


@app.route("/documentation")
def documentation():
    return "Hello world - I'm a flask api"
