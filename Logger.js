const Winston  = require('winston');



module.exports=Winston.createLogger(
    {
        transports:[
            new Winston.transports.Console(
                {   level:'debug',
                    format: Winston.format.combine(Winston.format.colorize(), Winston.format.simple())
                }
            )
        ]
    }
)

Winston.format.colorize//?