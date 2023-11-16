const express = require('express')

const app = express();

app.use(expres.json())

const { readEmployees, readEmployeeById, insertEmployee, updateEmployee, deleteEmp } = require('./operations')


app.get("/getEmployees", async (req, res) => {
    const employees = await readEmployees()
    res.send(employees)
})

app.get("/empDetails/:id", async (req, res) => {
    const id = req.params.id;
    const emp = await readEmployeeById(id)
    res.send(emp)
})


app.post("/new", async (req, res) => {
    const { id, name, city, salary, age } = req.body;
    const emp = await insertEmployee(id, name, city, salary, age)
    res.send(emp)
})

app.put("/update", async (req, res) => {
    const { id, city } = req.body;
    const updateEmp = await updateEmployee(id, city)
    res.send(updateEmp)
})

app.delete("/delete/:id", async (req, res) => {
    const id = req.params.id;
    const deleted = await deleteEmp(id)
    res.send(deleted)
})


app.listen(3000, () => {
    console.log("Server is running...")
})