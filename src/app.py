from flask import Flask, jsonify, request
import json
from flask_jwt_extended import(
    JWTManager, jwt_required, create_access_token,
    get_jwt_identity
)
from flask_bcrypt import Bcrypt
from flask_migrate import Migrate
from models import db, Person, User

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = "postgresql://postgres:123.admin@localhost/ejemplo"
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['JWT_SECRET_KEY'] = 'KS+.:GMk^+ gO,5.#y6c%?SmYE^5+_2P ao)Etk4AA'
jwt = JWTManager(app)
bcrypt = Bcrypt(app)
MIGRATE = Migrate(app, db)
db.init_app(app)



@app.route("/persons", methods = ["GET"])
def getPersons():
  persons = Person.query.all()
  persons_json = list(map(lambda item: item.serialize(),persons))

  return jsonify(persons_json)


@app.route("/persons", methods = ["POST"])
def postPersons():
  newPerson = json.loads(request.data)
  person = Person(name=newPerson["name"], lastname=newPerson["lastname"])
  db.session.add(person)

  return jsonify(list(map(lambda item: item.serialize(), Person.query.all())))


@app.route("/login", methods=["POST"])
def login():
  if not request.is_json:
    return jsonify({"msge": "Missing Json in request"}),400
  email = request.json.get("email",None)
  password = request.json.get("password", None)
  if not email:
    return jsonify({"msge": "Misssing email parameter"}),400
  if not password:
    return({"msge":"Missing password parameter"}),400

  user = User.query.filter(email=email).first()
  if user is None:
    return jsonify({"msge": "User doesnt exist"}),400

  if user.password!=password:
    return jsonify({"msge": "password dontt match"}),400 
  access_token = create_access_token(identity=email)
  return jsonify(access_token=access_token),200



@app.route("/users", methods= ["GET"])
def getUsers():
  users = User.query.all()
  users_json = list(map(lambda item: item.serialize(),users))

  return jsonify(users_json)


@app.route("/users", methods = ["POST"])
@jwt_required
def postUsers():

  newUser = json.loads(request.data)
  user = User(email=newUser["email"], password=newUser["password"])
  db.session.add(user)
  db.session.commit()


  return jsonify(list(map(lambda item: item.serialize(), User.query.all())))







if __name__ == '__main__':
  app.run(host='127.0.0.1', port=3245, debug=True)