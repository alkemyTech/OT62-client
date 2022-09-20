const valueTranslate = (value, place) => {
    let label = '';
    let type = '';
    let placeholder = '';

    switch (value[0]) {
        case 'title':
            label = 'Título:'
            type = 'text'
            placeholder = 'Inserte un título'
            break;
        case 'name':
            label = 'Nombre:'
            type = 'text'
            placeholder = 'Inserte un nombre'
            break;
        case 'content':
            label = 'Contenido:'
            type = 'text'
            placeholder = 'Inserte un contenido'
            break;
        case 'category':
            label = 'Categoría:'
            type = 'text'
            placeholder = 'Inserte una categoría'
            break;
        case 'welcomeText':
            label = 'Texto de bienvenida:'
            type = 'text'
            placeholder = 'Introduzca un texto de bienvenida'
            break;
        default:
            break
    }

    if(place === 'label') {
        return label;
    } else if (place === 'type') {
        return type;
    } else if(place === 'placeholder') {
        return placeholder;
    }
}

export default valueTranslate;