const getStorageProductApplication = () => {
    const storeProductApplication = localStorage.getItem('product-application');
    if(storeProductApplication){
        return JSON.parse(storeProductApplication);
    }
    return [];
}

const saveProductApplication = id => {
    const storeProductApplications = getStorageProductApplication();
    const exists = storeProductApplications.find(productId => productId === id);
    if(!exists){
        storeProductApplications.push(id);
        localStorage.setItem('product-application', JSON.stringify(storeProductApplications));
    }
}

export {getStorageProductApplication, saveProductApplication}