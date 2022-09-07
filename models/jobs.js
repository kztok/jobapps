// const job = {
//     job_title: {
//         type: String,
//         required: true,
//     },
//     city: {
//         type: String,
//         required: false,
//     },
//     state: {
//         type: String,
//         required: false,
//     },
// }

const job = (job_id, job_title, city, state) => {
    return { job_id, job_title, city, state }
}

// let peony = job('curd','bread','sandwich')
// let biscut = job('jugs','plugs')

// console.log(peony.city)
// console.log(biscut.job_title)

module.exports = { job }