const services = [
    {type:'manicure'},
    {type:'pedicur'},
    {type:'cosmetologist'},
    {type:'hairdresser'},
    {type:'eyebrower'},
    {type:'eyelash master'},
    {type:'laser'}
]
const refs = {
    input : document.querySelector('#filter'),
    list : document.querySelector('.list-services')
}


refs.input.addEventListener('input', filterInput )
function filterInput(e){
    const filter = e.target.value.toLowerCase()
    
    const filterItem = services.filter(el => el.type.toLowerCase().includes(filter))
    
    refs.list.innerHTML = createListItem(filterItem)
}

const listItem = createListItem (services)
function createListItem(items){
    return items.map(item => `<li>${item.type}</li>`).join(' ')
}
refs.list.innerHTML = listItem