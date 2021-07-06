export let listNotes = [];

export const createController = (req,res) => {
    const { header = null, description = null, isFinished = false } = req.body

    if(!header || !description){
        return res.status(400).json({message: 'Отсутствует заголовок или описание таблицы'})
    }

    const idx = listNotes.findIndex((ls) => ls.header === header)

    if (idx !== -1) {
        return res.status(400).json({ message: 'Такая задача уже есть в списке' })
    } 


    listNotes.push({
        header,
        description,
        isFinished
    })

    console.log(listNotes);

    res.status(201).json({ message: 'Заметка был успешно создана' })
}

export const listController = (req, res) => {
    return res.json({ listNotes })
}

export const deleteController = (req, res) => {
    const { header } = req.params
    console.log(header);

    const deleted = listNotes.find(ls => ls.header === header);
    const idx = listNotes.findIndex((ls) => ls.header === header)

    if (idx === -1) {
        return res.status(400).json({ message: 'Такая задача отсутствует в списке' })
    } 

    if(deleted) {
        console.log(deleted);
        listNotes = listNotes.filter(ls => ls.header !== header)
        return res.json({ message: `Задача ${header} была удалена`})

    } else {
        console.log(deleted);
        res.status(404).json({ message: 'Ошибка.' })
    }
}

export const updateController = (req,res) =>{
    
    const { header } = req.params
    const { isFinished } = req.body

    const list = listNotes.find(ls => ls.header == header)
    const idx = listNotes.findIndex((ls) => ls.header === header)

    if (idx === -1) {
        return res.status(400).json({ message: 'Такая задача отсутствует в списке' })
    } 

    list.isFinished = isFinished;

    return res.json({message: `Заметка ${header} завершена`});  

}