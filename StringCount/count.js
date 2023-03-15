function count(s, letter)
    {
        let count = 0;
 
        for (let i = 0; i < s.length; i++)
        {
                          // checking character in string
            if (s.charAt(i) == letter)
            count++;
        }
        return count;
    }
    

        let str= "TechAtCore";
        let letter = 'e';
        
        document.write(count(str, letter));
         
    
 