Create the adimn user for the database in MySQL

CREATE USER 'foo'@'%' IDENTIFIED WITH mysql_native_password BY 'bar';

the foo is able to do everything
grant all privileges on *.* to 'foo'@'%';

FLUSH PRIVILEGES;

