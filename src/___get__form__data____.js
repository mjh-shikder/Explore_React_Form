/**
 * System of collecting data from a Form
 * 1. e.target.[name of the input feild].value
 * 2. use form action and formData in the action handler. fromData.get('name of the input feild')
 * 3. Controlled component. use stat on change of the feild. useful to dynamically handle error
 * 4. handle all controlled feild on one state object 
 * const [formData, setFromData] = useState ({name: '', passowrd: '' , phone: '' })
 */