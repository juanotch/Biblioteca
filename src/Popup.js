import React,{useState} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function FormDialog() {
  const [open, setOpen] = useState(false);

  const [title,setTitle]= useState("")
  const [image,setImage]= useState("")
  const [rating,setRating]= useState("")

  console.log(title)

  


  const handevent= async(e)=>{
        e.preventDefault();
        try {
            const body={title,image,rating}
            const response = await fetch("http://localhost:5000/libro",{
                method:"POST",
                headers:{"content-Type":"application/json"},
                 body: JSON.stringify(body),
                
        
            })
            console.log(response)
            

        } catch (err) {
            console.error(err.message)
        }
  }

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
       Añadir libro
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Añadir libro</DialogTitle>
        <DialogContent>
            <p>

            <label>Nombre del libro</label>
                 <input  value={title} onChange={e=>setTitle(e.target.value)  } type="text" ></input>
            </p>
             <p>

            <label>Nombre de la imagen</label>
                 <input value={image} onChange={e=>setImage(e.target.value)  } type="text" ></input>
            </p>
             <p>

            <label>calificacion</label>
             <input value={rating} onChange={e=>setRating(e.target.value)  } type="text" ></input>

            
          
                

            
            </p>
           
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button type="submit" onClick={handevent} color="primary">
            Agregar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}