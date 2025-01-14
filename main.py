from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/quadrants')
def quadrants():
    return render_template('quadrants.html')

@app.route('/user_stories')
def user_stories():
    return render_template('user_stories.html')

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)