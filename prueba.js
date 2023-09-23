// let myPromise = new Promise((resolve, reject) => {
//     let numRan = Math.floor(Math.random() * 10)

//     if (numRan % 2 == 0) {
//         resolve("Exito todo es esta bien")
//     } else {
//         reject("Error en la matrix")
//     }

// })

// myPromise
//     .then((response) => {
//         console.log(response)
//     }).catch((error) => {
//         console.log(error)
//     })




// function returnedPromiseHere() {
//     return new Promise((resolve, reject) => {
//         let numRan = Math.floor(Math.random() * 10)

//         if (numRan % 2 == 0) {
//             resolve("Exito todo es esta bien")
//         } else {
//             reject("Error en la matrix")
//         }
//     });
// }



// async function useAsyncFunction() {

//     console.log("Soy una tarea rapida");
//     try {
//         let result = await returnedPromiseHere();
//         console.log(result);
//         console.log("Tuve que esperar a que terminara");
//     } catch (error) {
//         console.log(error)
//     }
// }
// console.log("hola de afuerra de la funcion")

// useAsyncFunction();


function promise1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Estoy resuelto como 1");
        }, 1000);
    });

}

function promise2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Estoy resuelto como 2");
        }, 2000);

    });

}

function promise3() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Estoy resuelto como 3");
        }, 3000);
    });
}

async function handlingAllPromises() {
    // let first = await promise1();
    // let second = await promise2();
    // let third = await promise3();

    let first = await Promise.race([promise1(), promise2(), promise3()]);

    console.log(first);
}
handlingAllPromises();