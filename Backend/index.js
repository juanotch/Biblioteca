const express = require("express") 
const cors = require("cors")

const pool = require("./db")


const app = express();

app.use(cors())
app.use(express.json());


app.post("/libro",async(req,res)=>{
try {
    const {title,rating,image}=req.body;
    console.log(req.body)
    
    const newlib=await pool.query(`INSERT INTO books(title,rating,image) Values($1,$2,$3) RETURNING*`,[title,rating,image])
  
    res.json(newlib.rows[0])
} catch (err) {
    console.error(err.message)
}
})

app.get("/catalogo",async(req,res)=>{
    try {

        const todo = await pool.query(`SELECT * FROM books`)

        res.json(todo.rows)
    } catch (err) {
        console.error(err.message)
    }
})

app.delete("/libro/:id",async(req,res)=>{
    try {
        const {id}=req.params;

        const deletelib=await pool.query(`DELETE FROM books WHERE id=$1`,[id]);

        res.json("libro eliminado")
        
    } catch (err) {
        console.error(err.message)
    }
   
})




app.listen(5000,()=>{
    console.log("server iniciado")
})