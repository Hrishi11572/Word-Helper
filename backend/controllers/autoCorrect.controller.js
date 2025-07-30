import autoCorrectService from "../services/autoCorrect.service.js";

export default class AutoCorrectController {
    constructor () {
        this.service = new autoCorrectService();
    }

    async autoCorrect(req, res) {
        try{
            const {word} = req.body;
            const correctWord = await this.service.correct(word);
            res.status(200).json({
                message: 'Corrected word successfully',
                data: correctWord
            })
        }catch(err){
            console.error('Error in autoCorrect controller:', err.message);
            res.status(500).json({error: 'Internal Server Error'});
        }
    }
}