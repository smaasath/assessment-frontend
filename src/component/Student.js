import { useEffect, useState } from "react";
import axios from 'axios';
function Student() {

  const [id, setId] = useState('');
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [fee, setFee] = useState("");
  const [students, setUsers] = useState([]);
  const [page, setpage] = useState(1);


  useEffect(() => {
    (async () => await Test())();
  }, []);

  async function Test() {
    axios.get('http://127.0.0.1:8000/booking')
      .then(function (response) {
        // handle success
        console.log(response);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });

  }


  return (
    <div>
      <h1>Student Details</h1>
      <div class="container mt-4" >
        <form>
          <form id="csv-upload-form">
            <div class="mb-3">
              <label for="csvFile" class="form-label">CSV file</label>
              <input type="file" accept=".csv" class="form-control" id="csvFile" name="file" required />
            </div>
            <button type="submit" class="btn btn-primary">Upload</button>
          </form>
        </form>
      </div>


      <table class="table table-dark" align="center">
        <thead>
          <tr>
            <th scope="col">Student Id</th>
            <th scope="col">Student Name</th>
            <th scope="col">Address</th>
            <th scope="col">Fee</th>

            <th scope="col">Option</th>
          </tr>
        </thead>
        {students.map(function fn(student) {
          return (
            <tbody>
              <tr>
                <th scope="row">{student.id} </th>
                <td>{student.name}</td>
                <td>{student.address}</td>
                <td>{student.fee}</td>
              </tr>
            </tbody>
          );
        })}
      </table>
    </div>
  );
}
export default Student;