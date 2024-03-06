
const Home = async (req , res) =>{
    try {
        await res
        .status(200)
        .send("This is my Home")
        
    } catch (error) {
        res.status(400).send({msg : "Page Not Found"})
        console.log(error);
    }
}
const Register = async (req , res) =>{
    try {
        console.log(req.body);
        res.status(200).json(req.body)  
    } catch (error) {
        res.status(400).json("Internal server error")
    }
}
module.exports = {Home , Register}