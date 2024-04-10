import Questions from "../models/questionSchema.js";
import Results from "../models/resultSchema.js";
import questions, { answers } from '../database/data.js'

/** Get all questions */
export async function getQuestions(req, res) {
    try {
        const q = await Questions.find();
        res.json(q);
    } catch(error) {
        res.json({ error });
    }
 }
 
 
 /** Function to insert all questions and answers into the database */
 export async function insertQuestionsAndAnswers(req, res) {
    try {
       const result = await Questions.insertMany({ questions , answers });
            res.json({msg : "Data saved succeessfully!",data : result})
        }catch (error) {
        res.json({ error });
    }

 }
 

/**Delete all questions */
export async function dropQuestions(req,res){
    try{
      await  Questions.deleteMany();
      res.json({msg : "Question deleted successfully"});
    }
    catch{
      res.json({ error })
    }
} 

/**get all result */
export async function getResult(req,res){
    try{
      const r =  await Results.find()
      res.json(r)
    }
    catch(error){
      res.json({ error})       
    }
} 

/**post all result */
export async function storeResult(req, res) {
    try {
        const { username, result, attempts, points, achived } = req.body;
        if (!username || !result) {
            throw new Error('Data not provided...!');
        }

        const createdResult = await Results.create({ username, result, attempts, points, achived });
        res.json({ msg: "Result saved successfully..!", data: createdResult });
    } catch (error) {
        res.json({ error: error.message });
    }
}

/**delete all result */
export async function dropResult(req,res){
   try{
     await Results.deleteMany();
     res.json({meg : "Result Delete Succeffuly..!"})
   }
   catch(error){
    res.json({error})
   }
}