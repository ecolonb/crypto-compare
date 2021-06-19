from app import app


@app.route("/api/hello")
def api_index():
    return "Hello world - I'm a flask api"


@app.route("/api/documentation")
def api_documentation():
    return "Hello world - I'm a flask api"
