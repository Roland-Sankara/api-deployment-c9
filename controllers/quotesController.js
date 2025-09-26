const getAllQuotes = (prismaClient)=>{

    return async (req, res) => {
        try {
            let quotes = await prismaClient.quote.findMany();
            res.send(quotes);
        } catch (error) {
            res.send(error);
        }
    };
}

const createAQuote = (prismaClient)=>{

    return async (req, res) => {
        console.log(req.body)
        try {
            let newQuote = await prismaClient.quote.create({
                data: {
                    text: req.body.text,
                    authorId: req.body.authorId
                }
            });
            res.send({message: "Sucessfully created the quote", newQuote});
        } catch (error) {
            res.send(error);
        }
    };
}


export {
    getAllQuotes,
    createAQuote
}
