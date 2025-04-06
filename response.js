const response = (status,data, message, res) => {
    return (
        {
            statusCode: status,
            datas: data,
            messageText: message,
            metaDAta: {
                prev:'',
                nex:''
            }
        }
        
    )
}

export default response