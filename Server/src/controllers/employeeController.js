const { Pool } = require('pg');

const pool = new Pool({
    host: 'localhost',
    user: 'postgres',
    password: 'yourPassword',
    database: 'webService',
    port: '5432'
});

const getEmployees = async(req, res) => {
    const response = await pool.query('SELECT * FROM employees');
    res.status(200).json(response.rows);
};

const getEmployeeById = async(req, res) => {
    const id = req.params.id;
    const response = await pool.query('SELECT * FROM employees WHERE employee_id = $1', [id]);
    res.status(200).json(response.rows);
};

const getEmployeeByQuantity = async(req, res) => {
    const quantity = req.params.quantity;
    const response = await pool.query('SELECT * FROM employees LIMIT $1', [quantity]);
    res.status(200).json(response.rows);
};

const createEmployees = async(req, res) => {
    const { employee_name, employee_office, employee_birth, employee_admission } = req.body;
    const response = await pool.query('INSERT INTO employees(employee_name, employee_office, employee_birth, employee_admission) VALUES($1,$2,$3,$4);', [employee_name, employee_office, employee_birth, employee_admission]);

    res.json({
        message: 'Employee Added Successfully',
        body: {
            employee: { employee_name, employee_office, employee_birth, employee_admission }
        }
    });
};

const getEmployeeByOffice = async(req, res) => {

    const office = req.params.office;
    const response = await pool.query(`SELECT * FROM employees WHERE employee_office ILIKE '%${office}%'`);
    res.status(200).json(response.rows);

};

const updateEmployee = async(req, res) => {
    const id = req.params.id;
    const { employee_name, employee_office, employee_birth, employee_admission } = req.body;
    const response = await pool.query('UPDATE employees SET employee_name= $1, employee_office= $2, employee_birth= $3, employee_admission= $4 WHERE employee_id = $5', [employee_name, employee_office, employee_birth, employee_admission, id]);
    res.json({
        message: 'Employee Updated Successfully',
        body: {
            employee: { employee_name, employee_office, employee_birth, employee_admission }
        }
    });
};

const deleteEmployee = async(req, res) => {
    const id = req.params.id;
    const response = await pool.query('DELETE FROM employees WHERE employee_id = $1', [id]);
    res.json(`Employee ${id} deleted successfully!`);
};

module.exports = {
    getEmployees,
    getEmployeeById,
    getEmployeeByQuantity,
    getEmployeeByOffice,
    createEmployees,
    updateEmployee,
    deleteEmployee
}