CREATE DATABASE webService;

CREATE TABLE employees (
    employee_id serial PRIMARY KEY,
    employee_name varchar(100) not null,
    employee_office varchar(100) not null,
    employee_birth date not null,
    employee_admission date not null
);

INSERT INTO employees (employee_name, employee_office, employee_birth,employee_admission)
VALUES ('Funcionario 1', 'Desenvolvedor Jr', '2003-06-09', '2021-07-21');

INSERT INTO employees (employee_name, employee_office, employee_birth,employee_admission)
VALUES ('Funcionario 2', 'Tester', '2001-02-17', '2021-06-21');

INSERT INTO employees (employee_name, employee_office, employee_birth,employee_admission)
VALUES ('Funcionario 3', 'DevOps', '2001-05-20', '2021-06-21');

INSERT INTO employees (employee_name, employee_office, employee_birth,employee_admission)
VALUES ('Funcionario 4', 'DBA', '2002-05-20', '2021-03-21');