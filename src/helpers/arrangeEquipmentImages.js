const arrangeEquipmentImages = (equipo) => {
    let newEquipo = {}
    let newImages = [];
    equipo.images.forEach(image => {
        const startIndex = image.image_url.indexOf('/rails/');
        const cutString = image.image_url.substring(startIndex);
        newImages.push({image_url: `https://barilochevip-be-production.up.railway.app${cutString}`})
    });

    newEquipo = {...equipo, images: newImages}

    return newEquipo;
}

export default arrangeEquipmentImages;