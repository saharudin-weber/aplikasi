import mongoose from "mongoose";

mongoose.connect(
    'mongodb+srv://sahar:wadraree123@cluster0.mbmaj4i.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
    ,{
    useUnifiedTopology: true,
})

export const login= mongoose.model('login',{
    nama:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    }
})
export const dataUser= mongoose.model('dataPersonWedding',{
    namaS:{
        type:String,
        require:true
    },
    
    namap:{
        type:String,
        require:true
    },
    TTlp:{
        type:String,
        require:true
    },
    agamap:{
        type:String,
        require:true
    },PekerjaanP:{
        type:String,
        require:true
    },
    bpkP:{
        type:String,
        require:true
    },
    ibuP:{
        type:String,
        require:true
    },
    namaW:{
        type:String,
        require:true
    },
    TTlW:{
        type:String,
        require:true
    },
    agamaW:{
        type:String,
        require:true
    },PekerjaanW:{
        type:String,
        require:true
    },
    bpkW:{
        type:String,
        require:true
    },
    ibuW:{
        type:String,
        require:true
    },
    hari:{
        type:String,
        require:true
    },
    dateA:{
        type:String,
        require:true
    },
    LokasiA:{
        type:String,
        require:true
    },
    hari1:{
        type:String,
        require:true
    },
    dateB:{
        type:String,
        require:true
    },
    LokasiB:{
        type:String,
        require:true
    }, foto1:{
        type:String,
        require:true
    }, foto2:{
        type:String,
        require:true
    }, foto3:{
        type:String,
        require:true
    },

    
})