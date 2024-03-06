To start mysql, in the terminal, type in `mysql -u root`

# Create a new database user
In the MySQL CLI:
```
CREATE USER 'foo'@'%' IDENTIFIED WITH mysql_native_password BY 'bar';

<!-- the foo user is able to do EVERYTHING -->
grant all privileges on *.* to 'foo'@'%';


FLUSH PRIVILEGES;
````

How does stripe work 

Between 3 entities 
- Browser 
- Express
- Stripe 

Express should never store the credit card number from the browers

Simple way
Upon Checkout
- Express will tell stripe about the items and the amount
- Stripe will provide a session ID to express
- Express will then provide a session ID to the browser
- The browser will go to stripe with the session ID provided by express / stripe and pay
- stripe will notify express of the payment
