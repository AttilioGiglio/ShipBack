from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

#Me traje la clase person y user del ejemplo visto en el curso por si se utiliza para generar el log in.
class Petition(db.Model):
     id = db.Column(db.Integer, primary_key=True)
     email = db.Column(db.String(10), nullable=False)
     phone_number = db.Column(db.Integer, nullable=False)
     description = db.Column(db.String(50), nullable=True)
     change_or_return = db.Column(db.Boolean, nullable=False) #Si es falso es porque es devolución.
     bought_product = db.relationship('Boughtproduct', backref='petition', lazy=True)
     change_product = db.relationship('Change', backref='petition', lazy=True)
     return_product = db.relationship('Return', backref='petition', lazy=True)

     def serialize(self):
        return{
            "id": self.id,
            "email": self.email,
            "phone_number": self.phone_number,
            "description": self.description,
            "change_or_return": self.change_or_return,
        }

class Boughtproduct(db.Model):
     id = db.Column(db.Integer, primary_key=True)
     name = db.Column(db.String(50), nullable=False)
     price = db.Column(db.Integer, nullable=False)
     selected = db.Column(db.Boolean, nullable=False)
     description = db.Column(db.String(50), nullable=True)
     petition_id = db.Column(db.Integer, db.ForeignKey('petition.id'), nullable=True)

     def serialize(self):
        return{
            "id": self.id,
            "name": self.name,
            "price": self.price,
            "selected": self.selected,
            "description": self.description,
          
     }

class Change(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    change_product = db.Column(db.String(50), nullable=True)
    state = db.Column(db.String(50), nullable=True)
    city = db.Column(db.String(50), nullable=True)
    address = db.Column(db.String(50), nullable=True)
    commune = db.Column(db.String(50), nullable=True)
    petition_id = db.Column(db.Integer, db.ForeignKey('petition.id'), nullable=True)

    def serialize(self):
        return{
            "id": self.id,
            "change_product": self.change_product,
            "state": self.state,
            "city": self.city,
            "address": self.address,
            "commune": self.commune
        }

class Return(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    bank = db.Column(db.String(50), nullable=True)
    account_type = db.Column(db.String(50), nullable=True)
    account_number = db.Column(db.Integer, nullable=True)
    petition_id = db.Column(db.Integer, db.ForeignKey('petition.id'), nullable=True)

    def serialize(self):
        return{
            "id": self.id,
            "bank": self.bank,
            "account_type": self.account_type,
            "account_number": self.account_number
        }

class Order(db.Model):
     id = db.Column(db.Integer, primary_key=True)
     entrepreneur_name = db.Column(db.String(50), nullable=False)
     entrepreneur_lastname = db.Column(db.String(50), nullable=False)
     entrepreneur_email = db.Column (db.String(50), nullable=False)
     client_name = db.Column(db.String(50), nullable=False) 
     client_lastname = db.Column(db.String(50), nullable=False)
     client_email = db.Column(db.String(50), nullable=False) 
     booked_date = db.Column(db.DateTime, nullable=False)
     city = db.Column(db.String(50), nullable=False)
     state = db.Column(db.String(50), nullable=False)
     courrier = db.Column(db.String(50), nullable=False)
     cost = db.Column(db.Integer, nullable=False)
     number_of_packages = db.Column(db.Integer, nullable=False)
     invoice_number = db.Column(db.Integer, nullable=False)
     postCode = db.Column(db.Integer, nullable=False)
     user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=True)

     def serialize(self):
        return{
            "id": self.id,
            "entrepreneur_name": self.entrepreneur_name,
            "entrepreneur_lastname": self.entrepreneur_lastname,
            "entrepreneur_email": self.entrepreneur_email,
            "client_name": self.client_name,
            "client_lastname": self.client_lastname,
            "client_email": self.client_email,
            "booked_date": self.booked_date,
            "city": self.city,
            "state": self.state,
            "courrier": self.courrier,
            "cost": self.cost,
            "number_of_packages": self.number_of_packages,
            "invoice_number": self.invoice_number,
            "postCode": self.postCode
        }

class Billing_details(db.Model):
     id = db.Column(db.Integer, primary_key=True)
     cardNumber = db.Column(db.Integer, nullable=False)
     cvv = db.Column(db.Integer, nullable=False)
     expiration_date = db.Column(db.String(50), nullable=False)
     user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=True)

     def serialize(self):
        return{
        "id": self.id,
        "cardNumber": self.cardNumber,
        "cvv": self.cvv,
        "expiration_date": self.expiration_date
       
        }

class Person(db.Model):
    __tablename__ = 'person'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50), nullable=False)
    lastname = db.Column(db.String(50), nullable=False)
    users = db.relationship("User", backref="person", lazy=True)

    def serialize(self):
        return{
            "id": self.id,
            "name": self.name,
            "lastname": self.lastname,
            
        }


class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(255), nullable=False)
    password= db.Column(db.String(255), nullable=False)
    person_id = db.Column(db.Integer, db.ForeignKey("person.id"), nullable=False)

    def serialize(self):
        return{
            "id":self.id,
            "email":self.email,
            "password":self.password
        
        }
