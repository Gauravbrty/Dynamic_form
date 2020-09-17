import React , {useState} from 'react';
import MyTable from './MyTable';
import MyDialog from './MyDialog';
import Button from "@material-ui/core/Button";
const LandingPage = () => {

  const [users, setUsers] = useState([
    {
      _id: 1,
      name: "Gaurav", email: "gaurav@gmail.com", company: "kdshf"
    ,interest:  20, message: "amit"
    },
    {
      _id: 2,
      name: "Saurav", email: "Sa.ga@gmail.com", company: "TMF"
      ,interest:  20, message: "Need help in ReactJS"
    }
  ]);
  const [isDialog, setDialog] = useState(false);
  const [user, setUser] = useState({});

  const [error, setError] = useState("");


  const addUser = () => {
    // if( !user.name && !user.name.length){
    //   console.log(" if name ")
    //   setError('Error in Name')
    //   return;
    // }
    //
    // if(!user.email && !user.email.length){
    //   setError('Error in Email')
    //   return;
    // }
    //
    // if(!user.company && !user.company.length){
    //   setError('Error in Company')
    //   return;
    // }

    setError('');
    setUsers([...users, { _id: Math.random(1,10000), ...user}]);
    setUser({});
    setDialog(false)

  }

  const handleDialog = (status) => {
    setDialog(status);
    setUser(() => ({}));
    setError("");
  }

  const editUser = (updatedUser) => {
    // if(!user.name.length){
    //   setError('Error in Name')
    //   return;
    // }
    //
    // if(!user.email){
    //   setError('Error in Email')
    //   return;
    // }
    //
    // if(!user.company){
    //   setError('Error in Company')
    //   return;
    // }
    //
    // setError('');

    setUsers(users.map(oldUser => {
      console.log(user)
      console.log(oldUser._id === user._id , oldUser._id , user._id)
      if(oldUser._id === user._id){
        return user;
      }
      return oldUser;
    }));
    setUser({});
    setDialog(false)
  }

  const handleEditUser = newUser => {
    console.log(newUser)
    setUser(newUser);
    setDialog(true);
    setError("");
  }

  const deleteUser = userId => {
    setUsers(users.filter(oldUser => {
      return oldUser._id != userId
    }))
  }



  const handleInputChange = (e, key) => {
    setUser({...user, [key]: e.target.value})
  }

  console.log(users)
  return(
    <div>
      <Button variant="outlined" color="primary" onClick={() => handleDialog(true)}>
        Add Get in Touch
      </Button>
      <MyDialog
        error={error}
        addUser={addUser}
        isDialog={isDialog}
        user={user}
        handleDialog={handleDialog}
        editUser={editUser}
        handleInputChange={handleInputChange}/>
      <MyTable users={users} handleEditUser={handleEditUser} deleteUser={deleteUser}/>
    </div>
  )
}

export default LandingPage;
