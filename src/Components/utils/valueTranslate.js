const valueTranslate = (value, place) => {
    let label = '';
    let type = '';
    let placeholder = '';

    switch (value[0]) {
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