export default class autoCorrectService {
    async correct(word){
        try{
            console.log("Received word: " , word); 
        
            // reverse the word - logic 
            const reversed = word.split('').reverse().join('');
            return reversed;
        }catch(error){
            console.error('error while finding correct match:', error.message);
            throw new Error(error);
        }     
    }
}