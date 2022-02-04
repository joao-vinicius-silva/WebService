const { Router } = require('express');
const router = Router();

const { getEmployees, getEmployeeById, getEmployeeByQuantity, getEmployeeByOffice, createEmployees, updateEmployee, deleteEmployee } = require('../controllers/employeeController');

router.get('/employees', getEmployees);
router.get('/employees/:id', getEmployeeById);
router.get('/employees/quantity/:quantity', getEmployeeByQuantity);
router.get('/employees/office/:office', getEmployeeByOffice);
router.post('/employees/', createEmployees);
router.put('/employees/:id', updateEmployee);
router.delete('/employees/:id', deleteEmployee);

module.exports = router;