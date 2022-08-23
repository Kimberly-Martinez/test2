const express=require("express")
const app=express()

  app.set("view engine","ejs",)
  app.use(express.static("static"))


  
app.get("/",(req,res)=>{
    res.render("index",data)
})


  
app.get("/index2",(req,res)=>{
  res.render("index2",data)
})

app.get("/inicio",(req,res)=>{
  res.render("inicio")
})


app.listen(3000)


  const data={Estudiantes:[ 
    { "id": "NOTRE-STD-01",
    "name": "Ailyn Ximena Hernandez Chavarria",
    "abscense": "NOTRE-GRADE-7MO-A",
    "idGrade": '' },
  { "id":"NOTRE-STD-02",
    "name": "Allison Tatiana Urbina Sandoval",
    "abscense": "NOTRE-GRADE-7MO-A",
    "idGrade": '' },
  { "id": 'NOTRE-STD-03',
    "name": 'Ana Lucia Espinal Inestroza',
    "abscense": "NOTRE-GRADE-7MO-A2",
    "idGrade": "" },
  { "id": "NOTRE-STD-04",
    "name": "Carol Sofia Gough Paz",
    "abscense": "NOTRE-GRADE-7MO-A",
    "idGrade": "" },
  { "id": "NOTRE-STD-05",
    "name": "Dania Abigail Euceda Lopez",
    "abscense": "NOTRE-GRADE-7MO-A",
    "idGrade": "" },
  { "id": "NOTRE-STD-06",
    "name":"Devenny Sophia Galindo Archaga",
    "abscense": "NOTRE-GRADE-7MO-A",
    "idGrade":" " },
  {"id": "NOTRE-STD-07",
   "name":"Emily Angelica Salazar Diaz",
    "abscense": "NOTRE-GRADE-7MO-A",
    "idGrade": "" },
  { "id": "NOTRE-STD-08",
    "name": "Grecia Maria Torres Valladares",
    "abscense": "NOTRE-GRADE-7MO-A",
    "idGrade": "" },
  { "id": "NOTRE-STD-09",
    "name": "Sunny Daniela Sanchez Lopez",
    "abscense": "NOTRE-GRADE-7MO-A",
    "idGrade": "" },
  { "id": 'NOTRE-STD-10',
    "name": "Victoria Alejandra Majano Vargas",
    "abscense": "NOTRE-GRADE-7MO-A",
    "idGrade": "" },
  { "id": "NOTRE-STD-11",
    "name": "Victoria Sofia Figueroa Castro",
    "abscense": "NOTRE-GRADE-7MO-A",
    "idGrade": "" },
  { "id": "NOTRE-STD-12",
    "name": "Virginia Sofia Rueda Gutierrez",
    "abscense": "NOTRE-GRADE-7MO-A",
    "idGrade": "" },
  { "id": "NOTRE-STD-13",
    "name": "Anuar Josue Garcia Garay",
    "abscense": "NOTRE-GRADE-7MO-A",
    "idGrade": "" },
  { "id": "NOTRE-STD-14",
    "name": "Axel Jafeth Rodriguez Zelaya",
    "abscense": "NOTRE-GRADE-7MO-A",
    "idGrade": '' },
  { "id": "NOTRE-STD-15",
    "name": "Carlos Aaron Bautista Ortega",
    "abscense": "NOTRE-GRADE-7MO-A",
    "idGrade": "" },
  { "id": "NOTRE-STD-16",
    "name": "Cesar Andres Ventura Calderon",
    "abscense": "NOTRE-GRADE-7MO-A",
    "idGrade": "" },
  { "id": "NOTRE-STD-17",
    "name": "Cesar Jafeth Gonzales Cabrera",
    "abscense": "NOTRE-GRADE-7MO-A",
    "idGrade": "" },
  { "id": "NOTRE-STD-18",
    "name": "Diego Francisco Romero PeÃ±a",
    "abscense": "NOTRE-GRADE-7MO-A",
    "idGrade": "" } 
],

Maestros:[

     { "id": "NOTRE-TEACH-01",
    "name": "Angela Maria Lagos CabÃºs",
    "idFolder": "NOTRE-FOLDER-01",
    "email": "173dDwj2KnSYT_4DAKZThh1BCUPnS0Yvtdb80yqhMETA",
    "form": "angelagos72@gmail.com" },
  { "id": "NOTRE-TEACH-02",
    "name": "Dianka Gissell VÃ¡squez Vargas",
    "idFolder": "NOTRE-FOLDER-02",
    "email": "",
    "form": "lic.diankavasquez@gmail.com" },
  { "id": "NOTRE-TEACH-03",
    "name": "Dilcia Paola Carias Medina",
    "idFolder": "NOTRE-FOLDER-03",
    "email": '',
    "form": "paolacarias.tes@gmail.com" },
  { "id": "NOTRE-TEACH-04",
    "name": "Erika Yolanda HenrÃ­quez Fajardo",
    "idFolder": "NOTRE-FOLDER-04",
    "email": '',
    "form": 'henriquezerika333@gmail.com' },
  { "id": "NOTRE-TEACH-05",
    "name": "Hasel Aracely Molina Midence",
    "idFolder": "NOTRE-FOLDER-05",
    "email": "",
    "form": "indhaselmolina@gmail.com" },
  { "id": "NOTRE-TEACH-06",
    "name": "Jonathan JosÃ© Gallardo",
    "idFolder": "NOTRE-FOLDER-06",
    "email": "",
    "form": "jonathangallardo47@gmail.com" },
  { "id": "NOTRE-TEACH-07",
    "name": "Josue Donadin Alvarez",
    "idFolder": "NOTRE-FOLDER-07",
    "email": "",
    "form": "jdonadinalvarez@gmail.com" },
  { "id": "NOTRE-TEACH-08",
    "name": "Krizia Gabriela Blanco CabÃºs",
    "idFolder": "NOTRE-FOLDER-08",
    "email": "",
    "form": "blanco.krizia@gmail.com" },
  { "id": "NOTRE-TEACH-09",
    "name": "Luis Alberto GarcÃ­a Deras",
    "idFolder": "NOTRE-FOLDER-09",
    "email": "",
    "form": "Luisssdera@gmail.com" },
  { "id": "NOTRE-TEACH-10",
    "name": "Marco Tulio Ramos Portillo",
    "idFolder": "NOTRE-FOLDER-10",
    "email": "",
    "form": "marcotulio_84@hotmail.com" },
  { "id": "NOTRE-TEACH-11",
    "name": "Marcos Euceda",
    "idFolder": "NOTRE-FOLDER-11",
    "email": "",
    "form": "maeuceda@hotmail.com" },
  { "id": "NOTRE-TEACH-12",
    "name": "Mary Jean Castro Herrera",
    "idFolder": "NOTRE-FOLDER-1",
    "email": '',
    "form": "mjean_castro@hotmail.com" }

],
}


