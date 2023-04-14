let messe = [
    { "diocesi_id": "001", "chiesa_id": "0017", "paese": "Rossana", "frazione": "Mad. delle Grazie", "chiesa_nome": "Mad. delle Grazie", "data": "04/02/2023", "prefes": "PRE", "ora": "15:00", "note": "" },
    { "diocesi_id": "001", "chiesa_id": "0011", "paese": "Piasco", "frazione": "Capoluogo", "chiesa_nome": "S. Giovanni", "data": "04/02/2023", "prefes": "PRE", "ora": "17:00", "note": "Il 1° e 3° Sabato del mese" },
    { "diocesi_id": "001", "chiesa_id": "0016", "paese": "Rossana", "frazione": "Capoluogo", "chiesa_nome": "Maria V. Assunta", "data": "04/02/2023", "prefes": "PRE", "ora": "18:00", "note": "" },
    { "diocesi_id": "001", "chiesa_id": "0013", "paese": "Piasco", "frazione": "Capoluogo", "chiesa_nome": "Mad. del Carmine", "data": "05/02/2023", "prefes": "FES", "ora": "08:30", "note": "" },
    { "diocesi_id": "001", "chiesa_id": "0018", "paese": "Rossana", "frazione": "Lemma", "chiesa_nome": "S. Marco", "data": "05/02/2023", "prefes": "FES", "ora": "09:30", "note": "La 1^ e la 3^ Domenica del mese" },
    { "diocesi_id": "001", "chiesa_id": "0011", "paese": "Piasco", "frazione": "Capoluogo", "chiesa_nome": "S. Giovanni", "data": "05/02/2023", "prefes": "FES", "ora": "10:00", "note": "" },
    { "diocesi_id": "001", "chiesa_id": "0012", "paese": "Piasco", "frazione": "S. Antonio", "chiesa_nome": "S. Antonio", "data": "05/02/2023", "prefes": "FES", "ora": "11:00", "note": "La 1^ e la 3^ Domenica del mese" },
    { "diocesi_id": "001", "chiesa_id": "0012", "paese": "Piasco", "frazione": "S. Antonio", "chiesa_nome": "S. Antonio", "data": "05/02/2023", "prefes": "FES", "ora": "18:00", "note": "" },
    
    { "diocesi_id": "001", "chiesa_id": "0017", "paese": "Rossana", "frazione": "Mad. delle Grazie", "chiesa_nome": "Mad. delle Grazie", "data": "11/02/2023", "prefes": "PRE", "ora": "15:00", "note": "" },
    { "diocesi_id": "001", "chiesa_id": "0012", "paese": "Piasco", "frazione": "S. Antonio", "chiesa_nome": "S. Antonio", "data": "11/02/2023", "prefes": "PRE", "ora": "17:00", "note": "Il 2° e 4° Sabato del mese" },
    { "diocesi_id": "001", "chiesa_id": "0016", "paese": "Rossana", "frazione": "Capoluogo", "chiesa_nome": "Maria V. Assunta", "data": "11/02/2023", "prefes": "PRE", "ora": "18:00", "note": "" },
    { "diocesi_id": "001", "chiesa_id": "0013", "paese": "Piasco", "frazione": "Capoluogo", "chiesa_nome": "Mad. del Carmine", "data": "12/02/2023", "prefes": "FES", "ora": "08:30", "note": "" },
    { "diocesi_id": "001", "chiesa_id": "0011", "paese": "Piasco", "frazione": "Capoluogo", "chiesa_nome": "S. Giovanni", "data": "12/02/2023", "prefes": "FES", "ora": "10:00", "note": "" },
    { "diocesi_id": "001", "chiesa_id": "0016", "paese": "Rossana", "frazione": "Capoluogo", "chiesa_nome": "Maria V. Assunta", "data": "12/02/2023", "prefes": "FES", "ora": "11:00", "note": "La 2^ e la 4^ Domenica del mese" },
    { "diocesi_id": "001", "chiesa_id": "0012", "paese": "Piasco", "frazione": "S. Antonio", "chiesa_nome": "S. Antonio", "data": "12/02/2023", "prefes": "FES", "ora": "18:00", "note": "" },
    
    { "diocesi_id": "001", "chiesa_id": "0017", "paese": "Rossana", "frazione": "Mad. delle Grazie", "chiesa_nome": "Mad. delle Grazie", "data": "18/02/2023", "prefes": "PRE", "ora": "15:00", "note": "" },
    { "diocesi_id": "001", "chiesa_id": "0011", "paese": "Piasco", "frazione": "Capoluogo", "chiesa_nome": "S. Giovanni", "data": "18/02/2023", "prefes": "PRE", "ora": "17:00", "note": "Il 1° e 3° Sabato del mese" },
    { "diocesi_id": "001", "chiesa_id": "0016", "paese": "Rossana", "frazione": "Capoluogo", "chiesa_nome": "Maria V. Assunta", "data": "18/02/2023", "prefes": "PRE", "ora": "18:00", "note": "" },        
    { "diocesi_id": "001", "chiesa_id": "0013", "paese": "Piasco", "frazione": "Capoluogo", "chiesa_nome": "Mad. del Carmine", "data": "19/02/2023", "prefes": "FES", "ora": "08:30", "note": "" },
    { "diocesi_id": "001", "chiesa_id": "0018", "paese": "Rossana", "frazione": "Lemma", "chiesa_nome": "S. Marco", "data": "19/02/2023", "prefes": "FES", "ora": "09:30", "note": "La 1^ e la 3^ Domenica del mese" },
    { "diocesi_id": "001", "chiesa_id": "0011", "paese": "Piasco", "frazione": "Capoluogo", "chiesa_nome": "S. Giovanni", "data": "19/02/2023", "prefes": "FES", "ora": "10:00", "note": "" },
    { "diocesi_id": "001", "chiesa_id": "0012", "paese": "Piasco", "frazione": "S. Antonio", "chiesa_nome": "S. Antonio", "data": "19/02/2023", "prefes": "FES", "ora": "11:00", "note": "La 1^ e la 3^ Domenica del mese" },
    { "diocesi_id": "001", "chiesa_id": "0012", "paese": "Piasco", "frazione": "S. Antonio", "chiesa_nome": "S. Antonio", "data": "19/02/2023", "prefes": "FES", "ora": "18:00", "note": "" },
    
    { "diocesi_id": "001", "chiesa_id": "0017", "paese": "Rossana", "frazione": "Mad. delle Grazie", "chiesa_nome": "Mad. delle Grazie", "data": "25/02/2023", "prefes": "PRE", "ora": "15:00", "note": "" },
    { "diocesi_id": "001", "chiesa_id": "0012", "paese": "Piasco", "frazione": "S. Antonio", "chiesa_nome": "S. Antonio", "data": "25/02/2023", "prefes": "PRE", "ora": "17:00", "note": "Il 2° e 4° Sabato del mese" },
    { "diocesi_id": "001", "chiesa_id": "0016", "paese": "Rossana", "frazione": "Capoluogo", "chiesa_nome": "Maria V. Assunta", "data": "25/02/2023", "prefes": "PRE", "ora": "18:00", "note": "" },
    { "diocesi_id": "001", "chiesa_id": "0013", "paese": "Piasco", "frazione": "Capoluogo", "chiesa_nome": "Mad. del Carmine", "data": "26/02/2023", "prefes": "FES", "ora": "08:30", "note": "" },
    { "diocesi_id": "001", "chiesa_id": "0011", "paese": "Piasco", "frazione": "Capoluogo", "chiesa_nome": "S. Giovanni", "data": "26/02/2023", "prefes": "FES", "ora": "10:00", "note": "" },
    { "diocesi_id": "001", "chiesa_id": "0016", "paese": "Rossana", "frazione": "Capoluogo", "chiesa_nome": "Maria V. Assunta", "data": "26/02/2023", "prefes": "FES", "ora": "11:00", "note": "La 2^ e la 4^ Domenica del mese" },
    { "diocesi_id": "001", "chiesa_id": "0012", "paese": "Piasco", "frazione": "S. Antonio", "chiesa_nome": "S. Antonio", "data": "26/02/2023", "prefes": "FES", "ora": "18:00", "note": "" },
	
    { "diocesi_id": "001", "chiesa_id": "0029", "paese": "Verzuolo", "frazione": "Capoluogo", "chiesa_nome": "S. Maria della Scala", "data": "05/02/2023", "prefes": "FES", "ora": "09:00", "note": "" },
    { "diocesi_id": "001", "chiesa_id": "0029", "paese": "Verzuolo", "frazione": "Capoluogo", "chiesa_nome": "S. Maria della Scala", "data": "12/02/2023", "prefes": "FES", "ora": "09:00", "note": "" },
    { "diocesi_id": "001", "chiesa_id": "0029", "paese": "Verzuolo", "frazione": "Capoluogo", "chiesa_nome": "S. Maria della Scala", "data": "19/02/2023", "prefes": "FES", "ora": "09:00", "note": "" },
    { "diocesi_id": "001", "chiesa_id": "0029", "paese": "Verzuolo", "frazione": "Capoluogo", "chiesa_nome": "S. Maria della Scala", "data": "26/02/2023", "prefes": "FES", "ora": "09:00", "note": "" },
	
    { "diocesi_id": "001", "chiesa_id": "0030", "paese": "Verzuolo", "frazione": "Capoluogo", "chiesa_nome": "SS. Filippo e Giacomo", "data": "04/02/2023", "prefes": "PRE", "ora": "18:00", "note": "" },
    { "diocesi_id": "001", "chiesa_id": "0030", "paese": "Verzuolo", "frazione": "Capoluogo", "chiesa_nome": "SS. Filippo e Giacomo", "data": "11/02/2023", "prefes": "PRE", "ora": "18:00", "note": "" },
    { "diocesi_id": "001", "chiesa_id": "0030", "paese": "Verzuolo", "frazione": "Capoluogo", "chiesa_nome": "SS. Filippo e Giacomo", "data": "18/02/2023", "prefes": "PRE", "ora": "18:00", "note": "" },
    { "diocesi_id": "001", "chiesa_id": "0030", "paese": "Verzuolo", "frazione": "Capoluogo", "chiesa_nome": "SS. Filippo e Giacomo", "data": "25/02/2023", "prefes": "PRE", "ora": "18:00", "note": "" },
    { "diocesi_id": "001", "chiesa_id": "0030", "paese": "Verzuolo", "frazione": "Capoluogo", "chiesa_nome": "SS. Filippo e Giacomo", "data": "05/02/2023", "prefes": "FES", "ora": "10:00", "note": "" },
    { "diocesi_id": "001", "chiesa_id": "0030", "paese": "Verzuolo", "frazione": "Capoluogo", "chiesa_nome": "SS. Filippo e Giacomo", "data": "12/02/2023", "prefes": "FES", "ora": "10:00", "note": "" },
    { "diocesi_id": "001", "chiesa_id": "0030", "paese": "Verzuolo", "frazione": "Capoluogo", "chiesa_nome": "SS. Filippo e Giacomo", "data": "19/02/2023", "prefes": "FES", "ora": "10:00", "note": "" },
    { "diocesi_id": "001", "chiesa_id": "0030", "paese": "Verzuolo", "frazione": "Capoluogo", "chiesa_nome": "SS. Filippo e Giacomo", "data": "26/02/2023", "prefes": "FES", "ora": "10:00", "note": "" },
    { "diocesi_id": "001", "chiesa_id": "0030", "paese": "Verzuolo", "frazione": "Capoluogo", "chiesa_nome": "SS. Filippo e Giacomo", "data": "05/02/2023", "prefes": "FES", "ora": "20:30", "note": "" },
    { "diocesi_id": "001", "chiesa_id": "0030", "paese": "Verzuolo", "frazione": "Capoluogo", "chiesa_nome": "SS. Filippo e Giacomo", "data": "12/02/2023", "prefes": "FES", "ora": "20:30", "note": "" },
    { "diocesi_id": "001", "chiesa_id": "0030", "paese": "Verzuolo", "frazione": "Capoluogo", "chiesa_nome": "SS. Filippo e Giacomo", "data": "19/02/2023", "prefes": "FES", "ora": "20:30", "note": "" },
    { "diocesi_id": "001", "chiesa_id": "0030", "paese": "Verzuolo", "frazione": "Capoluogo", "chiesa_nome": "SS. Filippo e Giacomo", "data": "26/02/2023", "prefes": "FES", "ora": "20:30", "note": "" },
	
    { "diocesi_id": "001", "chiesa_id": "0027", "paese": "Verzuolo", "frazione": "Falicetto", "chiesa_nome": "S. Bartolomeo", "data": "04/02/2023", "prefes": "PRE", "ora": "18:30", "note": "" },
    { "diocesi_id": "001", "chiesa_id": "0027", "paese": "Verzuolo", "frazione": "Falicetto", "chiesa_nome": "S. Bartolomeo", "data": "11/02/2023", "prefes": "PRE", "ora": "18:30", "note": "" },
    { "diocesi_id": "001", "chiesa_id": "0027", "paese": "Verzuolo", "frazione": "Falicetto", "chiesa_nome": "S. Bartolomeo", "data": "18/02/2023", "prefes": "PRE", "ora": "18:30", "note": "" },
    { "diocesi_id": "001", "chiesa_id": "0027", "paese": "Verzuolo", "frazione": "Falicetto", "chiesa_nome": "S. Bartolomeo", "data": "25/02/2023", "prefes": "PRE", "ora": "18:30", "note": "" },	
    { "diocesi_id": "001", "chiesa_id": "0027", "paese": "Verzuolo", "frazione": "Falicetto", "chiesa_nome": "S. Bartolomeo", "data": "05/02/2023", "prefes": "FES", "ora": "10:00", "note": "" },
    { "diocesi_id": "001", "chiesa_id": "0027", "paese": "Verzuolo", "frazione": "Falicetto", "chiesa_nome": "S. Bartolomeo", "data": "12/02/2023", "prefes": "FES", "ora": "10:00", "note": "" },
    { "diocesi_id": "001", "chiesa_id": "0027", "paese": "Verzuolo", "frazione": "Falicetto", "chiesa_nome": "S. Bartolomeo", "data": "19/02/2023", "prefes": "FES", "ora": "10:00", "note": "" },
    { "diocesi_id": "001", "chiesa_id": "0027", "paese": "Verzuolo", "frazione": "Falicetto", "chiesa_nome": "S. Bartolomeo", "data": "26/02/2023", "prefes": "FES", "ora": "10:00", "note": "" },
	
    { "diocesi_id": "001", "chiesa_id": "0028", "paese": "Verzuolo", "frazione": "Villanovetta", "chiesa_nome": "S. Andrea", "data": "04/02/2023", "prefes": "PRE", "ora": "18:00", "note": "" },
    { "diocesi_id": "001", "chiesa_id": "0028", "paese": "Verzuolo", "frazione": "Villanovetta", "chiesa_nome": "S. Andrea", "data": "11/02/2023", "prefes": "PRE", "ora": "18:00", "note": "" },
    { "diocesi_id": "001", "chiesa_id": "0028", "paese": "Verzuolo", "frazione": "Villanovetta", "chiesa_nome": "S. Andrea", "data": "18/02/2023", "prefes": "PRE", "ora": "18:00", "note": "" },
    { "diocesi_id": "001", "chiesa_id": "0028", "paese": "Verzuolo", "frazione": "Villanovetta", "chiesa_nome": "S. Andrea", "data": "25/02/2023", "prefes": "PRE", "ora": "18:00", "note": "" },
    { "diocesi_id": "001", "chiesa_id": "0028", "paese": "Verzuolo", "frazione": "Villanovetta", "chiesa_nome": "S. Andrea", "data": "05/02/2023", "prefes": "FES", "ora": "11:15", "note": "" },
    { "diocesi_id": "001", "chiesa_id": "0028", "paese": "Verzuolo", "frazione": "Villanovetta", "chiesa_nome": "S. Andrea", "data": "12/02/2023", "prefes": "FES", "ora": "11:15", "note": "" },
    { "diocesi_id": "001", "chiesa_id": "0028", "paese": "Verzuolo", "frazione": "Villanovetta", "chiesa_nome": "S. Andrea", "data": "19/02/2023", "prefes": "FES", "ora": "11:15", "note": "" },
    { "diocesi_id": "001", "chiesa_id": "0028", "paese": "Verzuolo", "frazione": "Villanovetta", "chiesa_nome": "S. Andrea", "data": "26/02/2023", "prefes": "FES", "ora": "11:15", "note": "" },
	
    { "diocesi_id": "001", "chiesa_id": "0005", "paese": "Costigliole Saluzzo", "frazione": "Capoluogo", "chiesa_nome": "S. Maria Maddalena", "data": "04/02/2023", "prefes": "PRE", "ora": "18:00", "note": "In estate a Ceretto" },
    { "diocesi_id": "001", "chiesa_id": "0005", "paese": "Costigliole Saluzzo", "frazione": "Capoluogo", "chiesa_nome": "S. Maria Maddalena", "data": "11/02/2023", "prefes": "PRE", "ora": "18:00", "note": "In estate a Ceretto" },
    { "diocesi_id": "001", "chiesa_id": "0005", "paese": "Costigliole Saluzzo", "frazione": "Capoluogo", "chiesa_nome": "S. Maria Maddalena", "data": "18/02/2023", "prefes": "PRE", "ora": "18:00", "note": "In estate a Ceretto" },
    { "diocesi_id": "001", "chiesa_id": "0005", "paese": "Costigliole Saluzzo", "frazione": "Capoluogo", "chiesa_nome": "S. Maria Maddalena", "data": "25/02/2023", "prefes": "PRE", "ora": "18:00", "note": "In estate a Ceretto" },
    { "diocesi_id": "001", "chiesa_id": "0005", "paese": "Costigliole Saluzzo", "frazione": "Capoluogo", "chiesa_nome": "S. Maria Maddalena", "data": "05/02/2023", "prefes": "FES", "ora": "11:00", "note": "" },
    { "diocesi_id": "001", "chiesa_id": "0005", "paese": "Costigliole Saluzzo", "frazione": "Capoluogo", "chiesa_nome": "S. Maria Maddalena", "data": "12/02/2023", "prefes": "FES", "ora": "11:00", "note": "" },
    { "diocesi_id": "001", "chiesa_id": "0005", "paese": "Costigliole Saluzzo", "frazione": "Capoluogo", "chiesa_nome": "S. Maria Maddalena", "data": "19/02/2023", "prefes": "FES", "ora": "11:00", "note": "" },
    { "diocesi_id": "001", "chiesa_id": "0005", "paese": "Costigliole Saluzzo", "frazione": "Capoluogo", "chiesa_nome": "S. Maria Maddalena", "data": "26/02/2023", "prefes": "FES", "ora": "11:00", "note": "" },
    { "diocesi_id": "001", "chiesa_id": "0006", "paese": "Costigliole Saluzzo", "frazione": "Capoluogo", "chiesa_nome": "Confraternita", "data": "05/02/2023", "prefes": "FES", "ora": "18:00", "note": "" },
    { "diocesi_id": "001", "chiesa_id": "0006", "paese": "Costigliole Saluzzo", "frazione": "Capoluogo", "chiesa_nome": "Confraternita", "data": "12/02/2023", "prefes": "FES", "ora": "18:00", "note": "" },
    { "diocesi_id": "001", "chiesa_id": "0006", "paese": "Costigliole Saluzzo", "frazione": "Capoluogo", "chiesa_nome": "Confraternita", "data": "19/02/2023", "prefes": "FES", "ora": "18:00", "note": "" },
    { "diocesi_id": "001", "chiesa_id": "0006", "paese": "Costigliole Saluzzo", "frazione": "Capoluogo", "chiesa_nome": "Confraternita", "data": "26/02/2023", "prefes": "FES", "ora": "18:00", "note": "" },
	
		
	
]