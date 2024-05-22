
//  get item from ls
const getItemFromLS = () =>{
    const getItem = localStorage.getItem('jobs')
    if (getItem) {
        return JSON.parse(getItem)
    }
    return []
}

// save item to ls

const saveItemToLS = job =>{
    const jobStrigified = JSON.stringify(job)
    localStorage.setItem('jobs', jobStrigified)
}

// add item to ls

const addItemToLS = id =>{
    const job = getItemFromLS()
    job.push(id)
    saveItemToLS(job)
}

//  remove item from ls 

const removeItemFromLS = id =>{
    const job = getItemFromLS()

    const remainingJobs = job.filter(idx => idx !== id)

    saveItemToLS(remainingJobs)
}

export {getItemFromLS, addItemToLS, removeItemFromLS}
