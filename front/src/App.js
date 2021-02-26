import React,{Component} from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import axios from 'axios';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      stud : [],
      id : "",
      studname : "",
      dob : "",
      std : "",
      div : "",
      gender : "",
    };
  }

  componentDidMount(){
    axios.get("http://localhost:8080/api/student").then((res) =>{
      this.setState({
        stud:res.data,
        id:"",
        studname:"",
        dob:"",
        std:"",
        div:"",
        gender:""
      })
    })
  }

  valid(e){
    var ch= String.fromCharCode(e.which);
    if(!(/^[a-z\s]+$/i.test(ch))){
      e.preventDefault();
    }
  }

  submit(e,id){
    e.preventDefault();

    axios.post("http://localhost:8080/api/student",{
      id:id,
      studname:this.state.studname,
      dob:this.state.dob,
      std:this.state.std,
      div:this.state.div,
      gender:this.state.gender
    }).then(()=>{
      this.componentDidMount();
    })
  }
 
  render(){

        return (
          <div className="row">
            <div className="col-6">
              <div className="container">
              <h2>Student Registration</h2>
            
                <form onSubmit={(e)=>this.submit(e,this.state.id)}>
                  <div className="form-group col-12">
                    <label className="col-6">Name :</label>
                    <input type="text" value={this.state.name} onKeyPress={this.valid} onChange={(e)=>this.setState({studname:e.target.value})} name="studname" id="myInput" className="col-6" required="required" />
                    <p style={{color : "red",fontSize:12}}>{this.state.studnameError}</p>
                  </div>

                  <div className="form-group col-12">
                    <label className="col-6">DOB :</label>
                    <input type="Date" value={this.state.dob} onChange={(e)=>this.setState({dob:e.target.value})} name="dob" className="col-6" required="required" />
                  </div>

                  <div className="form-group col-12">
                    <label className="col-6">Std :</label>
                    <select name="std" value={this.state.std} onChange={(e)=>this.setState({std:e.target.value})} required >
                      <option selected value="">--select--</option> 
                      <option value="I">I</option>
                      <option value="II">II</option>
                      <option value="III">III</option>
                      <option value="IV">IV</option>
                      <option value="V">V</option>
                      <option value="VI">VI</option>
                      <option value="VII">VII</option>
                      <option value="VIII">VIII</option>
                      <option value="IX">IX</option>
                      <option value="X">X</option>
                      <option value="XI">XI</option>
                      <option value="XII">XII</option>
                    </select>
                  </div>

                  <div className="form-group col-12">
                    <label className="col-6">Div :</label>
                    <select name="div" value={this.state.div} onChange={(e)=>this.setState({div:e.target.value})} required >
                    <option  selected value="">--select--</option>
                      <option value="A">A</option>
                      <option value="B">B</option>
                      <option value="C">C</option>
                    </select>
                  </div>

                  <div className="form-group col-12">
          
                    <label className="col-6">Gender :</label> 
                    
                      <label className="col-2">Male :</label>
                      <input className="" type="radio" name="gender" value="Male" onChange={(e)=>this.setState({gender:e.target.value})} required />

                      <label className="col-2">Female :</label>
                      <input className="" type="radio" name="gender" value="Female" onChange={(e)=>this.setState({gender:e.target.value})} required />

                  </div>

                  <div className="text-center">
                    <button className="btn btn-success" onClick={this.register} type="submit">Save</button>
                  </div>

                </form>
              </div>
            </div>

          <div className="col-6">
            <h2>Student Details</h2>
            <table className="table table-dark">
              <thead>
                <tr>
                  <th>Roll No</th>
                  <th>Name</th>
                  <th>DOB</th>
                  <th>Std</th>
                  <th>Division</th>
                  <th>Gender</th>
                </tr>
              </thead>
              <tbody>
                    {
                      this.state.stud.map((student,k) =>{
                        return(
                          <tr>
                              <td>{student.id}</td>
                              <td>{student.studname}</td>
                              <td>{student.dob}</td>
                              <td>{student.std}</td>
                              <td>{student.div}</td>
                              <td>{student.gender}</td>
                          </tr>
                        )
                      } )
                    }
              </tbody>
            </table>
          </div>
        </div>
          
        );
    }
}

export default App;
