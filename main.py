from flask import Flask, render_template, request
import bardapi
import os

app = Flask(__name__)

@app.route('/', methods=['GET', 'POST'])
def index():
    if request.method == 'POST':
        platform = request.form['platform']
        name = request.form['name']
        description = request.form['description']
        role = request.form['role']
        price = request.form['price']
        experience = request.form['experience']
        pastwork = request.form['pastwork']
        portfolio = request.form['portfolio']
        good_fit = request.form['good_fit']
        words = request.form['words']
    
        user_input = f"{description} I am going to apply for this job. write me an attractive proposal for {platform} in about {words} with given details. 1) {name} 2) Role {role} 3)  price {price} 4) I have {experience} Years of experience in this field. 5) Attached Past works {pastwork} 6) link for the portfolio {portfolio}. I am good fit for this job because {good_fit}. Write me an attactive proposal with this details. Write it about 150 words. End with strong CTA"
        # Set your __Secure-1PSID value to key
        os.environ['_BARD_API_KEY'] = "WgiIjK3kzAwrmzNfUFuZQQeukkV00Tjyy4vAXWF6OaSEoTaX_jdKDb-l-8g08N0Ns7YebA."

        # Send an API request and get a response.
        response = bardapi.core.Bard().get_answer(user_input)
        content = response['content']

        return render_template('index.html', content=content)

    return render_template('index.html')

if __name__ == '__main__':
    app.run(debug=True)
