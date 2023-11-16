const mysql = require('mysql2')

const connection = mysql.createPool({
    host: "127.0.0.1",
    user: "root",
    password: "password",
    database: "school"
}).promise()


async function readEmployees() {
    const query = "SELECT * FROM Employee";

    const [output] = await connection.query(query)
    return output;
}

async function readEmployeeById(id) {
    const query = "SELECT * FROM Employee where id=?"
    const values = [id];

    const [output] = await connection.query(query, values)
    return output;
}

async function insertEmployee(id, name, city, salary, age) {
    const query = "INSERT INTO Employee (id,name, city, salary, age) VALUES (?,?,?,?,?)"
    const values = [id, name, city, salary, age];

    const [output] = await connection.query(query, values)
    return output
}

async function updateEmployee(id, city) {
    const query = "UPDATE Employee set city =? where id =?";
    const values = [city, id];

    const [output] = await connection.query(query, values)
    return output
}

async function deleteEmp(id) {
    const query = "DELETE from Employee where id=?"
    const values = [id];

    const [output] = await connection.query(query, values)
    return output;
}


async function main() {
    // const emp = await readEmployees()
    // console.log(emp)

    // const empbyId = await readEmployeeById(2);
    // console.log(empbyId)

    // const newEmp = await insertEmployee(5, "Hari", "Kadapa", "450000", 29)
    // console.log(newEmp)

    // const updatedEmp = await updateEmployee(4, "Vizag")
    // console.log(updatedEmp)

    // const del = await deleteEmp(5);
    // console.log(del)
}

main()

module.exports = { readEmployees, readEmployeeById, insertEmployee, updateEmployee, deleteEmp }